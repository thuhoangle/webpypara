import React, { useRef } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import useSearch from '@/hook/useSearch.js';
import SuggestUser from '@/components/search/SuggestUser.jsx';

const SearchProfile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const btnRef = useRef()
  const searchRef = useRef(null);
  const { user, isLoading, getUserProfile, setUser } = useSearch();
  // console.log('🚀 ~ SearchProfile ~ user:', user);
  const handleSearchUser = (e) => {
    e.preventDefault();
    getUserProfile(searchRef.current.value);
    // console.log('🚀 ~ SearchProfile ~ user:', user);
  };

  // ref={btnRef}
  return (
    <div>
      <FiSearch className={'w-6 h-6 cursor-pointer '} onClick={onOpen} />

      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        initialFocusRef={searchRef}
        closeOnOverlayClick={false}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Search profile</DrawerHeader>

          <form onSubmit={handleSearchUser}>
            <DrawerBody>
              <Input placeholder="Type here..." ref={searchRef} />
            </DrawerBody>

            <DrawerFooter>
              <Button type={'submit'} colorScheme="dark" isLoading={isLoading}>
                Search
              </Button>
            </DrawerFooter>
          </form>
          {/* {user && <SuggestUser user={user} setUser={setUser} />} */}
          {user &&
            user.map((u) => (
              <SuggestUser key={u._id} user={u} setUser={setUser} />
            ))}
        </DrawerContent>
      </Drawer>
    </div>
  );
};
export default SearchProfile;
