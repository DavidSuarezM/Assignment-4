const API_BASE = "/api/contacts";

export const createContact = async (contact, token) => {
  try {
    const response = await fetch(API_BASE, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(contact)
    });
    return await response.json();
  } catch (err) {
    console.error("Error creating contact:", err);
  }
};

export const listContacts = async () => {
  try {
    const response = await fetch("/api/contacts");
    return await response.json();
  } catch (err) {
    console.error("Error listing contacts:", err);
  }
};

export const deleteContact = async (id) => {
  try {
    const response = await fetch(`/api/contacts/${id}`, {
      method: "DELETE",
    });
    return await response.json();
  } catch (err) {
    console.error("Error deleting contact:", err);
  }
};

export const readContact = async (id) => {
  try {
    const response = await fetch(`/api/contacts/${id}`);
    return await response.json();
  } catch (err) {
    console.error("Error reading contact:", err);
  }
};

export const updateContact = async (id, contact) => {
  try {
    const response = await fetch(`/api/contacts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact)
    });
    return await response.json();
  } catch (err) {
    console.error("Error updating contact:", err);
  }
};