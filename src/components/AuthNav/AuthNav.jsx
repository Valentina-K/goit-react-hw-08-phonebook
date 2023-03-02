import { NavLink } from 'react-router-dom';
import {
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
export const AuthNav = () => {
  return (
    <Flex>
      <Breadcrumb fontWeight="500" fontSize="18">
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
