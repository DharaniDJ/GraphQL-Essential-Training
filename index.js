import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';

const app = express()

app.get('/',(req,res)=>{
    res.send('GraphQL is amazing');
});

const root = { product: ()=>{
    return {
        "id":2345678,
        "name":"widget",
        "description":"Beautiful widget to use in your garden",
        "price":34.44,
        "soldout":false,
        "stores":[
            {store:"TraderJoes"},
            {store:"Safeway"}
        ],
    }
}};

app.use('/graphql',graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(8000, ()=>console.log('Running server on port localhost:8000/graphql'));