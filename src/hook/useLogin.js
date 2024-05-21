import useShowToast  from "@/hook/useShowToast.js";
import useAuthStore from "@/store/authStore.js";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useState} from "react";


const useLogin = () => {
    const navigate = useNavigate();
    const showToast = useShowToast();
    const [loading, setLoading] = useState(false);
    const loginUser = useAuthStore(state => state.login );
    const[inputs, setInputs] = useState({
        email:'',
        password:'',
    });

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setInputs((prev) => ({
    //         ...prev,
    //         [name]: value,
    //     }));
    // };

    const login = async (e) => {
        e.preventDefault();
        if(!inputs.email || !inputs.password){
            return showToast('Error', 'Please fill in all fields', 'error')
        }
        setLoading(true);

        try {
            const res = await axios.post("https://authentication-pf3yfmx32q-uc.a.run.app/user/login",
                {
                    email: inputs.email,
                    password: inputs.password,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    }
                }
            );
            if (res.status === 200) {
                console.table(res.data);
                const { token, first_name, last_name, phone_number, email } = res.data;
                const userData = {
                    token,
                    first_name,
                    last_name,
                    phone_number,
                    email,
                };
                localStorage.setItem("user-data", JSON.stringify(userData));
                loginUser(userData);  // Update the auth store with the user data
                console.table("user data", userData);

                navigate("/");
            } else {
                showToast('Error','"Login failed"',  'error')
            }
        } catch (error){
            showToast('Login failed', error.message, 'error')
        } finally {
            setLoading(false);
        }
    }
    // return {loading, error, login}
    return {inputs, setInputs, loading, login}

}
export default useLogin
