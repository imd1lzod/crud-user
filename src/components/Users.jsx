import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, deleteUser, editUser } from "../reducer/user.reducer";
import { useSelector } from "react-redux";
import { Button, Card, Grid, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";

const Users = () => {
  const [isUpdate, setUpdate] = useState(false);

  const dispatch = useDispatch();

  const users = useSelector((store) => store.user.users);

  const [userDetails, setUSerDetails] = useState({
    name: "",
    age: "",
    gender: "",
  });

  const handleChange = (e) => {
    setUSerDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isUpdate) {
      dispatch(editUser(userDetails));
      setUpdate(false);
    } else {
      dispatch(addUser({ age: +userDetails.age, ...userDetails }));
    }

    setUSerDetails({
      name: "",
      age: "",
      gender: "",
    });

    e.target.reset();
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleEdit = (user) => {
    setUSerDetails(user);
    setUpdate(true);
    const newUser = dispatch(editUser(user));
    console.log(newUser);
  };

  return (
    <div>
      <h1 className="text-center text-6xl">Users</h1>
      <form
        onSubmit={handleSubmit}
        className="w-[700px] m-auto mt-12 border rounded p-10"
      >
        <div>
          <input
            required
            onChange={handleChange}
            className="w-full p-4 border rounded"
            type="text"
            name="name"
            placeholder="name"
            value={userDetails.name}
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            className="w-full p-4 border rounded mt-4"
            type="number"
            name="age"
            placeholder="age"
            value={userDetails.age}
          />
        </div>
        <div>
          <select
            required
            onChange={handleChange}
            className="w-full p-4 border rounded mt-4"
            name="gender"
            id=""
            value={userDetails.gender}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="p-2 rounded-2xl">
          <button
            type="submit"
            className={`w-full border py-2 ${
              isUpdate ? "bg-sky-600" : "bg-green-400"
            }  rounded-2xl mt-6`}
          >
            {isUpdate ? "Update" : "Save"}
          </button>
        </div>
      </form>

      <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mt: 4 }}>
        {users.map((user) => {
          const bgColor = user.gender === "male" ? "gray" : "pink";
          return (
            <Card
              sx={{ width: "245px" }}
              key={user.id}
              className="border p-2"
              style={{ backgroundColor: bgColor }}
            >
              <Typography>Name: {user.name}</Typography>
              <Typography>Age: {user.age}</Typography>
              <Typography>Gender: {user.gender}</Typography>
              <Button
                onClick={() => handleEdit(user)}
                variant="outlined"
                color="primary"
                startIcon={<Edit></Edit>}
              >
                Edit
              </Button>
              <Button
                onClick={() => handleDelete(user.id)}
                variant="outlined"
                color="error"
                sx={{ ml: "22px" }}
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            </Card>
          );
        })}
      </Grid>
    </div>
  );
};

export default Users;
