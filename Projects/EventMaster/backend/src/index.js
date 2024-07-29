const express = require('express');
const app = express();
const eventsRoute = require('./routes/events');
const usersRoute = require('./routes/users');

app.use(express.json());

app.use('/api/events', eventsRoute);
app.use('/api/users', usersRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

