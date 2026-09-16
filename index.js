const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Mock list of users with requested attributes
const users = [
  {
    LastName: "Legaspi",
    FirstName: "Allain Ralph",
    Email: "allainralph@gmail.com",
    Password: "Allain123"
  },
  {
    LastName: "Ralph Allain",
    FirstName: "Ipsagel",
    Email: "ralphallain@gmail.com",
    Password: "mypassword456"
  },
  {
    LastName: "LastNameTest",
    FirstName: "FirstNameTest",
    Email: "test@gmail.com",
    Password: "adminpassword789"
  }
];

// Define your API endpoint route
app.get('/users', (req, res) => {
  res.json(users);
});

// Root route so the homepage isn't completely blank
app.get('/', (req, res) => {
  res.send('Welcome to the User API! Navigate to <a href="/api/users">/api/users</a> to see the JSON data.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});