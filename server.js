require("dotenv").config();
const app = require("./app");
const DBConnectionHandler = require("./utils/DBConnectionHandler");

// DB Connection
DBConnectionHandler();

// Server
const port = process.env.PORT || 2000;

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
