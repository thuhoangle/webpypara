import {useToast} from "@chakra-ui/react";

const useShowToast = () => {
    const toast = useToast()
    const showToast = (title, description, status) => {
        toast({
            position: 'top',
            isClosable: true,
            duration: 5000,
            title: title,
            description: description,
            status: status,
        })
    }
    return showToast
}
export default useShowToast
