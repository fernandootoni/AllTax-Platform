import express from 'express'
import cors from 'cors';
import { appRouter } from './routes';

const app = express()
app.use(express.json())
app.use(cors({ credentials: true, origin: 'http://localhost:4200'}))

app.use(appRouter)

app.get('/', (req, res) => {
  res.json({ message: "API funcionando" });
});

app.listen(3000, () => {
  console.log('Server running at port: 3000')
})
