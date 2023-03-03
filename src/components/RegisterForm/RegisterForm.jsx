import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
import { customAlphabet } from 'nanoid';
import { register } from 'redux/auth/operations';

const nanoid = customAlphabet('1234567890id-', 5);

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const nameInput = nanoid();
  const emailInput = nanoid();
  const passwordInput = nanoid();

  const handleClick = () => setShow(!show);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormControl
      as="form"
      onSubmit={handleSubmit}
      autoComplete="off"
      isRequired
    >
      <FormLabel>Username</FormLabel>
      <InputGroup>
        <InputLeftElement />
        <Input id={nameInput} type="text" name="name" />
      </InputGroup>
      <FormLabel>Email</FormLabel>
      <Input id={emailInput} type="email" name="email" />
      <FormLabel>Password</FormLabel>
      <InputGroup size="md">
        <Input
          id={passwordInput}
          name="password"
          pr="4.5rem"
          type={show ? 'text' : 'password'}
          placeholder="Enter password"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
      {/* <FormLabel>
        Password
        <Input id={passwordInput} type="password" name="password" />
      </FormLabel> */}
      <Button type="submit" my={2}>
        Register
      </Button>
    </FormControl>
  );
};
