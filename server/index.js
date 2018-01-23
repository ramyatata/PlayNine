const express = require('express');
const server = express();
const PORT = 3030;
const path = require('path');

server.use(express.static(path.join(__dirname, '../client/dist')));

server.listen(process.env.PORT || PORT, () => {
  console.log(`Server Listening on port: ${PORT}`);
});
