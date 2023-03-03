import { useDispatch } from 'react-redux';
import { Button, Text, Flex, useColorMode } from '@chakra-ui/react';
import { HiUser } from 'react-icons/hi';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { colorMode } = useColorMode();
  return (
    <Flex alignItems={'center'}>
      <Text
        fontSize="2xl"
        color={colorMode === 'dark' ? 'gray.200' : 'gray.600'}
        as="i"
        mr="2"
      >
        Welcome, {user.name}
      </Text>
      <HiUser size={32} color="brown" />
      <Button
        colorScheme={colorMode === 'dark' ? 'gray.200' : 'gray.600'}
        color={colorMode === 'dark' ? 'gray.200' : 'gray.600'}
        variant="outline"
        ml={4}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Flex>
  );
};
