import express from 'express'
import multer from 'multer'
import cors from 'cors'
import { bucket } from './firebaseAdmin.js'

const app = express()
const PORT = 5000

app.use(cors())

const storage = multer.memoryStorage()
const upload = multer({ storage })

app.post('/upload', upload.single('file'), async (req, res) => {
    console.log('/upload')
    console.log(req.file)    

   if (!req.file) {
     return res.status(400).send('No file uploaded.')
   }

   const blob = bucket.file(`${Date.now()}-${req.file.originalname}`)
   console.log(`req.file.originalname ${req.file.originalname}` )

   const blobStream = blob.createWriteStream({
     resumable: false,
        contentType: req.file.mimetype,
     predefinedAcl: 'publicRead', // Make the file publicly readable
   })

   console.log(`blobStream ${blobStream}` )

   blobStream.on('error', (err) => {
     console.error('Upload error:', err)
     res.status(500).send('Server error')
   })

   blobStream.on('finish', () => {
     const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
     console.log(`publicUrl ${publicUrl}` )

     res.status(200).json({ fileUrl: publicUrl })
   })

   blobStream.end(req.file.buffer);
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})