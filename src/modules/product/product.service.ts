import { prisma } from '../../config/db';

const getAll = () => {
  return prisma.product.findMany();
};

export { getAll };
