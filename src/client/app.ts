import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("hello world");
});

app.listen(process.env.PORT || 3000, () => console.log(`Serving Client at ${process.env.PORT || 5432}!`));
