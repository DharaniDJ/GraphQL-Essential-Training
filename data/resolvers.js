import { reject } from 'lodash';
import { Widgets } from './dbConnectors';
// basically add new products with my mutations in this one, and eventually we'll use persistence with a database
// const productDatabase = {};

const resolvers = {
    getProduct: ({id})=>{
        return new Promise((resolve)=>{
            Widgets.findById({_id:id}, (err, product)=>{
                if(err) reject(err)
                else resolve(product)
            })
        });
    },
    createProduct: ({input})=>{
        // let id = require('crypto').randomBytes(10).toString('hex');
        // productDatabase[id]=input;
        // return new Product(id,input);
    }
}

export default resolvers;