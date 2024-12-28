import  e, {Request, Response, Router} from 'express';
import { stat } from 'fs';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello World',
    status: 'success',

  });
});

export default router;
