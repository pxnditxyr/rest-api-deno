import { type Request, type Response } from '../../deps.ts';

export const getHelloWorld = ( _req : Request, res : Response ) => {
  res.json({
    msg: 'Hello World XD',
  });
};
