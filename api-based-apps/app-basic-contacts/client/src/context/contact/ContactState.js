import React, {useReducer} from "react";
import axios from "axios";
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
  CONTACT_ERROR,
  GET_CONTACTS,
  CLEAR_CONTACTS,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: null,
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  const getContacts = async () => {
    try {
      const res = await axios.get("/api/contacts");
      dispatch({type: GET_CONTACTS, payload: res.data});
    } catch (error) {
      dispatch({
        type: CONTACT_ERROR,
        payload: error.response.msg,
      });
    }
  };

  const clearContacts = () => dispatch({type: CLEAR_CONTACTS});

  // Add contact
  const addContact = async (contact) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/contacts", contact, config);
      dispatch({type: ADD_CONTACT, payload: res.data});
    } catch (error) {
      dispatch({
        type: CONTACT_ERROR,
        payload: error.response.msg,
      });
    }
  };

  // Update contact
  const updateContact = async (contact) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.put(`/api/contacts/${contact._id}`, contact, config);
      dispatch({
        type: UPDATE_CONTACT,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: CONTACT_ERROR,
        payload: error.response.msg,
      });
    }
  };

  // Delete contact
  const deleteContact = async (id) => {
    try {
      const res = await axios.delete(`/api/contacts/${id}`);
      dispatch({
        type: DELETE_CONTACT,
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: CONTACT_ERROR,
        payload: error.response.msg,
      });
    }
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
        error: state.error,
        getContacts,
        clearContacts,
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
