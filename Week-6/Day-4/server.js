const port = 3000;
const app = require("./src/app.js");

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});