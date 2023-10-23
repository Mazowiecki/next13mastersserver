import type { QueryResolvers } from "./../../../types.generated";
import { prisma } from "../../../../db";
export const collections: NonNullable<QueryResolvers["collections"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  return await prisma.collection.findMany({
    skip: _arg.offset,
    take: _arg.limit,
  });
};
