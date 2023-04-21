import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';
import resolvers from './resolvers';

const app = express()

app.get('/',(req,res)=>{
    res.send('GraphQL is amazing');
});


const root = resolvers;

// { product: ()=>{
//     return {
//             "id":2345678,
//             "name":"widget",
//             "description":"Beautiful widget to use in your garden",
//             "price":34.44,
//             "soldout":false,
//             "stores":[
//                 {store:"TraderJoes"},
//                 {store:"Safeway"}
//             ],
//         }
//     },
    
// };

// resolvers are the functions that respond to queries and mutations

app.use('/graphql',graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(8000, ()=>console.log('Running server on port localhost:8000/graphql'));