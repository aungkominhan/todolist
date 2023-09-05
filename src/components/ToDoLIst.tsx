import React, { useState } from "react";
import {
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  createTheme,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const theme = createTheme();

function ToDoList() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskText, setTaskText] = useState<string>("");

  const addTask = () => {
    if (taskText.trim() !== "") {
      setTasks([...tasks, taskText]);
      setTaskText("");
    }
  };

  const removeTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ margin: "0 auto", textAlign: "center" }}>
      <h1>My To-Do List</h1>
      <div>
        <TextField
          label="Add Task"
          variant="outlined"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={addTask}>
          Add
        </Button>
      </div>
      <List sx={{ maxWidth: 500 }}>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <ListItemText primary={task} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => removeTask(index)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default ToDoList;
