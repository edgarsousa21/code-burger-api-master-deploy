import app from './app'

const port = process.env.PORT || 3001

app.listen(port, '0.0.0.0', () => {
  console.log(`🍔 Server Started On Port: ${port} 🍔`)
})
