import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Heading,Container,Divider } from '@chakra-ui/react';
import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { Loader } from "components/Loader/Loader";
import { selectIsLoading, selectError } from "redux/contacts/selectors";
import { fetchContacts } from "redux/contacts/operations";

const Contacts = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
     useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
    return (
        <>
            <Helmet>
                <title>Contacts</title>
            </Helmet>
            <Container maxW="xl">
                <Heading as='h1' size='4xl' noOfLines={1} mb={4}>Phonebook</Heading>
                <ContactForm />
                <Divider my={4} />
                <Heading as='h2' size='3xl' noOfLines={1} mb={4}>Contacts</Heading>
                <Filter />
                <Divider my={4} />
                {isLoading && !error && <Loader />}
                <ContactList />
            </Container>
            <Toaster position="top-center"/>
        </>
    )
};

export default Contacts;