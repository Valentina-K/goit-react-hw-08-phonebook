import { Helmet } from 'react-helmet';
import { Container } from '@chakra-ui/react';
import { LoginForm } from 'components/LoginForm/LoginForm';

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Container maxW="xl">
        <LoginForm />
      </Container>
    </div>
  );
}
