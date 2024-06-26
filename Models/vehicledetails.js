const { Schema ,model} =require('mongoose');
const demo = new Schema({
    Servicenum:{type:String,required:true},
    Vehiclenum:{type:String,required:true},
    Vehicletype:{type:String,required:true},
    Servicedate:{type:String,required:true},
    Servicecompletiondate:{type:String,required:true},
    Ownername:{type:String,required:true},
    Servicedetails:{type:String,required:true}


})



const vehicleedetails = model('vehicledetails', demo);
module.exports= vehicleedetails;