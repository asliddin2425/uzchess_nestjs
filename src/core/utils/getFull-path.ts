import { Request } from 'express';

export default function getFullPath(req: Request, relativePath: string) {
  const proto = req.protocol;
  const host = req.host;
  return `${proto}://${host}/${relativePath}`;
}
