import type { QueryResolvers } from "./../../../types.generated";
import { prisma } from "../../../../db";

export const products: NonNullable<QueryResolvers["products"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  let whereCondition = {};
  let orderByCondition = {};

  if (_arg.filterPriceHighToLow !== undefined) {
    orderByCondition = {
      price: _arg.filterPriceHighToLow ? "desc" : "asc",
    };
  }

  if (_arg.filterName) {
    whereCondition = {
      name: {
        contains: _arg.filterName,
      },
    };
  }

  const productsWithReviews = await prisma.product.findMany({
    skip: _arg.offset || 0,
    take: _arg.limit,
    orderBy: orderByCondition,
    where: whereCondition,
    include: {
      category: true,
      collection: true,
      review: true,
    },
  });

  // Sort the products based on review rating
  if (_arg.filterRatingHighToLow !== undefined) {
    productsWithReviews.sort((a, b) => {
      const ratingA = calculateAverageRating(a.review);
      const ratingB = calculateAverageRating(b.review);

      return _arg.filterRatingHighToLow ? ratingB - ratingA : ratingA - ratingB;
    });
  }

  return productsWithReviews;
};

// Helper function to calculate average rating
const calculateAverageRating = (reviews) => {
  if (!reviews || reviews.length === 0) return 0;

  const totalRating = reviews.reduce((acc, { rating }) => acc + rating, 0);
  return totalRating / reviews.length;
};
