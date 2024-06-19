import logo from './../assets/img.png';
import { RiHomeFill } from 'react-icons/ri';
import { FaRegCircleUser } from 'react-icons/fa6';
import { Avatar, Link, Tooltip } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import useAuthStore from '@/store/authStore.js';
import SearchProfile from '@/components/search/SearchProfile.jsx';
import { Navigate } from 'react-router-dom';

function HeaderHome() {
  const authUser = useAuthStore((state) => state.user);
  const username = localStorage.getItem('username');

  // const menuItems = [
  //     {
  //         icon: <GoHomeFill className={'w-6 h-6 text-gray-600 '}/>,
  //         text: "Home",
  //         link: "/",
  //     },
  //     {
  //         icon: <FiSearch className={'text-gray-400 hover:text-gray-500 w-6 h-6 stroke-2 '}/>,
  //         text: "Search",
  //     },
  //     {
  //         icon: <FaRegCircleUser className={'text-gray-400 w-6 h-6 hover:text-gray-500 '}/>,
  //         text: "Profile",
  //         link: `/${authUser?.username}`,
  //     }
  // ]

  return (
    <div className={'w-screen'}>
      <div className={'px-7 py-2 flex justify-between items-center'}>
        <Avatar size={'xl'} name={'logo'} src={logo} />
        <div
          className={
            'cursor-pointer px-4 py-2 gap-10 items-center flex rounded-full bg-zinc-100 px-9'
          }
        >
          {/*{menuItems.map((item, index) => (*/}
          {/*    <Tooltip key={index} hasArrow label={item.text} placement={'bottom'} openDelay={300}>*/}
          {/*        <Link to={item.link || null} as={RouterLink}  alignItems={'center'}  className={'rounded-full p-2 hover:bg-slate-50'} >*/}
          {/*            {item.icon}*/}
          {/*        </Link>*/}
          {/*    </Tooltip>*/}
          {/*))}*/}

          <Tooltip
            label={"You're on home"}
            placement={'bottom'}
            openDelay={300}
            textColor="gray"
            bg="gray.50"
          >
            <Link to="/" as={RouterLink} alignItems={'center'} className={''}>
              <RiHomeFill className={'w-6 h-6 text-gray-700'} />
            </Link>
          </Tooltip>

          <Tooltip
            label={'Search'}
            placement={'bottom'}
            openDelay={300}
            textColor="gray"
            bg="gray.50"
          >
            <div className={'text-gray-400 hover:text-gray-600'}>
              {authUser ? (
                <SearchProfile className={'  w-6 h-6 '} />
              ) : (
                <Navigate to="/auth" />
              )}
            </div>
          </Tooltip>

          {/*<Tooltip label={"Profile"} placement={'bottom'} openDelay={300} textColor='gray' bg='gray.50' >*/}
          <Tooltip
            label={`/${username}`}
            placement={'bottom'}
            openDelay={300}
            textColor="gray"
            bg="gray.50"
          >
            <Link
              to={authUser ? `/profile` : '/auth'}
              as={RouterLink}
              alignItems={'center'}
            >
              {/* <Link to={`/${username}`} as={RouterLink} alignItems={'center'}> */}
              <FaRegCircleUser
                className={'text-gray-400 w-6 h-6 hover:text-gray-500'}
              />
            </Link>
          </Tooltip>
        </div>
        <a
          className="relative bg-white rounded-full border border-solid border-black"
          href="Github↗"
          target="_blank"
        >
          <div className="px-4 py-2 font-thin text-center text-black">
            GITHUB↗
          </div>
        </a>
      </div>
    </div>
  );
}

export default HeaderHome;
