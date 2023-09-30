const express = require('express');
const app = express();
const axios = require('axios'); 

const cors = require('cors'); // Import the cors package


// Use cors middleware to enable CORS for all routes
app.use(cors());


require('dotenv').config();

const port = process.env.PORT; 

app.get('/', (req, res) => {
  res.send('Hello, World! This is a basic Node.js web app.');
});
 
app.get('/api/posts', async (req, res) => {
  try {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    const response = await axios.get(apiUrl);
    const posts = response.data;
    res.json(posts);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
