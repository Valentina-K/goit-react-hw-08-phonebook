import { Helmet } from 'react-helmet';
import { Container } from '@chakra-ui/react';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <Container maxW="xl">
        <RegisterForm />
      </Container>
    </div>
  );
}
