require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 3000;

// Define your route before starting the server
app.get('/', (req, res) => {
    res.send({ message: "'Hello World!' from server.js" });
});

// Start the server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}!`));
