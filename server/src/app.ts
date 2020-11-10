import "reflect-metadata";
import * as express from 'express'
import { Request, Response } from 'express'
import * as cors from 'cors'
import { createConnection, ILike } from 'typeorm';
import { Book } from './entity/Book'

const main = async () => {
  const app = express()
  app.use(express.json())

  const conn = await createConnection();
   // conn.runMigrations();

  app.use(
    cors({
      origin: 'http://localhost:3001',
      credentials: true,
    }),
  );
  
  app.get("/books", async function(req: Request, res: Response) {
    const { query: { query } } = req;

    const books = await conn.getRepository(Book).find({
      where: [
        { title: ILike(`%${query}%`)}, 
        { author: ILike(`%${query}%`) }
      ],
      order: {
        title: "ASC"
      }
    });

    res.json({ books })
  });
  
  
  // start express server
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
  });
}

main();