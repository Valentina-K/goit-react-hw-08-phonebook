import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Container } from '@chakra-ui/react';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <Container maxW="container.xl" mx='auto' px={4}>    
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />      
    </Container>
  );
};
