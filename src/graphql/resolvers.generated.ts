/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { Category } from "./schema/resolvers/Category";
import { Collection } from "./schema/resolvers/Collection";
import { createOrder as Mutation_createOrder } from "./schema/resolvers/Mutation/createOrder";
import { createOrderItem as Mutation_createOrderItem } from "./schema/resolvers/Mutation/createOrderItem";
import { createReview as Mutation_createReview } from "./schema/resolvers/Mutation/createReview";
import { deleteOrder as Mutation_deleteOrder } from "./schema/resolvers/Mutation/deleteOrder";
import { deleteOrderItem as Mutation_deleteOrderItem } from "./schema/resolvers/Mutation/deleteOrderItem";
import { deleteReview as Mutation_deleteReview } from "./schema/resolvers/Mutation/deleteReview";
import { updateOrder as Mutation_updateOrder } from "./schema/resolvers/Mutation/updateOrder";
import { updateOrderItem as Mutation_updateOrderItem } from "./schema/resolvers/Mutation/updateOrderItem";
import { updateReview as Mutation_updateReview } from "./schema/resolvers/Mutation/updateReview";
import { Order } from "./schema/resolvers/Order";
import { OrderItem } from "./schema/resolvers/OrderItem";
import { Product } from "./schema/resolvers/Product";
import { categories as Query_categories } from "./schema/resolvers/Query/categories";
import { category as Query_category } from "./schema/resolvers/Query/category";
import { collection as Query_collection } from "./schema/resolvers/Query/collection";
import { collections as Query_collections } from "./schema/resolvers/Query/collections";
import { order as Query_order } from "./schema/resolvers/Query/order";
import { orderItem as Query_orderItem } from "./schema/resolvers/Query/orderItem";
import { orderItems as Query_orderItems } from "./schema/resolvers/Query/orderItems";
import { orders as Query_orders } from "./schema/resolvers/Query/orders";
import { product as Query_product } from "./schema/resolvers/Query/product";
import { products as Query_products } from "./schema/resolvers/Query/products";
import { review as Query_review } from "./schema/resolvers/Query/review";
import { reviews as Query_reviews } from "./schema/resolvers/Query/reviews";
import { Review } from "./schema/resolvers/Review";
export const resolvers: Resolvers = {
  Query: {
    categories: Query_categories,
    category: Query_category,
    collection: Query_collection,
    collections: Query_collections,
    order: Query_order,
    orderItem: Query_orderItem,
    orderItems: Query_orderItems,
    orders: Query_orders,
    product: Query_product,
    products: Query_products,
    review: Query_review,
    reviews: Query_reviews,
  },
  Mutation: {
    createOrder: Mutation_createOrder,
    createOrderItem: Mutation_createOrderItem,
    createReview: Mutation_createReview,
    deleteOrder: Mutation_deleteOrder,
    deleteOrderItem: Mutation_deleteOrderItem,
    deleteReview: Mutation_deleteReview,
    updateOrder: Mutation_updateOrder,
    updateOrderItem: Mutation_updateOrderItem,
    updateReview: Mutation_updateReview,
  },

  Category: Category,
  Collection: Collection,
  Order: Order,
  OrderItem: OrderItem,
  Product: Product,
  Review: Review,
};
