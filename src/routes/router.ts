import   {Request, Response, Router} from 'express';
import {HomeControllers} from '@controllers/controller';


const router = Router();

router.get('/', HomeControllers);

export default router;
