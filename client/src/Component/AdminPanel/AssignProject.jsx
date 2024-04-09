import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { ColorRing } from "react-loader-spinner";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

const AssignProject = () => {
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    projectId: "",
    projectType: "",
    description: "",
    techStack: "",
    assignedBy: "",
    deadline: "",
    contactNumber: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/project/add", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Event added successfully");
      } else {
        console.error("Failed to add event");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <AdminNavbar />
      <div>
        <Paper
          elevation={3}
          sx={{ mr: "15%", ml: "15%", mt: "50px", mb: "50px" }}
        >
          <Box sx={{ padding: 5 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ paddingBottom: 5, textAlign: "center" }}
            >
              Assign Project
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={2}>
                  <Typography variant="subtitle1">Project ID</Typography>
                </Grid>
                <Grid item xs={12} sm={10}>
                  <TextField
                    required
                    id="projectId"
                    name="projectId"
                    label="Project ID"
                    fullWidth
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Typography variant="subtitle1">Project Type</Typography>
                </Grid>
                <Grid item xs={12} sm={10}>
                  <TextField
                    required
                    id="projectType"
                    name="projectType"
                    label="Project Type"
                    fullWidth
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Typography variant="subtitle1">Description</Typography>
                </Grid>
                <Grid item xs={12} sm={10}>
                  <TextField
                    required
                    id="description"
                    name="description"
                    label="Description"
                    fullWidth
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Typography variant="subtitle1">Tech Stack</Typography>
                </Grid>
                <Grid item xs={12} sm={10}>
                  <TextField
                    required
                    id="techStack"
                    name="techStack"
                    label="Tech Stack"
                    fullWidth
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Typography variant="subtitle1">Assigned By</Typography>
                </Grid>
                <Grid item xs={12} sm={10}>
                  <TextField
                    required
                    id="assignedBy"
                    name="assignedBy"
                    label="Assigned By"
                    fullWidth
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Typography variant="subtitle1">Deadline</Typography>
                </Grid>
                <Grid item xs={12} sm={10}>
                  <TextField
                    required
                    id="deadline"
                    name="deadline"
                    label="Deadline"
                    type="date"
                    fullWidth
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Typography variant="subtitle1">Contact Number</Typography>
                </Grid>
                <Grid item xs={12} sm={10}>
                  <TextField
                    required
                    id="contactNumber"
                    name="contactNumber"
                    label="Contact Number"
                    fullWidth
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap={3}
              >
                <Box>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ display: "block", m: "auto", mt: "10px" }}
                    >
                      Cancel
                    </Button>
                  </Link>
                </Box>
                <Box>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ display: "block", m: "auto", mt: "10px" }}
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </form>
          </Box>
        </Paper>
        {loader && (
          <Box
            sx={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#55AAFF", "#55AAFF", "#55AAFF", "#55AAFF", "#55AAFF"]}
            />
          </Box>
        )}
      </div>
    </>
  );
};

export default AssignProject;
