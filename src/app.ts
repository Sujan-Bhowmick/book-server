import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import routes from "./app/router/index"

const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/', routes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
