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

const realm = new Realm({schema: [ProductSchema]});

export default realm;
