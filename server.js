const express = require('express');
const departmentRoutes = require('./src/departments/routes');

const app = express();

// use global environment variable if it's set otherwise use 3000
const port = process.env.PORT || 3000;

// midlware allowing to post and get JSON from endpoints
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.use('/api/v1/departments', departmentRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));