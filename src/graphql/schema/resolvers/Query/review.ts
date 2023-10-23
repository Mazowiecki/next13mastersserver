import type { QueryResolvers } from "./../../../types.generated";
import { prisma } from "../../../../db";
export const review: NonNullable<QueryResolvers["review"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  return await prisma.review.findUnique({
    where: {
      id: _arg.id,
    },
  });
};
