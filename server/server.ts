import express from 'express'
import cors from  'cors'
import multer from 'multer'
import csvtoJson from 'convert-csv-to-json'


const app = express()
const port = process.env.PORT ?? 3000

const storage = multer.memoryStorage()
const upload = multer({storage: storage})

let userData: Array<Record<string, string>> = []

app.use(cors()) //Enable CORS

app.post('/api/file', upload.single('file') ,async (req, res) => {
  // 1-Extract file from request
  const {file} = req
  // 2-Validate that we have file
  if(!file) {
    return res.status(500).json({message: 'File is required'})
  }
  // 3-Validate the mimeType csv
  if(file.mimetype !== 'text/csv') {
    return res.status(500).json({message: 'File must be CSV'})
  }
  // 4- Transform el file (buffer) to string
  let json: Array<Record<string, string>> = []
  try {
    const csv = Buffer.from(file.buffer).toString('utf-8')

    // 5- Transform CSV to JSON
    json = csvtoJson.csvStringToJson(csv)
    // 6- Save JSON to DB (pending)
    userData = json

  } catch (error) {
    return res.status(500).json({message: 'Error parsing the file'})
  }
  // Return 200 with message and JSON
  return res.status(200).json({
    data: json,
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