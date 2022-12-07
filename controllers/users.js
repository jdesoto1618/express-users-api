import { v4 as uuidv4 } from "uuid";

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const getUserById = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export const createUser = (req, res) => {
  const newUser = req.body;
  users.push({ id: uuidv4(), ...newUser });
  res.send(`User ${newUser.firstName} was successfully added!`);
};

export const patchUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, age } = req.body;
  const userToUpdate = users.find((user) => user.id === id);

  if (firstName) {
    userToUpdate.firstName = firstName;
  }
  if (lastName) {
    userToUpdate.lastName = lastName;
  }
  if (email) {
    userToUpdate.email = email;
  }
  if (age) {
    userToUpdate.age = age;
  }

  res.send(`User with the id ${id} has been updated!`);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`User with the id ${id} deleted successfully.`);
};
