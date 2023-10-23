import type { QueryResolvers } from "./../../../types.generated";
import { prisma } from "../../../../db";
export const orders: NonNullable<QueryResolvers["orders"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  let whereCondition = {};

  if (_arg.userId) {
    whereCondition = {
      userId: _arg.userId,
    };
  }

  return await prisma.order.findMany({
    skip: _arg.offset,
    take: _arg.limit,
    where: whereCondition,
    include: {
      orderItem: {
        include: {
          product: true,
        },
      },
    },
  });
};
