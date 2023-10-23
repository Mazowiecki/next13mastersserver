import type { QueryResolvers } from "./../../../types.generated";
import { prisma } from "../../../../db";
export const reviews: NonNullable<QueryResolvers["reviews"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  return await prisma.review.findMany({
    skip: _arg.offset,
    take: _arg.limit,
  });
};
