const express= require('express')
const path=require('path')
const app=express()
const mongoose=require('mongoose');
const sample=require('./Models/vehicledetails.js')
const dotenv=require('dotenv');
dotenv.config();

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({ extended: true }));

const vehicleedetails=[];


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
})

app.get('/add',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','Add.html'))
})
app.get('/details',(req,res)=>
{
    res.sendFile(path.join(__dirname,'public','View.html'))
});




app.post('/submit-form',async (req, res) => {
    try{
        const data=req.body;
        console.log(data)
        const details= await sample.create(data);
        res.status(201).redirect('/thank-you');
    
       }
    catch(error){
    res.status(500).json
    }
})



app.post('/adddetail',(req,res)=>{
    const {Serviceno,Vehicleno,VehicleType,Servicedate,ServicecompletionDate,Ownername,Servicedetails}=req.body;
    const data={Serviceno,Vehicleno,VehicleType,Servicedate,ServicecompletionDate,Ownername,Servicedetails};
    vehicleedetails.push(data)
    console.log(vehicleedetails)
    res.sendFile(path.join(__dirname,'public','View.html'))
  })
  app.get('/alldata',(req,res)=>{
    res.json(vehicleedetails);
  
  })

  app.put('/update/:ID',async(req,res)=>{
    try {
        const { ID} = req.params;
        const updatedData = req.body;
        const options = { new: true };
    
        const updatedDetails = await sample.findByIdAndUpdate(id, updatedData, options);
    
        if (updatedDetails) {
          res.status(200).json(updatedDetails);
        } else {
          res.status(404).json({ message: 'Document not found' });
        }
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });
    

  







app.listen(3005,()=>{
    console.log("server is running")
});