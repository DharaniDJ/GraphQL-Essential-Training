import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';

const app = express()

app.get('/',(req,res)=>{
    res.send('GraphQL is amazing');
});

const root = { hello: ()=>"Hi, I'm Dharani"}

app.use('/graphql',graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(8000, ()=>console.log('Running server on port localhost:8000/graphql'));