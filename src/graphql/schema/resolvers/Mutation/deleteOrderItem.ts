import type { MutationResolvers } from "./../../../types.generated";
import { prisma } from "../../../../db";
export const deleteOrderItem: NonNullable<
  MutationResolvers["deleteOrderItem"]
> = async (_parent, _arg, _ctx) => {
  return await prisma.order_item.delete({
    where: {
      id: _arg.id,
    },
  });
};
