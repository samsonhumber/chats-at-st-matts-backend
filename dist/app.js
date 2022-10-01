import express from 'express';
const app = express();
const PORT = process.env.PORT || 8000;
app.get("/", (req, res) => {
    res.send("Hello Typescript with Node.js!");
});
app.listen(PORT, () => {
    console.log(`Server Running here 👉 https://localhost:${PORT}`);
});
