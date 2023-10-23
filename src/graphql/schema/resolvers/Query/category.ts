import type { QueryResolvers } from "../../../types.generated";
import { prisma } from "../../../../db.js";
export const category: NonNullable<QueryResolvers["category"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  return await prisma.category.findFirst({
    where: {
      id: _arg.id,
    },
  });
};
