import React, { useEffect, useState } from "react";
import {
  Card, CardContent, Typography, Button, Grid, Box
} from "@mui/material";
import { Link } from "react-router-dom";
import { listProjects, deleteProject } from "./api-project";
import auth from "../user/auth-helper";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);

  const jwt = auth.isAuthenticated();
  const isAdmin = jwt && jwt.user && jwt.user.admin;

  const loadProjects = async () => {
    const data = await listProjects();
    if (data) setProjects(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this project?")) {
      await deleteProject(id);
      loadProjects();
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <Box sx={{ maxWidth: 900, margin: "auto", mt: 4 }}>
      <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>
        Project List
      </Typography>

      <Grid container spacing={2}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project._id}>
            <Card sx={{ p: 2 }}>
              <CardContent>
                <Typography variant="subtitle1">{project.title}</Typography>
                <Typography variant="body2">
                  {project.firstname} {project.lastname}<br />
                  {project.email}<br />
                  Completed: {new Date(project.completion).toLocaleDateString()}
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", justifyContent: "space-around", pb: 2 }}>
                {isAdmin && (
                  <Link to={`/edit-project/${project._id}`}>
                    <Button variant="outlined" size="small">Edit</Button>
                  </Link>
                )}

                {isAdmin && (
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => handleDelete(project._id)}
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
