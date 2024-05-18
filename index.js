const express=require('express');
const app=express();

//middle ware to parse JSON requests
app.use(express.json());

//Endpoint
app.get('/sayHello',(req,res)=>{
	res.json({message:'Hello User'});
});
const PORT=80;
app.listen(PORT,()=>{
	console.log(`Server id running on ${PORT}`);
});

