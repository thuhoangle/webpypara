import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  InputRightElement,
  InputGroup,
  VStack,
} from '@chakra-ui/react';
import { Input, Heading, Flex, Spacer, Box, Button } from '@chakra-ui/react';
import { FormControl, FormLabel, FormHelperText } from '@chakra-ui/react';
import React, { useState } from 'react';
import Login from '@/_auth/forms/Login.jsx';
import SignUp from '@/_auth/forms/SignUp.jsx';
import GGauth from '@/_auth/forms/GGauth.jsx';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Card>
      <CardHeader>
        {isLogin ? (
          <Heading size={'xl'}>Log in</Heading>
        ) : (
          <Heading size={'xl'}>Sign up</Heading>
        )}
      </CardHeader>
      <CardBody className="space-y-2 w-[350px]">
        {isLogin ? <Login /> : <SignUp />}
      </CardBody>

      <div className={'flex justify-center items-center py-2 gap-1 w-full'}>
        {/*<Box flex={2} h={'1px'} bg={'gray.400'}/>*/}
        <div className={'mx-1 text-sm text-gray-700'}>
          {isLogin ? 'Or log in with' : 'Or sign up with'}
        </div>
      </div>
      <GGauth />

      <div className={'flex justify-center items-center pt-4 mb-1'}>
        <Box mx={'2'} fontSize={14}>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
        </Box>
        <Box
          onClick={() => setIsLogin(!isLogin)}
          className={'cursor-pointer text-sm font-semibold '}
        >
          {isLogin ? 'Sign up' : 'Log in'}
        </Box>
      </div>
    </Card>
  );
};
export default AuthForm;
