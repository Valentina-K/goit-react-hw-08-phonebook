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
  IconButton,
} from '@chakra-ui/react';
import { AtSignIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { customAlphabet } from 'nanoid';
import { logIn } from 'redux/auth/operations';

const nanoid = customAlphabet('1234567890id-', 5);

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const emailInput = nanoid();
  const passwordInput = nanoid();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      logIn({
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
      <FormLabel>Email</FormLabel>
      <InputGroup mb="4">
        <InputLeftElement
          pointerEvents="none"
          children={<AtSignIcon color="gray.400" />}
        />
        <Input
          id={emailInput}
          type="email"
          name="email"
          placeholder="Enter email"
        />
      </InputGroup>
      <FormLabel>Password</FormLabel>
      <InputGroup mb="4">
        <InputLeftElement
          pointerEvents="none"
          children={<LockIcon color="gray.400" />}
        />
        <Input
          id={passwordInput}
          type={show ? 'text' : 'password'}
          name="password"
          placeholder="Enter password"
        />
        <InputRightElement>
          <IconButton
            aria-label="show"
            onClick={handleClick}
            icon={show ? <ViewOffIcon /> : <ViewIcon />}
          />
        </InputRightElement>
      </InputGroup>
      <Button type="submit">Log In</Button>
    </FormControl>
  );
};
