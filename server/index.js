const express = require('express')
const mess = require('./controllers/messages_controller')
const app = express()

app.use(express.json())


const port = 3001

app.get('/api/messages', mess.read)
app.put('/api/messages/:id', mess.update)
app.post('/api/messages', mess.create)
app.delete('/api/messages/:id', mess.delete)





app.listen(port, () => console.log(`listening on port: ${port}`))