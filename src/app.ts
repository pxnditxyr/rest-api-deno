import "https://deno.land/x/dotenv/load.ts";

import { Server } from './models/index.ts';

const server = new Server();
server.listen();
