import type { MutationResolvers } from "./../../../types.generated";
import { prisma } from "../../../../db";
export const createReview: NonNullable<
  MutationResolvers["createReview"]
> = async (_parent, _arg, _ctx) => {
  return await prisma.review.create({
    data: {
      headline: _arg.headline,
      content: _arg.content,
      name: _arg.name,
      email: _arg.email,
      rating: _arg.rating,
      product: { connect: { id: _arg.productId } },
    },
  });
};
