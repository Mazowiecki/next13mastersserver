import type { MutationResolvers } from "./../../../types.generated";
import { prisma } from "../../../../db";
export const deleteReview: NonNullable<
  MutationResolvers["deleteReview"]
> = async (_parent, _arg, _ctx) => {
  return await prisma.review.delete({
    where: {
      id: _arg.id,
    },
  });
};
