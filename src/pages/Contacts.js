import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Heading,Container } from '@chakra-ui/react';
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
            <Heading mb={8}>Phonebook</Heading>
            <ContactForm />
            <Heading mb={6}>Contacts</Heading>
            <Filter />
            {isLoading && !error && <Loader />}
                <ContactList />
                </Container>
        </>
    )
};

export default Contacts;