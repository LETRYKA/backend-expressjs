const express = require('express');

const app = express();
const port = 3000;

let users = [{ username: "admin", password: "admin" }];

app.get('/user', (req, res) => {
    res.send(users);
})

app.post('/user', (req, res) => {
    users.push({
        name: "user",
        password: "default",
    })
    res.send("User added successfully");
})

app.delete('/user', (req, res) => {
    res.send("Users deleted successfully");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})