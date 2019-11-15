const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({
   title :  {
     type : String,
     require : true
   },
   slug :  {
    type : String,
    require : true
  },
   exercept :  {
    type : String,
    require : true
  }, 
  content:  {
    type : String,
    require : true
  }, 
  feature_image: {
    type : String,
    required : true
  },
  categories : [
      {
        name : {
          type : String,
          required : true 
        }
      }
  ],
  images: [
      {
        url: {
          type : String,
          required : true 
        },
      }
    ],
  createdAt : {
    type : Date,
   default : Date.now
  }
})

mongoose.model('Post', postSchema);