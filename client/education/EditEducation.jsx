import React, { useEffect, useState } from "react";
import {
  Card, CardContent, Typography, TextField,
  Button, CircularProgress, Box
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { readEducation, updateEducation } from "./api-education";

export default function EditEducation() {
  const { educationId } = useParams();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    title: "",
    firstname: "",
    lastname: "",
    email: "",
    completion: "",
    description: "",
    loading: true
  });

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const handleSubmit = async () => {
    await updateEducation(educationId, values);
    navigate("/educations");
  };

  const loadEducation = async () => {
    const data = await readEducation(educationId);
    if (data) setValues({ ...data, loading: false });
  };

  useEffect(() => {
    loadEducation();
  }, []);

  if (values.loading) return <CircularProgress sx={{ mt: 5, mx: "auto", display: "block" }} />;

  return (
    <Card sx={{ maxWidth: 600, margin: "auto", mt: 5, p: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Edit Education
        </Typography>
        <TextField label="Title" value={values.title} onChange={handleChange("title")} sx={{ m: 1, width: 300 }} />
        <TextField label="First Name" value={values.firstname} onChange={handleChange("firstname")} sx={{ m: 1, width: 300 }} />
        <TextField label="Last Name" value={values.lastname} onChange={handleChange("lastname")} sx={{ m: 1, width: 300 }} />
        <TextField label="Email" value={values.email} onChange={handleChange("email")} sx={{ m: 1, width: 300 }} />
        <TextField label="Completion" type="date" value={values.completion} InputLabelProps={{ shrink: true }} onChange={handleChange("completion")} sx={{ m: 1, width: 300 }} />
        <TextField label="Description" value={values.description} onChange={handleChange("description")} multiline rows={3} sx={{ m: 1, width: 300 }} />
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Button variant="contained" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
