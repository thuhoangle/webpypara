import { CiCircleMore } from 'react-icons/ci';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Flex, VStack, Text, Button } from '@chakra-ui/react';
import { Avatar, AvatarGroup } from '@chakra-ui/react';
import useLogout from '@/hook/useLogout.js';
import useProfileStore from '@/store/ProfileStore.js';
import useAuthStore from '@/store/authStore.js';
import EditProfile from '@/components/profile/EditProfile.jsx';
import useFollow from '@/hook/useFollow.jsx';
import DefaultAva from '@/components/ui/defaultAva.jsx';

function Info() {
  const { handleLogout, isLoggingOut } = useLogout();
  const authUser = useAuthStore((state) => state.user);
  const { userProfile } = useProfileStore();
  // console.log('🚀 ~ INFO ~ userProfile:', userProfile[0].user);
  // const { isFollowing, isUpdating, handleFollowUser } = useFollow(
  //   userProfile[0]._id
  // );
  const visitingOwnProfileAndAuth = authUser && authUser === userProfile[0]._id;
  const visitingAnotherProfileAndAuth =
    authUser && authUser !== userProfile[0]._id;

  return (
    <Flex
      gap={{ base: 3, sm: 8 }}
      p={10}
      direction={{ base: 'column', sm: 'row' }}
      borderBottom={'1px solid'}
    >
      {/* {userProfile[0].usericon && userProfile[0].usericon.iconurl ? ( */}
      {userProfile[0].usericon.iconurl ? (
        <AvatarGroup
          size={{ base: 'xl', md: '2xl' }}
          className={'justify-center self-start mx-auto'}
        >
          <Avatar
            name="profilePic"
            src={userProfile[0].usericon.iconurl}
            alt={'Avatar'}
          />
        </AvatarGroup>
      ) : (
        <DefaultAva name={userProfile[0].user} />
      )}

      <VStack className={'items-start gap-1 mx-auto flex-1'}>
        <Flex
          gap={4}
          direction={{ base: 'column', sm: 'row' }}
          justifyContent={{ base: 'center', sm: 'space-between' }}
          className={'w-full items-center'}
        >
          <div className="pt-2">
            <Text
              fontSize={{ base: 'xl', md: '2xl' }}
              className=" font-semibold mr-4"
            >
              {userProfile[0].username}
            </Text>
            <Text
              fontSize={{ base: 'base', md: 'lg' }}
              className=" font-normal mr-4"
            >
              {userProfile[0].user}
            </Text>
          </div>
          {/*<Text fontSize={{base: 'md', md: 'lg'}} className="font-medium mr-4">a gate-keeping place</Text>*/}
          {visitingOwnProfileAndAuth && (
            <div className={'flex flex-row justify-end gap-1'}>
              <EditProfile />
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={'hover:bg-transparent'}
                  >
                    <CiCircleMore className={'w-7 h-7'} />
                  </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content className="bg-white rounded-xl w-auto mt-2 justify-center shadow-md divide-y divide-gray-300">
                  <DropdownMenu.Item>
                    <span className="font-bold text-red-700">Block</span>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className={'px-2'}>
                    <Button
                      size={'sm'}
                      variant={'ghost'}
                      _hover={{ bg: 'transparent' }}
                      className={
                        'pt-1 justify-center items-center hover:bg-transparent '
                      }
                    >
                      Copy link
                    </Button>
                  </DropdownMenu.Item>

                  <DropdownMenu.Item className={'px-2'}>
                    <Button
                      colorScheme={'red'}
                      size={'sm'}
                      variant={'ghost'}
                      _hover={{ bg: 'transparent' }}
                      isLoading={isLoggingOut}
                      onClick={handleLogout}
                      className={
                        ' pb-1 justify-center items-center hover:bg-transparent '
                      }
                    >
                      Log out
                    </Button>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </div>
          )}
          {visitingAnotherProfileAndAuth && (
            <div className={'flex flex-row justify-end gap-1'}>
              {/* <Button
                variant="outline"
                size={{ base: 'xs', md: 'sm' }}
                className={'rounded-full px-4 py-2 border-black'}
                onClick={handleFollowUser}
                isLoading={isUpdating}
              >
                {isFollowing ? 'Unfollow' : 'Follow'}
              </Button> */}
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={'hover:bg-transparent'}
                  >
                    <CiCircleMore className={'w-7 h-7'} />
                  </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content className="bg-white rounded-xl w-auto mt-2 justify-center items-center shadow-md divide-y divide-gray-300">
                  <DropdownMenu.Item className={'px-2'}>
                    <Button
                      size={'sm'}
                      variant={'ghost'}
                      _hover={{ bg: 'transparent' }}
                      className={
                        'justify-center items-center hover:bg-transparent'
                      }
                    >
                      Copy link
                    </Button>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className={'px-2'}>
                    <Button
                      colorScheme={'red'}
                      size={'sm'}
                      variant={'ghost'}
                      _hover={{ bg: 'transparent' }}
                      className={
                        ' pb-1 justify-center items-center hover:bg-transparent'
                      }
                    >
                      Block
                    </Button>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </div>
          )}
        </Flex>
      </VStack>
    </Flex>

    // <div className="lg:w-8/12 lg:mx-auto mb-8 pt-5">
    //
    //     <div className={'grid grid-cols-4 '}>
    //         <img src={ava} className={'rounded-full object-cover border-2 border-black w-36 h-36 mx-auto'}/>
    //         {/*<div className={'col-span-2'}>*/}
    //         <div className="col-span-2 text-left flex flex-col items-start justify-center">
    //             <span className="text-3xl text-black font-semibold mr-4">shiba</span>
    //             <span className="text-xl text-black font-medium mr-4">@shibapawpaw</span>
    //         </div>
    //
    //         <div className={'self-center'}>
    //             <Dialog.Root>
    //                 <Dialog.Trigger asChild>
    //                     <Button variant="outline" className='text-black mr-2 hover:bg-mauve3 '>Edit Profile</Button>
    //                 </Dialog.Trigger>
    //                 {/*<Dialog.Portal>*/}
    //                     <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px]  focus:outline-none">
    //                         <Dialog.Title className={'font-bold'}>Edit profile</Dialog.Title>
    //
    //                         <div className="grid gap-4 py-4">
    //                             <div className="grid grid-cols-4 items-center gap-4">
    //                                 <Label htmlFor="name" className="text-right">
    //                                     Name
    //                                 </Label>
    //                                 <Input
    //                                     id="name"
    //                                     defaultValue="shiba"
    //                                     className="col-span-3"
    //                                 />
    //                             </div>
    //                             <div className="grid grid-cols-4 items-center gap-4">
    //                                 <Label htmlFor="username" className="text-right">
    //                                     Username
    //                                 </Label>
    //                                 <Input
    //                                     id="username"
    //                                     defaultValue="@shibapawpaw"
    //                                     className="col-span-3"
    //                                 />
    //                             </div>
    //                             {/*<div className="grid grid-cols-4 items-center gap-4">*/}
    //                             {/*    <Label htmlFor="desp" className="text-right">*/}
    //                             {/*        Description*/}
    //                             {/*    </Label>*/}
    //                             {/*    <Textarea*/}
    //                             {/*        placeholder="Tell us a little bit about yourself"*/}
    //                             {/*        className="resize-none col-span-3"*/}
    //                             {/*    />*/}
    //                             {/*</div>*/}
    //                         </div>
    //                         <Dialog.Close>
    //                         <Button type="submit">Save changes</Button>
    //                     </Dialog.Close>
    //                 </Dialog.Content>
    //             </Dialog.Root>
    //         </div>
    //
    //             <DropdownMenu.Root>
    //                 <DropdownMenu.Trigger asChild>
    //                     <Button variant="ghost"><IoIosMore/></Button>
    //                 </DropdownMenu.Trigger>
    //                 <DropdownMenu.Content className="bg-white rounded-lg w-auto mt-3 px-3 py-2 space-y-1 justify-center">
    //                         <DropdownMenu.Item>
    //                             <span className='font-bold text-red-700'>Block</span>
    //                         </DropdownMenu.Item>
    //                         <DropdownMenu.Item>
    //                             Copy Link
    //                         </DropdownMenu.Item>
    //                         <DropdownMenu.Item>
    //                             Log out
    //                         </DropdownMenu.Item>
    //                 </DropdownMenu.Content>
    //            </DropdownMenu.Root>
    //     </div>
    // </div>

    // <div className={'w-1/2 justify-center items-center'}>
    //     {/*justify-start*/}
    //     <div className={'flex flex-row justify-center items-center'}>
    //         <img src={ava} className={'w-28 h-28 rounded-full align-middle '}/>
    //         <div className={'flex flex-row justify-around'}>
    //             <div className={'flex flex-col items-start'}>
    //                 <p className={'font-bold text-[15px]'}>shiba</p>
    //                 <p className={'font-thin text-[10px]'}>@shibapawpaw</p>
    //             </div>
    //             <div className={'flex flex-row justify-end items-center hover:cursor-pointer'}>
    //                 <div className={'bg-white rounded-full border border-solid border-black mr-2'}>
    //                     <p className={'px-3 py-0.5 text-center text-black text-[10px]'}>Edit</p>
    //                 </div>
    //                 <IoIosMore/>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  );
}

export default Info;
