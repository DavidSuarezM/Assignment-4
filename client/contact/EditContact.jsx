import React, { useEffect, useState } from "react";
import {
  Card, CardContent, Typography, TextField,
  Button, CircularProgress, Box
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import {
  readContact,
  updateContact
} from "./api-contact";

export default function EditContact() {
  const { contactId } = useParams();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    loading: true
  });

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const handleSubmit = async () => {
    await updateContact(contactId, {
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email
    });
    navigate("/contacts"); // Redirige luego de editar
  };

  const loadContact = async () => {
    const data = await readContact(contactId);
    if (data) {
      setValues({
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        loading: false
      });
    }
  };

  useEffect(() => {
    loadContact();
  }, []);

  if (values.loading) return <CircularProgress sx={{ mt: 5, mx: "auto", display: "block" }} />;

  return (
    <Card sx={{ maxWidth: 600, margin: "auto", mt: 5, p: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Edit Contact
        </Typography>
        <TextField
          label="First Name"
          value={values.firstname}
          onChange={handleChange("firstname")}
          sx={{ m: 1, width: 300 }}
        />
        <TextField
          label="Last Name"
          value={values.lastname}
          onChange={handleChange("lastname")}
          sx={{ m: 1, width: 300 }}
        />
        <TextField
          label="Email"
          type="email"
          value={values.email}
          onChange={handleChange("email")}
          sx={{ m: 1, width: 300 }}
        />
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Button variant="contained" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
