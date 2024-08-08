import Realm from 'realm';

const ProductSchema = {
  name: 'Product',
  properties: {
    id: 'int',
    img: 'string',
    price: 'string',
    title: 'string',
    subImg1: 'string',
    subImg2: 'string',
    category: 'string',
  },
  primaryKey: 'id',
};

const CartItemSchema = {
  name: 'CartItem',
  properties: {
    product: 'Product',
    quantity: 'int',
  },
};
const realm = new Realm({schema: [ProductSchema, CartItemSchema]});

export default realm;
