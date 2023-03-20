// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
//make sure to connect foreign key to the corresponding connections
// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  //how product connects to product tag is the foreign key
  foreignKey: 'product_id',
  through: {
    model: ProductTag,
    unique: false
  },
})
// Tags belongToMany Products (through ProductTag)
//how tag connects to product tag is the foreign key
Tag.belongsToMany(Product, {
  foreignKey: 'tag_id',
  through: {
    model: ProductTag,
    unique: false
  },
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
