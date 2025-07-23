import React, { useEffect, useState } from "react";
import {
  Card, CardContent, Typography, Button, Grid, Box
} from "@mui/material";
import { Link } from "react-router-dom";
import { listEducations, deleteEducation } from "./api-education";
import auth from "../user/auth-helper";

export default function EducationList() {
  const [educations, setEducations] = useState([]);

  const jwt = auth.isAuthenticated();
  const isAdmin = jwt && jwt.user && jwt.user.admin;

  const loadEducations = async () => {
    const data = await listEducations();
    if (data) setEducations(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this education entry?")) {
      await deleteEducation(id);
      loadEducations();
    }
  };

  useEffect(() => {
    loadEducations();
  }, []);

  return (
    <Box sx={{ maxWidth: 900, margin: "auto", mt: 4 }}>
      <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>
        Education List
      </Typography>

      <Grid container spacing={2}>
        {educations.map((edu) => (
          <Grid item xs={12} sm={6} md={4} key={edu._id}>
            <Card sx={{ p: 2 }}>
              <CardContent>
                <Typography variant="subtitle1">{edu.title}</Typography>
                <Typography variant="body2">
                  {edu.firstname} {edu.lastname}<br />
                  {edu.email}<br />
                  Completed: {new Date(edu.completion).toLocaleDateString()}
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", justifyContent: "space-around", pb: 2 }}>
                {isAdmin && (
                  <Link to={`/edit-education/${edu._id}`}>
                    <Button variant="outlined" size="small">Edit</Button>
                  </Link>
                )}

                {isAdmin && (
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => handleDelete(edu._id)}
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
