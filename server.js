const express = require('express');
const app = express();

// use global environment variable if it's set otherwise use 3000
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('Hello World');
})

app.listen(port, () => console.log(`app listening on port ${port}`));