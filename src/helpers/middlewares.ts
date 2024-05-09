import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface RequestExt extends Request {
  user?: { id: string; email: string };
}

const verifyToken = async (req: RequestExt, res: Response, next: NextFunction) => {
  if (!req.headers['authorization']) {
    return res.json({ fatal: 'debes incluid la cabecera de autorización' });
  }

  try {
    const token = req.headers['authorization'];
    console.log(token);
    const verified = verify(token, process.env.SECRET_KEY);
    console.log(verified);
    const { rows } = await User.getById(verified.user_id);
    console.log(rows[0]);
    req.user = rows[0];
    next();
  } catch (error) {
    res.status(400).json({ error: `Invalid token` });
  }
};

export { verifyToken };
