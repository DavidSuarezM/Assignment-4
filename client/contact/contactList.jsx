import React, { useEffect, useState } from "react";
import {
    Card, CardContent, Typography, Button, Grid, Box
} from "@mui/material";
import { Link } from "react-router-dom";
import {
    listContacts,
    deleteContact
} from "./api-contact"; 
import auth from "../user/auth-helper";

export default function ContactList() {
    const [contacts, setContacts] = useState([]);

    const jwt = auth.isAuthenticated();
    const isAdmin = jwt && jwt.user && jwt.user.admin;

    const loadContacts = async () => {
        const data = await listContacts();
        if (data) setContacts(data);
    };

    const handleDelete = async (id) => {
        const confirm = window.confirm("Are you sure you want to delete this contact?");
        if (confirm) {
            await deleteContact(id);
            loadContacts(); // recargar la lista
        }
    };

    useEffect(() => {
        loadContacts();
    }, []);

    return (
        <Box sx={{ maxWidth: 900, margin: "auto", mt: 4 }}>
            <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>
                Contact List
            </Typography>

            <Grid container spacing={2}>
                {contacts.map((contact) => (
                    <Grid item xs={12} sm={6} md={4} key={contact._id}>
                        <Card sx={{ p: 2 }}>
                            <CardContent>
                                <Typography variant="subtitle1">
                                    {contact.firstname} {contact.lastname}
                                </Typography>
                                <Typography variant="body2">{contact.email}</Typography>
                            </CardContent>
                            <Box sx={{ display: "flex", justifyContent: "space-around", pb: 2 }}>
                                {isAdmin && (
                                    <Link to={`/edit-contact/${contact._id}`}>
                                        <Button variant="outlined" size="small">Edit</Button>
                                    </Link>
                                )}

                                {isAdmin && (
                                    <Button
                                        variant="outlined"
                                        color="error"
                                        size="small"
                                        onClick={() => handleDelete(contact._id)}
                                    >
                                        Delete
                                    </Button>
                                )}
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}