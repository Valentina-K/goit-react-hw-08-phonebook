import { Helmet } from 'react-helmet';
import { Container } from '@chakra-ui/react';
import { useEffect } from 'react';
import toast,{Toaster} from 'react-hot-toast';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useAuth } from 'hooks';

export default function Register() {
  const { registerError,refreshError } = useAuth();
 
  useEffect(() => {
    if (registerError || refreshError)
    {
      toast.error('The user is not registered. Try changing your email.',
      { id: 'register' });}
  },[registerError, refreshError])
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <Container maxW="xl">
        <RegisterForm />
      </Container>
      <Toaster position="top-center"/>
    </div>
  );
}
