import type { QueryResolvers } from "./../../../types.generated";
import { prisma } from "../../../../db";
export const collection: NonNullable<QueryResolvers["collection"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  return await prisma.collection.findFirst({
    where: {
      name: {
        equals: _arg.name,
      },
    },
    include: {
      product: true,
    },
  });
};
