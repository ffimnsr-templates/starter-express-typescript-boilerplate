import express from "express";

const app = express();
const port = 8080;

app.get("/", (_, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`server started at http://localhost:${port}`);
});