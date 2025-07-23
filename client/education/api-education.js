const API_BASE = "/api/educations";

export const createEducation = async (education, token) => {
  try {
    const response = await fetch(API_BASE, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(education)
    });
    return await response.json();
  } catch (err) {
    console.error("Error creating education:", err);
  }
};
export const listEducations = async () => {
  try {
    const res = await fetch("/api/educations");
    return await res.json();
  } catch (err) {
    console.error("Error listing educations:", err);
  }
};

export const readEducation = async (id) => {
  try {
    const res = await fetch(`/api/educations/${id}`);
    return await res.json();
  } catch (err) {
    console.error("Error reading education:", err);
  }
};

export const updateEducation = async (id, data) => {
  try {
    const res = await fetch(`/api/educations/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (err) {
    console.error("Error updating education:", err);
  }
};

export const deleteEducation = async (id) => {
  try {
    const res = await fetch(`/api/educations/${id}`, {
      method: "DELETE",
    });
    return await res.json();
  } catch (err) {
    console.error("Error deleting education:", err);
  }
};
