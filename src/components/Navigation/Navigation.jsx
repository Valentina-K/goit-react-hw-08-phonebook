import { NavLink } from 'react-router-dom';
import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useColorMode,
} from '@chakra-ui/react';
import { useAuth } from 'hooks';
export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const { colorMode } = useColorMode();
  return (
    <Breadcrumb
      spacing="8px"
      separator={<ChevronRightIcon color="gray.500" />}
      fontWeight="700"
      fontSize="24"
      color={colorMode === 'dark' ? 'gray.200' : 'gray.600'}
    >
      <BreadcrumbItem isCurrentPage>
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
