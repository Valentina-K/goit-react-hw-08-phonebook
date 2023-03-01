import { NavLink } from 'react-router-dom';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { useAuth } from 'hooks';
export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
      <BreadcrumbItem>
        <BreadcrumbLink as={NavLink} to="/">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        {isLoggedIn && (
          <BreadcrumbLink as={NavLink} to="/contacts">
            Contacts
          </BreadcrumbLink>
        )}
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
