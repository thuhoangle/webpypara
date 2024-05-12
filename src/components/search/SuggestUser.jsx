import { Avatar, Box, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useAuthStore from "@/store/authStore.js";
import useFollow from "@/hook/useFollow.jsx";

const SuggestUser = ({ user, setUser }) => {
    //'setUser' above is for updating num of followers, since our app not gonna show the num of followers so the setUser will not be use
    const { isFollowing, isUpdating, handleFollowUser } = useFollow(user.uid);
    const authUser = useAuthStore((state) => state.user);

    const onFollowUser = async () => {
        await handleFollowUser();
        setUser({
            ...user,
            followers: isFollowing
                ? user.followers.filter((follower) => follower.uid !== authUser.uid)
                : [...user.followers, authUser],
        });
    };

    return (
        <>
        <Link to={`/${user.username}`}>
            <Flex  className={'justify-between items-center w-screen px-4 mb-2'}>
                <Flex alignItems={"center"} gap={2}>
                        <Avatar src={user.profilePicURL} size={"md"} />
                        <Box className={'font-bold text-base'}>
                            {user.fullName}
                        </Box>
                    {/*<VStack spacing={2} alignItems={"flex-start"}>*/}
                    {/*    <Link to={`/${user.username}`}>*/}
                    {/*        */}
                    {/*    </Link>*/}
                    {/*    /!*<Box fontSize={11} color={"gray.500"}>*!/*/}
                    {/*    /!*    {user.followers.length} followers*!/*/}
                    {/*    /!*</Box>*!/*/}
                    {/*</VStack>*/}
                </Flex>
                {authUser.uid !== user.uid && (
                    <Button className={'text-base bg-transparent h-max text-blue-400 hover:text-gray-800'}
                        onClick={onFollowUser}
                        isLoading={isUpdating}
                    >
                        {isFollowing ? "Unfollow" : "Follow"}
                    </Button>
                )}
            </Flex>

        </Link>
        <hr className={'fill-gray-300'}/>
        </>
    );
};

export default SuggestUser;