import { Router } from '../../deps.ts';
import { getHelloWorld } from '../controllers/index.ts';

const router = new Router();

router.get( '/hello-world', getHelloWorld );

export { router as exampleRouter };
