import express from 'express'
import helmet from 'helmet'

const app = express()
const PORT = process.env.PORT || 5000

app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
