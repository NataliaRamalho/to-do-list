import { app } from './app'

const main = () => {
  const port = 3001
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
  })
}

main()
