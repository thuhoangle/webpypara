import React, { useEffect } from 'react';
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
import useSearch from '@/hook/useSearch.js';
import useGetUser from '@/hook/useGetUser.js';

function Info(user) {
  const { isLoading, userProfile } = useGetUser(user.user);
  const { handleLogout, isLoggingOut } = useLogout();
  const authUser = useAuthStore((state) => state.user);
  const { setUserProfile } = useProfileStore();

  const visitingOwnProfileAndAuth = authUser && authUser === userProfile._id;
  const visitingAnotherProfileAndAuth =
    authUser && authUser !== userProfile._id;

  return (
    <>
      <Flex
        gap={{ base: 3, sm: 8 }}
        p={10}
        direction={{ base: 'column', sm: 'row' }}
        borderBottom={'1px solid'}
      >
        {userProfile.usericon.iconurl ? (
          <AvatarGroup
            size={{ base: 'xl', md: '2xl' }}
            className={'justify-center self-start mx-auto'}
          >
            <Avatar
              name="profilePic"
              src={userProfile.usericon.iconurl}
              alt={'Avatar'}
            />
          </AvatarGroup>
        ) : (
          <DefaultAva name={userProfile.user} />
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
                {userProfile.username}
              </Text>
              <Text
                fontSize={{ base: 'base', md: 'lg' }}
                className=" font-normal mr-4"
              >
                {userProfile.user}
              </Text>
            </div>
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
    </>
  );
}

export default Info;
