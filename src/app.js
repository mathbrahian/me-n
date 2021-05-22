import express from 'express';
import morgan from 'morgan';
import notes from './routes/notes.routes'
import users from './routes/users.routes'

const app = express()
app.use(express.json())
app.use(morgan('dev'))

app.use('/notes', notes)
app.use('/users', users)

export default app;