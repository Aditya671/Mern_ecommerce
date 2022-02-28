import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
   res.send('Application works!');
 });


app.listen(3080, () => {
   console.log('The application is listening on port 30080!');
})