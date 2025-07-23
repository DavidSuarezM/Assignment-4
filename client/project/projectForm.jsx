import React, { useState } from "react";
import {
  Card, CardContent, CardActions,
  Typography, TextField, Button
} from "@mui/material";
import { createProject } from "./api-project";
import auth from "../user/auth-helper";

export default function ProjectForm() {
  const [values, setValues] = useState({
    title: "",
    firstname: "",
    lastname: "",
    email: "",
    completion: "",
    description: ""
  });

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jwt = auth.isAuthenticated();
    try {
      const res = await createProject(values, jwt.token);
      if (res && !res.error) {
        alert("Project created successfully!");
        setValues({
          title: "",
          firstname: "",
          lastname: "",
          email: "",
          completion: "",
          description: ""
        });
      } else {
        alert("Failed to create project.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <Card sx={{ maxWidth: 600, margin: "auto", mt: 5, pb: 2 }}>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <Typography variant="h6" sx={{ mt: 2, textAlign: "center" }}>
            Project Form
          </Typography>

          <TextField label="Title" value={values.title} onChange={handleChange("title")} sx={{ width: 300, m: 1 }} required />
          <TextField label="First Name" value={values.firstname} onChange={handleChange("firstname")} sx={{ width: 300, m: 1 }} required />
          <TextField label="Last Name" value={values.lastname} onChange={handleChange("lastname")} sx={{ width: 300, m: 1 }} required />
          <TextField label="Email" type="email" value={values.email} onChange={handleChange("email")} sx={{ width: 300, m: 1 }} required />
          <TextField label="Completion Date" type="date" InputLabelProps={{ shrink: true }} value={values.completion} onChange={handleChange("completion")} sx={{ width: 300, m: 1 }} required />
          <TextField label="Description" value={values.description} onChange={handleChange("description")} multiline rows={3} sx={{ width: 300, m: 1 }} required />
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button type="submit" variant="contained">Submit</Button>
        </CardActions>
      </form>
    </Card>
  );
}
