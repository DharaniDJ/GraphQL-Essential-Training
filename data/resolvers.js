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
        const newWidget = new Widgets({
            name:input.name,
            description:input.description,
            price:input.price,
            soldout:input.soldout,
            inventory:input.inventory,
            stores:input.stores,
        });
        newWidget.id = newWidget._id;
        return new Promise(async(resolve)=>{
            try{
                let data = await newWidget.save();
                resolve(data);
            }catch (e){
                reject(e);
            }
        });
    }
};

export default resolvers;