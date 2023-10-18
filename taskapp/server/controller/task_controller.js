const { createCustomError } = require("../errors/custom-error");
const { Tasks } = require("../models/tasks");

const getAllTasks = async (req, res) => {
  const tasks = await Tasks.find({});
  res.status(200).json({ tasks });
};

const createTasks = async (req, res) => {
  const newTask = await Tasks.create(req.body);
  console.log(newTask);
  res.status(200).json({ newTask });
};

const getSignleTask = async (req, res) => {
  const { id } = req.params;
  const singleTask = await Tasks.findOne({ _id: id });
  noTaskError(singleTask, res);
  res.status(200).json({ singleTask });
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const updateTask = await Tasks.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });
  noTaskError(updateTask, res);
  res.status(200).json({ updateTask });
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  const deleteTask = await Tasks.findOneAndDelete({ _id: id });
  noTaskError(deleteTask, res);
  res.status(200).json(await Tasks.find({}));
};

const noTaskError = (task, res) => {
  if (!task) {
    throw createCustomError("Task not found", 404);
  }
};

module.exports = {
  getAllTasks,
  createTasks,
  getSignleTask,
  updateTask,
  deleteTask,
};
