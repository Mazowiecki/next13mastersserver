import { GraphQLResolveInfo } from "graphql";
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Category = {
  __typename?: "Category";
  createdAt?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  product?: Maybe<Array<Maybe<Product>>>;
  updatedAt?: Maybe<Scalars["String"]["output"]>;
};

export type Collection = {
  __typename?: "Collection";
  createdAt?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  product?: Maybe<Array<Maybe<Product>>>;
  updatedAt?: Maybe<Scalars["String"]["output"]>;
};

export type EnumOrderStatus = "CANCELLED" | "COMPLETED" | "PENDING";

export type Mutation = {
  __typename?: "Mutation";
  createOrder?: Maybe<Order>;
  createOrderItem?: Maybe<OrderItem>;
  createReview: Review;
  deleteOrder?: Maybe<Order>;
  deleteOrderItem?: Maybe<OrderItem>;
  deleteReview: Review;
  updateOrder?: Maybe<Order>;
  updateOrderItem?: Maybe<OrderItem>;
  updateReview: Review;
};

export type MutationcreateOrderArgs = {
  orderItems?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  userId?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationcreateOrderItemArgs = {
  orderId: Scalars["ID"]["input"];
  productId: Scalars["ID"]["input"];
  quantity: Scalars["Int"]["input"];
};

export type MutationcreateReviewArgs = {
  content: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  headline: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  productId: Scalars["ID"]["input"];
  rating: Scalars["Int"]["input"];
};

export type MutationdeleteOrderArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationdeleteOrderItemArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationdeleteReviewArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationupdateOrderArgs = {
  id: Scalars["ID"]["input"];
  orderItems?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<EnumOrderStatus>;
  userId?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationupdateOrderItemArgs = {
  id: Scalars["ID"]["input"];
  quantity: Scalars["Int"]["input"];
};

export type MutationupdateReviewArgs = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  headline?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  productId?: InputMaybe<Scalars["ID"]["input"]>;
  rating?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Order = {
  __typename?: "Order";
  createdAt?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  orderItem?: Maybe<Array<Maybe<OrderItem>>>;
  status: EnumOrderStatus;
  total?: Maybe<Scalars["Int"]["output"]>;
  updatedAt?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["String"]["output"]>;
};

export type OrderItem = {
  __typename?: "OrderItem";
  createdAt?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  orderId?: Maybe<Scalars["ID"]["output"]>;
  product?: Maybe<Product>;
  quantity: Scalars["Int"]["output"];
  updatedAt?: Maybe<Scalars["String"]["output"]>;
};

export type Product = {
  __typename?: "Product";
  category?: Maybe<Array<Maybe<Category>>>;
  collection?: Maybe<Array<Maybe<Collection>>>;
  created_at?: Maybe<Scalars["String"]["output"]>;
  description: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  image: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  price: Scalars["Int"]["output"];
  review?: Maybe<Array<Maybe<Review>>>;
  updated_at?: Maybe<Scalars["String"]["output"]>;
};

export type Query = {
  __typename?: "Query";
  categories?: Maybe<Array<Maybe<Category>>>;
  category?: Maybe<Category>;
  collection?: Maybe<Collection>;
  collections?: Maybe<Array<Maybe<Collection>>>;
  order?: Maybe<Order>;
  orderItem?: Maybe<OrderItem>;
  orderItems?: Maybe<Array<Maybe<OrderItem>>>;
  orders?: Maybe<Array<Maybe<Order>>>;
  product?: Maybe<Product>;
  products?: Maybe<Array<Maybe<Product>>>;
  review: Review;
  reviews: Array<Review>;
};

export type QuerycategoriesArgs = {
  filter?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QuerycategoryArgs = {
  id: Scalars["ID"]["input"];
};

export type QuerycollectionArgs = {
  name: Scalars["String"]["input"];
};

export type QuerycollectionsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryorderArgs = {
  id: Scalars["ID"]["input"];
  userId?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryorderItemArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryorderItemsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryordersArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  userId?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryproductArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryproductsArgs = {
  filterName?: InputMaybe<Scalars["String"]["input"]>;
  filterPriceHighToLow?: InputMaybe<Scalars["Boolean"]["input"]>;
  filterRatingHighToLow?: InputMaybe<Scalars["Boolean"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryreviewArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryreviewsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Review = {
  __typename?: "Review";
  content: Scalars["String"]["output"];
  createdAt: Scalars["String"]["output"];
  email: Scalars["String"]["output"];
  headline: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  rating: Scalars["Int"]["output"];
  updatedAt: Scalars["String"]["output"];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info?: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info?: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Category: ResolverTypeWrapper<Category>;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  Collection: ResolverTypeWrapper<Collection>;
  EnumOrderStatus: EnumOrderStatus;
  Mutation: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
  Order: ResolverTypeWrapper<Order>;
  OrderItem: ResolverTypeWrapper<OrderItem>;
  Product: ResolverTypeWrapper<Product>;
  Query: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  Review: ResolverTypeWrapper<Review>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Category: Category;
  String: Scalars["String"]["output"];
  ID: Scalars["ID"]["output"];
  Collection: Collection;
  Mutation: {};
  Int: Scalars["Int"]["output"];
  Order: Order;
  OrderItem: OrderItem;
  Product: Product;
  Query: {};
  Boolean: Scalars["Boolean"]["output"];
  Review: Review;
};

export type CategoryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Category"] = ResolversParentTypes["Category"],
> = {
  createdAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  product?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Product"]>>>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Collection"] = ResolversParentTypes["Collection"],
> = {
  createdAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  product?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Product"]>>>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"],
> = {
  createOrder?: Resolver<
    Maybe<ResolversTypes["Order"]>,
    ParentType,
    ContextType,
    Partial<MutationcreateOrderArgs>
  >;
  createOrderItem?: Resolver<
    Maybe<ResolversTypes["OrderItem"]>,
    ParentType,
    ContextType,
    RequireFields<
      MutationcreateOrderItemArgs,
      "orderId" | "productId" | "quantity"
    >
  >;
  createReview?: Resolver<
    ResolversTypes["Review"],
    ParentType,
    ContextType,
    RequireFields<
      MutationcreateReviewArgs,
      "content" | "email" | "headline" | "name" | "productId" | "rating"
    >
  >;
  deleteOrder?: Resolver<
    Maybe<ResolversTypes["Order"]>,
    ParentType,
    ContextType,
    RequireFields<MutationdeleteOrderArgs, "id">
  >;
  deleteOrderItem?: Resolver<
    Maybe<ResolversTypes["OrderItem"]>,
    ParentType,
    ContextType,
    RequireFields<MutationdeleteOrderItemArgs, "id">
  >;
  deleteReview?: Resolver<
    ResolversTypes["Review"],
    ParentType,
    ContextType,
    RequireFields<MutationdeleteReviewArgs, "id">
  >;
  updateOrder?: Resolver<
    Maybe<ResolversTypes["Order"]>,
    ParentType,
    ContextType,
    RequireFields<MutationupdateOrderArgs, "id">
  >;
  updateOrderItem?: Resolver<
    Maybe<ResolversTypes["OrderItem"]>,
    ParentType,
    ContextType,
    RequireFields<MutationupdateOrderItemArgs, "id" | "quantity">
  >;
  updateReview?: Resolver<
    ResolversTypes["Review"],
    ParentType,
    ContextType,
    RequireFields<MutationupdateReviewArgs, "id">
  >;
};

export type OrderResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Order"] = ResolversParentTypes["Order"],
> = {
  createdAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  orderItem?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["OrderItem"]>>>,
    ParentType,
    ContextType
  >;
  status?: Resolver<ResolversTypes["EnumOrderStatus"], ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  userId?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderItemResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["OrderItem"] = ResolversParentTypes["OrderItem"],
> = {
  createdAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  orderId?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes["Product"]>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Product"] = ResolversParentTypes["Product"],
> = {
  category?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Category"]>>>,
    ParentType,
    ContextType
  >;
  collection?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Collection"]>>>,
    ParentType,
    ContextType
  >;
  created_at?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  image?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  price?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  review?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Review"]>>>,
    ParentType,
    ContextType
  >;
  updated_at?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
  categories?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Category"]>>>,
    ParentType,
    ContextType,
    Partial<QuerycategoriesArgs>
  >;
  category?: Resolver<
    Maybe<ResolversTypes["Category"]>,
    ParentType,
    ContextType,
    RequireFields<QuerycategoryArgs, "id">
  >;
  collection?: Resolver<
    Maybe<ResolversTypes["Collection"]>,
    ParentType,
    ContextType,
    RequireFields<QuerycollectionArgs, "name">
  >;
  collections?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Collection"]>>>,
    ParentType,
    ContextType,
    Partial<QuerycollectionsArgs>
  >;
  order?: Resolver<
    Maybe<ResolversTypes["Order"]>,
    ParentType,
    ContextType,
    RequireFields<QueryorderArgs, "id">
  >;
  orderItem?: Resolver<
    Maybe<ResolversTypes["OrderItem"]>,
    ParentType,
    ContextType,
    RequireFields<QueryorderItemArgs, "id">
  >;
  orderItems?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["OrderItem"]>>>,
    ParentType,
    ContextType,
    Partial<QueryorderItemsArgs>
  >;
  orders?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Order"]>>>,
    ParentType,
    ContextType,
    Partial<QueryordersArgs>
  >;
  product?: Resolver<
    Maybe<ResolversTypes["Product"]>,
    ParentType,
    ContextType,
    RequireFields<QueryproductArgs, "id">
  >;
  products?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Product"]>>>,
    ParentType,
    ContextType,
    Partial<QueryproductsArgs>
  >;
  review?: Resolver<
    ResolversTypes["Review"],
    ParentType,
    ContextType,
    RequireFields<QueryreviewArgs, "id">
  >;
  reviews?: Resolver<
    Array<ResolversTypes["Review"]>,
    ParentType,
    ContextType,
    Partial<QueryreviewsArgs>
  >;
};

export type ReviewResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Review"] = ResolversParentTypes["Review"],
> = {
  content?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  headline?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Category?: CategoryResolvers<ContextType>;
  Collection?: CollectionResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  OrderItem?: OrderItemResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Review?: ReviewResolvers<ContextType>;
};
