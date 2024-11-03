const express = require("express");
const { pool } = require("./utils/pool");
const app = express();
const port = 8080;
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

app.get("/getdata", async (req, res) => {
	const data = await pool.query("SELECT * from transactions");
	console.log(data.rows);
	res.send(data.rows);
});

app.post("/add", async (req, res) => {
	try {
		const entry = req.body;
		const newRow = await pool.query(
			"INSERT INTO transactions (name, amount) VALUES ($1, $2) RETURNING *",
			[entry.name, entry.amount],
		);
		console.log(`New Row Added ${newRow.rows[0]}`);
	} catch (error) {
		console.error(error.message);
		return res.send({ status: "failure", error: error.message });
	}
	res.send({ status: "success" });
});

app.delete("/delete", async (req, res) => {
	try {
        console.log(`Delete where id = ${req.body.id}`)
        await pool.query("DELETE FROM transactions WHERE id=$1",  [req.body.id])
		res.send({ status: "success" });
	} catch (error) {
		console.error(error.message);
		res.send({ status: "failure", error: error.message });
	}
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
