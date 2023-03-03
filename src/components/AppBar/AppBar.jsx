import { Box, Flex, useColorMode } from '@chakra-ui/react';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks';
import { ColorModeSwitcher } from 'components/ColorModeSwitcher';
export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  const { colorMode } = useColorMode();
  return (
    <Box as="header" py="2" mb={20}>
      <Flex
        align="center"
        justify="space-between"
        borderBottom="1px"
        borderColor={colorMode === 'dark' ? 'gray.200' : 'gray.600'}
      >
        <Navigation />
        <Flex align="center">
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
          <ColorModeSwitcher />
        </Flex>
      </Flex>
    </Box>
  );
};
