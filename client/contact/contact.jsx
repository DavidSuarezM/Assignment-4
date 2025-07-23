import React, { useState } from "react";
import { createContact } from "./api-contact";

import {
    Card, CardContent, CardActions, TextField,
    Typography, Button
} from "@mui/material";
import Box from "@mui/material/Box";
import auth from "../user/auth-helper";

export default function ContactForm() {
    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        email: "",
    });

    const handleChange = (name) => (e) => {
        setValues({ ...values, [name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const jwt = auth.isAuthenticated();
        try {
            const res = await createContact(values, jwt.token);
            if (res && !res.error) {
                alert("Contact created successfully!");
                setValues({ firstname: "", lastname: "", email: "" }); // limpiar
            } else {
                alert("Failed to create contact.");
            }
        } catch (err) {
            console.error("Error:", err);
            alert("Something went wrong.");
        }
    };

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 2,
                    pl: 3,
                    bgcolor: "#f5f5f5",
                }}
            >
                <h2>📬 Contact Me</h2>
                <Typography sx={{ color: "#333" }}>
                    <p><strong>David Andres Suarez Molina</strong></p>
                    <p>Email: dsuarezm@my.centennialcollege.ca</p>
                    <p>Phone: +1 (416) 605-0415</p>
                    <p>Location: Toronto, Ontario, Canada</p>
                </Typography>

            </Box>

            <Card sx={{ maxWidth: 600, margin: "auto", mt: 5, pb: 2 }}>
                <form onSubmit={handleSubmit}>
                    <CardContent>
                        <Typography variant="h6" sx={{ mt: 2, textAlign: "center" }}>
                            Contact Form
                        </Typography>

                        <TextField
                            label="First Name"
                            value={values.firstname}
                            onChange={handleChange("firstname")}
                            sx={{ width: 300, m: 1 }}
                            required
                        />
                        <TextField
                            label="Last Name"
                            value={values.lastname}
                            onChange={handleChange("lastname")}
                            sx={{ width: 300, m: 1 }}
                            required
                        />
                        <TextField
                            label="Email"
                            type="email"
                            value={values.email}
                            onChange={handleChange("email")}
                            sx={{ width: 300, m: 1 }}
                            required
                        />
                    </CardContent>
                    <CardActions sx={{ justifyContent: "center" }}>
                        <Button type="submit" variant="contained">
                            Submit
                        </Button>
                    </CardActions>
                </form>
            </Card>
        </>
    );
}