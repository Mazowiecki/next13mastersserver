import type { QueryResolvers } from "./../../../types.generated";
import { prisma } from "../../../../db";
export const product: NonNullable<QueryResolvers["product"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  return await prisma.product.findFirst({
    where: {
      id: _arg.id,
    },
    include: {
      category: true,
      collection: true,
      review: true,
    },
  });
};
