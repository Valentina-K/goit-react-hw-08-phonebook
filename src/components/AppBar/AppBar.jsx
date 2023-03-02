import { Box, Center, Container, Flex } from '@chakra-ui/react';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks';
import { ColorModeSwitcher } from 'components/ColorModeSwitcher';
export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box as="header" py="4">
      <Container maxW="container.lg">
        <Flex
          align="center"
          justify="space-between"
          mb={26}
          p="16px"
          borderBottom="1px"
          borderColor="gray.200"
        >
          <Navigation />
          <Flex align="center">
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
            <ColorModeSwitcher />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
