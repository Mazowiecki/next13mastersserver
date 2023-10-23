import type { OrderItem, QueryResolvers } from "./../../../types.generated";
import { prisma } from "../../../../db";
export const order: NonNullable<QueryResolvers["order"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  let whereCondition = {};

  if (_arg.filter) {
    whereCondition = {
      status: {
        equals: _arg.status,
      },
    };
  }

  const ordersOrderItems = await prisma.order_item.findMany({
    where: {
      orderId: _arg.id,
    },
    include: {
      product: true,
    },
  });

  const total = ordersOrderItems.reduce((acc, orderItem) => {
    return acc + orderItem.product!.price! * orderItem.quantity;
  }, 0);

  const order = await prisma.order.findFirst({
    where: {
      id: _arg.id,
      ...whereCondition,
    },
    include: {
      orderItem: {
        include: {
          product: true,
        },
      },
    },
  });

  return {
    ...order,
    total,
  };
};
