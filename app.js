const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const fs = require("fs");
const BodyParser = require('body-parser')
const port = 3001;

app.use(cors())
app.use(BodyParser.json())
// routes // url / endpoints utama dengan method GET

app.get('/', (req,res) => {
    res.send("utama")

})
app.get("/news-1.json", (req, res) => {
	// nanti proses logicnya itu ngambil data dulu dari database, lalu dikirim melaluli response, saat ini kita bakal pake data dari json dulu/fake data

	// ambil data json dari /data/products.json
	fs.readFile("./news-1.json", (error, data) => {
		if (error) res.send("Gagal dalam pembacaan data");
		const news_1 = JSON.parse(data);
		res.status(200).send(news_1);
	});
});

app.post('/form', (req, res)=>{
    console.log({reqFromOutside : req.body})
    res.send("Data Berhasil dimasukan !")
})

app.listen(port, () => {
    console.log(`berhasil run pada port ${port}`)
});


