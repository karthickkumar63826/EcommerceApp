import Realm from 'realm';

const ProductSchema = {
  name: 'Product',
  properties: {
    id: 'int',
    img: 'string',
    price: 'float',
    title: 'string',
    subImg1: 'string',
    subImg2: 'string',
    category: 'string',
    favorite: 'bool',
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

const migration = (oldRealm, newRealm) => {
  if (oldRealm.schemaVersion < 4) {
    const oldObjects = oldRealm.objects('Product');
    const newObjects = newRealm.objects('Product');

    for (let i = 0; i < oldObjects.length; i++) {
      newObjects[i].price = parseFloat(oldObjects[i].price);
      newObjects[i].favorite = false;
    }
  }
};

const realm = new Realm({
  schema: [ProductSchema, CartItemSchema],
  schemaVersion: 4,
  migration,
});

export default realm;
