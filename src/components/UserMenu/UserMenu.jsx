import { useDispatch } from 'react-redux';
import { Button, Text, Flex, Image } from '@chakra-ui/react';
import { HiUser } from 'react-icons/hi';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <Flex>
      <Text fontSize="2xl" color="teal" as="i" mr="2">
        Welcome, {user.name}
      </Text>
      <Image src={HiUser} alt="user" sizes="xl" />
      <Button
        colorScheme="teal"
        variant="solid"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Flex>
  );
};
