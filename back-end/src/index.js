import express from 'express'
import dotenv from 'dotenv'
// import bodyParser from 'body-parser'
import cors from 'cors'
import connectDb from './db/conn.js';
import userRouter from './routes/user.routes.js';
const app = express();

dotenv.config({
	path: "./.env"
})
const port = process.env.PORT || 7000

app.use(cors())
app.use(express.json())
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded(
// 	{ extended: true }
// ))


app.get('/', (req, res) => {
	res.send('hello Rest api')
})
app.use('/api/v1', userRouter)

connectDb().then(() =>
	app.listen(port, async (req, res) => {
		console.log("Server is running on port : ", port);
	})
).catch((error) =>
	console.log(error)
)