class Product {
    constructor(id, {name,description,price,soldout,inventory,stores}){
        this.name=name;
        this.id=id;
        this.description=description;
        this.price=price;
        this.soldout=soldout;
        this.inventory=inventory
        this.stores=stores;
    }
}

// basically add new products with my mutations in this one, and eventually we'll use persistence with a database
const productDatabase = {};

const resolvers = {
    getProduct: ({id})=>{
        return new Product(id,productDatabase[id]);
    },
    createProduct: ({input})=>{
        let id = require('crypto').randomBytes(10).toString('hex');
        productDatabase[id]=input;
        return new Product(id,input);
    }
}

export default resolvers;