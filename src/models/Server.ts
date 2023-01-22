import {
  express, type Application,
  cors,
} from '../../deps.ts';
import { exampleRouter } from '../routes/index.ts';

export class Server {
  private app : Application;
  private port : string;
  private apiPaths : string[] = [
    '/api/example',
  ];

  constructor () {
    this.app = express();
    this.port = Deno.env.get( 'PORT' ) || '4000';

    this.middlewares();
    this.routes();
  }

  middlewares () {
    this.app.use( cors() );
    this.app.use( express.json() );
    this.app.use( express.static( 'src/public' ) );
  }

  routes () {
    this.app.use( this.apiPaths, exampleRouter );
  }
  listen () {
    this.app.listen( this.port, () => {
      console.log( `Server running on port ${ this.port }` );
      console.log( `Click here to open: http://localhost:${ this.port }` );
    })
  }
}
