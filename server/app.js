const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const html = require('./index');

app.get("/api", async (req, res) => {
    const { data } = html;
    // https://stackoverflow.com/questions/38884522/why-is-my-asynchronous-function-returning-promise-pending-instead-of-a-val
    // Promise(<pending>) is always logged if not resolved yet
    // call .then() on promise to capture result
    const resolvedHtml = await data.then(res => res);
    console.log('heyy', data);
    res.json({ resolvedHtml });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});