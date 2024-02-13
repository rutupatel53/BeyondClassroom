const Pdata = require('../model/Data')
const mongoose= require('mongoose')


//get data
const getprojectdata= async (req,res) =>{
  const data= await Pdata.find({}).sort({createdAt:-1})//-1 is use for decending order
  res.status(200).json(data)
}
//get single
const getprojectdid= async (req,res) =>{
  const {id} = req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({error:'No such workout id'})
  }
  const data= await Pdata.findById(id)

  if(!workout){
      return res.status(404).json({error:"Not such workout"})
  }

  res.status(200).json(data)
}
//post data
const createdata = async (req,res) => {
  const {projecttitle,description,imageUrl,imageData} =req.body
  //add doc to db
  try{
      const data= await Pdata.create({projecttitle,description,imageUrl,imageData})
      res.status(200).json(data)
  } 
  catch (error){
      res.status(400).json({error:error.message})
  }
}

//delete data
const deletepdata = async (req,res) =>{
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({error:'No such projectdata id'})
  }

  const data= await Pdata.findByIdAndDelete({_id:id})

  if(!data){
      return res.status(404).json({error:"Not such project"})
  }

  res.status(200).json(data)
}

//update data
const updatedata = async (req,res) =>{

  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({error:'No such workout id'})
  }

  const data= await Pdata.findByIdAndUpdate({_id:id}, {
      ...req.body
  })

  if(!data){
      return res.status(404).json({error:"Not such workout"})
  }

  res.status(200).json(data)
}



// //upload image
// const uploadimage = async (req, res) => {
//   upload.single('image')
//   try {
//     const { originalname, buffer } = req.file;
//     const { description, imageUrl } = req.body;

//     // Create new Image document
//     const newImage = new Image({
//       name: originalname,
//       description,
//       imageUrl,
//       imageData: buffer
//     });

//     // Save image data to MongoDB
//     await newImage.save();

//     res.status(201).send('Image uploaded successfully.');
//   } catch (error) {
//     console.error('Error uploading image:', error);
//     res.status(500).send('Error uploading image.');
//   }
// });


module.exports={getprojectdata,createdata,getprojectdid,deletepdata,updatedata}
