require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}!`));

app.get('/', (req, res) => {
    res.send({ message: "'Hello World!' from server.js" });
})