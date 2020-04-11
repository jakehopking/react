import React, {useReducer} from "react";
import {v4 as uuid} from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";

import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        type: "personal",
        id: "5e8d9953a9a4a059beb34557",
        name: "Kingsley Hopking",
        email: "khopking@gmail.com",
        website: "",
        phone: "07502130124‬",
        user: "5e8d899769e36202b9b84813",
        date: "2020-04-08T09:28:51.097Z",
        __v: 0,
      },
      {
        type: "professional",
        id: "5e8d98cca9a4a059beb34556",
        name: "Milla Violet Hopking-Kajiho",
        email: "milla@hopking.io",
        website: "www.millahopking.com",
        phone: "",
        user: "5e8d899769e36202b9b84813",
        date: "2020-04-08T09:26:36.070Z",
        __v: 0,
      },
      {
        type: "personal",
        id: "5e8d9844a9a4a059beb34555",
        name: "Mami Kajiho",
        email: "mami@mamikajiho.com",
        website: "www.mamikajiho.com",
        phone: "07596559028",
        user: "5e8d899769e36202b9b84813",
        date: "2020-04-08T09:24:20.168Z",
        __v: 0,
      },
    ],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact
  const addContact = (contact) => {
    contact.id = uuid();
    dispatch({type: ADD_CONTACT, payload: contact});
  };

  // Update contact
  const updateContact = (contact) => {
    dispatch({type: UPDATE_CONTACT, payload: contact});
  };

  // Delete contact
  const deleteContact = (id) => {
    dispatch({type: DELETE_CONTACT, payload: id});
  };

  // Set current contact
  const setCurrent = (contact) => {
    dispatch({type: SET_CURRENT, payload: contact});
  };

  // Clear current contact
  const clearCurrent = () => {
    dispatch({type: CLEAR_CURRENT});
  };

  // Filter contacts
  const filterContacts = (text) => {
    dispatch({type: FILTER_CONTACTS, payload: text});
  };

  // Clear filter
  const clearFilter = () => {
    dispatch({type: CLEAR_FILTER});
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
