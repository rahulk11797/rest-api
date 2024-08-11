import express from 'express' 
import employeeRoute from './routes/employeeRoute.mjs';
const app = express();


app.use(employeeRoute);



app.listen(3000,()=>{
    console.log('this app listenig on 3000 port!')
})