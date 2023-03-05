import { Helmet } from 'react-helmet';
import { Container } from '@chakra-ui/react';
import { useEffect } from 'react';
import { LoginForm } from 'components/LoginForm/LoginForm';
import toast,{Toaster} from 'react-hot-toast';
import { useAuth } from 'hooks';

export default function Login() {
  const { loginError } = useAuth();
  useEffect(() => {
    if (loginError)
    {
      toast.error('The user with this login and password does not exist',
      { id: 'login' });}
  },[loginError])
  
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Container maxW="xl">
        <LoginForm />
      </Container>   
      <Toaster position="top-center"/> 
    </div>
  );
}
