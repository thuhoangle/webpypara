import { useState } from 'react';
import { Input } from '@/components/ui/input';
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  InputGroup,
  InputRightElement,
  // Alert, AlertIcon
} from '@chakra-ui/react';
import useLogin from '@/hook/useLogin.js';

const Login = () => {
  const { inputs, setInputs, login, loading } = useLogin();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <form onSubmit={login}>
        <FormControl name="email">
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            placeholder="Enter your email"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            // value={inputs.email} onChange={handleInputChange}
          />
          {/*{isEmpty ? <FormErrorMessage>Email is required.</FormErrorMessage> : null }*/}
        </FormControl>
        <FormControl name="password">
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              placeholder="Enter password"
              // value={inputs.password}
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
            <InputRightElement width="4rem">
              <Button variant={'ghost'} onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormHelperText>Must be at least 6 characters</FormHelperText>
        </FormControl>

        <Button
          colorScheme={'dark'}
          type={'submit'}
          className="w-full flex flex-row items-center"
          isLoading={loading}
        >
          Log in
        </Button>
      </form>
    </>
  );
};
export default Login;
