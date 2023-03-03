import { NavLink } from 'react-router-dom';
import {
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useColorMode,
} from '@chakra-ui/react';
export const AuthNav = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex>
      <Breadcrumb
        fontWeight="500"
        fontSize="18"
        color={colorMode === 'dark' ? 'gray.200' : 'gray.600'}
      >
        <BreadcrumbItem>
          <BreadcrumbLink as={NavLink} to="/register" mr="2">
            Register
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={NavLink} to="/login">
            Log In
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Flex>
  );
};
