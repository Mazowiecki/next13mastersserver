import type { MutationResolvers } from "./../../../types.generated";
import { prisma } from "../../../../db";
export const deleteOrder: NonNullable<
  MutationResolvers["deleteOrder"]
> = async (_parent, _arg, _ctx) => {
  return await prisma.order.delete({
    where: {
      id: _arg.id,
    },
  });
};
