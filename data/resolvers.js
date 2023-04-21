import { reject } from 'lodash';
import { Widgets } from './dbConnectors';
// basically add new products with my mutations in this one, and eventually we'll use persistence with a database
// const productDatabase = {};

const resolvers = {
    getProduct: ({ id }) => {
        return new Promise(async(resolve) => {
            try{
                let data = await Widgets.findById({_id:(id)});
                resolve(data);
            }catch (e){
                reject(e);
            }
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
    },

    updateProduct: ({input})=>{
        return new Promise(async(resolve) => {
            try{
                let data = await Widgets.findOneAndUpdate({_id:input.id},input,{new:true});
                resolve(data);
            }catch (e){
                reject(e);
            }
        });
    },

    deleteProduct: ({id})=>{
        return new Promise((resolve) => {
            try{
                let data = Widgets.findByIdAndRemove({_id:id});
                resolve("Successfully deleted widget");
            }catch (e){
                reject(e);
            }
            // Widgets.remove({_id:id},(err)=>{
            //     if(err) reject(err)
            //     else resolve("Successfully deleted widget")
            // });
        });
    },
};

export default resolvers;