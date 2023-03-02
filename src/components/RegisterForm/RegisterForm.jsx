import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
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
    const form = e.currentTarget;
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
    <form onSubmit={handleSubmit} autoComplete="off">
      <InputGroup>
        <InputLeftElement />
        <FormLabel>
          Username
          <Input id={nameInput} type="text" name="name" />
        </FormLabel>
      </InputGroup>
      <FormLabel>
        Email
        <Input id={emailInput} type="email" name="email" />
      </FormLabel>
      <FormLabel for={passwordInput} />
      <InputGroup size="md">
        Password
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
      <Button type="submit">Register</Button>
    </form>
  );
};
