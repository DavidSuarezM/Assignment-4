const API_BASE = "/api/projects";

export const createProject = async (project, token) => {
  try {
    const response = await fetch(API_BASE, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(project)
    });
    return await response.json();
  } catch (err) {
    console.error("Error creating project:", err);
  }
};

export const listProjects = async () => {
  try {
    const res = await fetch("/api/projects");
    return await res.json();
  } catch (err) {
    console.error("Error listing projects:", err);
  }
};

export const readProject = async (id) => {
  try {
    const res = await fetch(`/api/projects/${id}`);
    return await res.json();
  } catch (err) {
    console.error("Error reading project:", err);
  }
};

export const updateProject = async (id, project) => {
  try {
    const res = await fetch(`/api/projects/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(project),
    });
    return await res.json();
  } catch (err) {
    console.error("Error updating project:", err);
  }
};

export const deleteProject = async (id) => {
  try {
    const res = await fetch(`/api/projects/${id}`, {
      method: "DELETE",
    });
    return await res.json();
  } catch (err) {
    console.error("Error deleting project:", err);
  }
};
