require("dotenv").config();

const app = require("./app");
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`surver is runing at http://localhost:${PORT}`);
});
