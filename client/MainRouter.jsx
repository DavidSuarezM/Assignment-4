import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './src/about'
import Contact from './contact/contact'
import Services from './src/services'
import Project from './src/project'
import Layout from './components/Layout'
import EducationForm from './education/educationForm'
import ProjectForm from './project/projectForm'
import Users from './user/Users'
import Profile from "./user/Profile.jsx"
import EditProfile from "./user/EditProfile.jsx"
import PrivateRoute from "./user/PrivateRoute.jsx"
import SignUp from './user/signup'
import SignIn from './user/signin'
import ContactList from './contact/contactList';
import EditContact from './contact/EditContact';
import ProjectList from './project/ProjectList';
import EditProject from './project/EditProject';
import EducationList from './education/EducationList';
import EditEducation from './education/EditEducation';

const MainRouter = () => {
        return (<div>
                <Layout />
                <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/services" element={<Services />} />
                        <Route exact path="/project" element={<Project />} />
                        <Route exact path="/contact" element={<Contact />} />
                        <Route path="/contacts" element={<ContactList />} />
                        <Route path="/edit-contact/:contactId" element={<EditContact />} />
                        <Route exact path="/educationForm" element={<EducationForm />} />
                        <Route path="/educations" element={<EducationList />} />
                        <Route path="/edit-education/:educationId" element={<EditEducation />} />
                        <Route exact path="/projectForm" element={<ProjectForm />} />
                        <Route path="/projects" element={<ProjectList />} />
                        <Route path="/edit-project/:projectId" element={<EditProject />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route
                                path="/user/edit/:userId"
                                element={
                                        <PrivateRoute>
                                                <EditProfile />
                                        </PrivateRoute>
                                }
                        />
                        <Route path="/user/:userId" element={<Profile />} />


                </Routes>
        </div>
        )
}
export default MainRouter


