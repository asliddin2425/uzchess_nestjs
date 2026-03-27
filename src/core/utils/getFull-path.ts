import {Request} from 'express';

export default function getFullPath(req: Request, relativePath: string) {
  let proto = req.protocol;
  let host = req.host;
  return `${proto}://${host}/${relativePath}`;
}