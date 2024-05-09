import { Request, Response } from 'express';

import { getAll } from './product.service';
import { handleHttp } from '../../helpers/error.handle';

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const products = await getAll();
    res.json({
      success: true,
      data: products,
    });
  } catch (error) {
    console.error(error);
    handleHttp(res, 'ERROR_GET_BLOGS');
  }
};

export { getAllProduct };
