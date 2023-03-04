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
import { HiUser } from 'react-icons/hi';
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
      <InputGroup mb={4}>
        <InputLeftElement
          pointerEvents="none"
          children={<HiUser fill="lightgray" size={26} />}
        />
        <Input
          id={nameInput}
          type="text"
          placeholder="Enter name"
          name="name"
        />
      </InputGroup>
      <FormLabel>Email</FormLabel>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<AtSignIcon color="gray.400" />}
        />
        <Input
          id={emailInput}
          type="email"
          placeholder="Enter email"
          name="email"
        />
      </InputGroup>
      <FormLabel>Password</FormLabel>
      <InputGroup size="md" mb={4}>
        <InputLeftElement
          pointerEvents="none"
          children={<LockIcon color="gray.400" />}
        />
        <Input
          id={passwordInput}
          name="password"
          pr="4.5rem"
          type={show ? 'text' : 'password'}
          placeholder="Enter password"
        />
        <InputRightElement width="4.5rem">
          <IconButton
            aria-label="show"
            onClick={handleClick}
            icon={show ? <ViewOffIcon /> : <ViewIcon />}
          />
        </InputRightElement>
      </InputGroup>
      <Button type="submit" my={2}>
        Register
      </Button>
    </FormControl>
  );
};
