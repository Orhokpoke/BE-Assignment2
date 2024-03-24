const http = require('http')
const PORT = process.env.PORT || 8900

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/books') {
    res.write('Hello from GET /books')
  }

  if (req.method === 'PUT' && req.url === '/books') {
    res.write('Hello from PUT /books')
  }

  if (req.method === 'DELETE' && req.url === '/books') {
    res.write('Hello from DELETE /books')
  }

  if (req.method === 'GET' && req.url === '/books/author') {
    res.write('Hello from GET /books/author')
  }

  if (req.method === 'POST' && req.url === '/books/author') {
    res.write('Hello from POST /books/author')
  }

  if (req.method === 'PUT' && req.url === '/books/author') {
    res.write('Hello from PUT /books/author')
  }
  res.end()
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
