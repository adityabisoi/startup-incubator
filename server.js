/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style

// eslint-disable-next-line import/extensions
require('./db/mongoose.js');

const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

// eslint-disable-next-line linebreak-style
const userRoute = require('./routes/user');

app.use(userRoute);
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`[+] Server is running on http://localhost:${port}`)); //

// eslint-disable-next-line linebreak-style

app.get('/express_backend', (req, res) => {
  res.send({ express: 'Helloworld' });
});
