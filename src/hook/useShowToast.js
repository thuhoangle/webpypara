import {useToast} from "@chakra-ui/react";
import {useCallback} from "react";

const useShowToast = () => {
    const toast = useToast()

    //use callback to prevent infinite loop
    const showToast = useCallback((title, description, status) => {
        toast({
            isClosable: true,
            duration: 5000,
            title: title,
            description: description,
            status: status,
        })
    }, [toast])
    return showToast
}
export default useShowToast
