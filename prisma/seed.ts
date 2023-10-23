import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const productsCount = 5;
const categoriesCount = 2;
const collectionsCount = 2;
const orderItemsCount = 3;

const createdCategories = [];
const createdCollections = [];
const createdProducts = [];
const createdOrders = [];

const values = ['t-shirts', 'hoodies', 'accessories'];

// Funkcja losująca indeks i zwracająca wartość
const getRandomCategoryName = () => {
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
};


for (let i = 0; i < categoriesCount; i++) {
  const name = faker.commerce.department();

  const createdCategory = await prisma.category.create({
    data: {
      name: getRandomCategoryName(),
    },
  });
  console.log(`Created category with id: ${createdCategory.id}`);
  createdCategories.push(createdCategory);
}

for (let i = 0; i < collectionsCount; i++) {
  const name = faker.commerce.department();

  const createdCollection = await prisma.collection.create({
    data: {
      name: name,
    },
  });
  console.log(`Created category with id: ${createdCollection.id}`);
  createdCollections.push(createdCollection);
}

for (let i = 0; i < productsCount; i++) {
  const name = faker.commerce.productName();

  const createdProduct = await prisma.product.create({
    data: {
      name: name,
      image: "https://picsum.photos/300/300",
      description: faker.commerce.productDescription(),
      price: Number(faker.commerce.price()) * 100,
      category: {connect: createdCategories},
      collection: { connect: createdCollections },
    },
  });
  console.log(`Created Product with id: ${createdProduct.id}`);
  createdProducts.push(createdProduct);
}

const createdOrder = await prisma.order.create({
  data: {
    status: "PENDING",
  },
});
console.log(`Created Order with id: ${createdOrder.id}`);
createdOrders.push(createdOrder);

const createdOrder2 = await prisma.order.create({
  data: {
    status: "COMPLETED",
  },
});
console.log(`Created Order with id: ${createdOrder2.id}`);
createdOrders.push(createdOrder2);

const createdOrderItem = await prisma.order_item.create({
  data: {
    quantity: Math.floor(Math.random() * (10 - 1)),
    product: { connect: createdProducts[Math.floor(Math.random() * (createdProducts.length))] },
    order: { connect: createdOrders[Math.floor(Math.random() * (createdOrders.length))] },
  },
});
console.log(`Created OrderItem with id: ${createdOrderItem.id}`);

const createdOrderItem1 = await prisma.order_item.create({
  data: {
    quantity: Math.floor(Math.random() * (10 - 1)),
    product: { connect: createdProducts[Math.floor(Math.random() * (createdProducts.length))] },
    order: { connect: createdOrders[Math.floor(Math.random() * (createdOrders.length))] },
  },
});
console.log(`Created OrderItem with id: ${createdOrderItem1.id}`);

const createdOrderItem2 = await prisma.order_item.create({
  data: {
    quantity: Math.floor(Math.random() * (10 - 1)),
    product: { connect: createdProducts[Math.floor(Math.random() * (createdProducts.length))] },
    order: { connect: createdOrders[Math.floor(Math.random() * (createdOrders.length))] },
  },
});
console.log(`Created OrderItem with id: ${createdOrderItem2.id}`);

const createdOrderItem3 = await prisma.order_item.create({
  data: {
    quantity: Math.floor(Math.random() * (10 - 1)),
    product: { connect: createdProducts[Math.floor(Math.random() * (createdProducts.length))] },
    order: { connect: createdOrders[Math.floor(Math.random() * (createdOrders.length))] },
  },
});
console.log(`Created OrderItem with id: ${createdOrderItem3.id}`);

