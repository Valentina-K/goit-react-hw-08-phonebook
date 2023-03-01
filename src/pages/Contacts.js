import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            {isLoading && !error && <Loader />}
            <ContactList />
        </>
    )
};

export default Contacts;