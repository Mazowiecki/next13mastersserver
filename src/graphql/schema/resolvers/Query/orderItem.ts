import type { QueryResolvers } from "./../../../types.generated";
import { prisma } from "../../../../db";
export const orderItem: NonNullable<QueryResolvers["orderItem"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  return await prisma.order_item.findFirst({
    where: {
      id: _arg.id,
    },
    include: {
      product: true,
    },
  });
};
