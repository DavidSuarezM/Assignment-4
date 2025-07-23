import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import auth from "../user/auth-helper";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import logo from '../src/assets/dsLogo.png';

const isActive = (location, path) =>
  location.pathname === path ? "#ff4081" : "#ffffff";

const isPartActive = (location, path) => {
  if (location.pathname.includes(path)) return { color: "#bef67a" };
  else return { color: "#ffffff" };
};

export default function Menu() {
  const navigate = useNavigate();
  const location = useLocation();

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
        <img src={logo} alt="Logo" height="100" width="100"></img>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#333" }}>
          My Portfolio
        </Typography>
      </Box>

      <AppBar position="static">
        <Toolbar sx={{ display: "flex", gap: 2, alignItems: "center" }}>

          <Link to="/" style={{ textDecoration: "none" }}>

            <Button sx={{ color: isActive(location, "/shops/") }}>
              Home
            </Button>
          </Link>

          <Link to="/about" style={{ textDecoration: "none" }}>

            <Button sx={{ color: isActive(location, "/shops/") }}>

              About
            </Button>
          </Link>
          <Link to="/services" style={{ textDecoration: "none" }}>

            <Button sx={{ color: isActive(location, "/shops/") }}>

              Services
            </Button>
          </Link>

          <Link to="/project" style={{ textDecoration: "none" }}>

            <Button sx={{ color: isActive(location, "/shops/") }}>

              My Projects
            </Button>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>

            <Button sx={{ color: isActive(location, "/shops/") }}>

              Contact
            </Button>
          </Link>

          <Link to="/projectForm" style={{ textDecoration: "none" }
          }>
            <Button sx={{ color: isActive(location, "/shops/") }}>
              Project
            </Button>
          </Link >

          <Link to="/educationForm" style={{ textDecoration: "none" }
          }>

            <Button sx={{ color: isActive(location, "/shops/") }}>

              Education
            </Button>
          </Link >

          <Link to="/users">
            <Button sx={{ color: isActive(location, "/users") }}>Users</Button>
          </Link>

          {
            !auth.isAuthenticated() && (
              <>
                <Link to="/signup">
                  <Button sx={{ color: isActive(location, "/signup") }}>
                    Sign up
                  </Button>
                </Link>
                <Link to="/signin">
                  <Button sx={{ color: isActive(location, "/signin") }}>
                    Sign In
                  </Button>
                </Link>
              </>
            )
          }

          {
            auth.isAuthenticated() && (
              <>
                <Link to="/projects" style={{ textDecoration: "none" }}>
                  <Button sx={{ color: isActive(location, "/projects") }}>View Projects</Button>
                </Link>
                <Link to="/contacts" style={{ textDecoration: "none" }}>
                  <Button sx={{ color: isActive(location, "/contacts") }}>View Contacts</Button>
                </Link>
                <Link to="/educations" style={{ textDecoration: "none" }}>
                  <Button sx={{ color: isActive(location, "/educations") }}>View Education</Button>
                </Link>

                <Link to={`/user/${auth.isAuthenticated().user._id}`}>
                  <Button
                    sx={{
                      color: isActive(
                        location,
                        `/user/${auth.isAuthenticated().user._id}`
                      ),
                    }}
                  >
                    My Profile
                  </Button>
                </Link>
                <Button
                  sx={{ color: "#ffffff" }}
                  onClick={() => {
                    auth.clearJWT(() => navigate("/"));
                  }}
                >
                  Sign out
                </Button>
              </>
            )
          }
        </Toolbar >
      </AppBar >
    </>
  );
}
