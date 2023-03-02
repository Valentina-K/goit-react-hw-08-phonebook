import { useDispatch } from 'react-redux';
import { FormLabel, Input, Button } from '@chakra-ui/react';
import { customAlphabet } from 'nanoid';
import { logIn } from 'redux/auth/operations';

const nanoid = customAlphabet('1234567890id-', 5);

export const LoginForm = () => {
  const dispatch = useDispatch();

  const emailInput = nanoid();
  const passwordInput = nanoid();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <FormLabel>
        Email
        <Input id={emailInput} type="email" name="email" />
      </FormLabel>
      <FormLabel>
        Password
        <Input id={passwordInput} type="password" name="password" />
      </FormLabel>
      <Button type="submit">Log In</Button>
    </form>
  );
};
