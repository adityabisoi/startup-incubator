const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`[+] Server is running on http://localhost:${port}`)); //

app.get("/express_backend", (req, res) => {
  res.send({ express: "Helloworld" });
});
