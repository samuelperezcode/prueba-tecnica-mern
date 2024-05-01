import express from 'express'
import cors from  'cors'
import multer from 'multer'


const app = express()
const port = process.env.PORT ?? 3000

const storage = multer.memoryStorage()
const upload = multer({storage: storage})

app.use(cors()) //Enable CORS

app.post('/api/file', upload.single('file') ,async (req, res) => {
  //1-Extract file from request
  return res.status(200).json({
    data: [],
    message: 'El archivo cargo correctamente.'
  })

})

app.get('/api/users', async (req, res) => {
  // 1- Extract the query param 'q' from the request
  return res.status(200).json({
    data: [],
  })
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})