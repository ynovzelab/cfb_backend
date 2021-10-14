const Product = require('../../models/Products');

module.exports = {
    Query: {
        products: () => {
            return Product.find().catch(err => console.log(err));
        },
        product: (parent, args) => {
            return Product.findById(args.id).catch(err => console.log(err));
        }
    },
    Mutation: {
        createProduct: (parent, args) => {
            const newProduct = new Product({
                name: args.name,
                price: args.price,
                description: args.description
            });
            return newProduct.save();
        }
    }
}