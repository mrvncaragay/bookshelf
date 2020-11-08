import "reflect-metadata";
import * as express from 'express'
import { Request, Response } from 'express'
import { createConnection } from 'typeorm';
const app = express()
app.use(express.json())


const main = async () => {
  const conn = await createConnection();
  conn.runMigrations();

  app.get("/", function(req: Request, res: Response) {
    // here we will have logic to return all users
    res.json({
      success: "got it"
    })
  });
  
  
  // start express server
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
  });
}

main();