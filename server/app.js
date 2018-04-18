const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.post('/login', (req, res) => {
  res.json({
    token: 'AVL Tree'
  });
});

const port = process.env.PORT || 8001;

app.listen(port, () => {
  console.log(`Listenling on port ${port}`);
});
