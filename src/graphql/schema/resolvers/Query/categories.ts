import type { QueryResolvers } from "./../../../types.generated";
import { prisma } from "../../../../db";
export const categories: NonNullable<QueryResolvers["categories"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  let whereCondition = {};

  if (_arg.filter) {
    whereCondition = {
      name: {
        equals: _arg.filter,
      },
    };
  }
  return await prisma.category.findMany({
    skip: _arg.offset || 0,
    take: _arg.limit,
    where: whereCondition,
    include: {
      product: true,
    },
  });
};
