import express from 'express'
import multer from 'multer'
import cors from 'cors'
import { bucket } from './firebaseAdmin.js'
import axios from 'axios'

const app = express()
const PORT = 5000

app.use(cors())

const upload = multer({ 
    limits: { fileSize: 2 * 1024 * 1024 }, // 2MB limit
    fileFilter: function (req, file, cb) {
        console.log(file.originalname)
      if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('Only JPG, PNG, and GIF files are allowed!'), false)
      }
      cb(null, true)
    }
  })

app.post('/upload', upload.single('file'), async (req, res) => {

   if (!req.file) {
     return res.status(400).send('No file uploaded.')
   }

   const blob = bucket.file(`${Date.now()}-${req.file.originalname}`)

   const blobStream = blob.createWriteStream({
     resumable: false,
        contentType: req.file.mimetype,
     predefinedAcl: 'publicRead',
   })

   blobStream.on('error', (err) => {
     console.error('Upload error:', err)
     res.status(500).send('Server error')
   })

   blobStream.on('finish', () => {
     const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`
     res.status(200).json({ fileUrl: publicUrl })
   })

   blobStream.end(req.file.buffer)
})


app.get('/photo', async (req, res) => {
    const { url } = req.query // URL to fetch from
    if (!url) {
      return res.status(400).send('URL is required')
    }
  
    try {
      const response = await axios.get(url, { responseType: 'arraybuffer' })
      res.set('Content-Type', response.headers['content-type'])
      res.send(response.data)
    } catch (error) {
      res.status(500).send('Error fetching the image')
    }
  })

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})