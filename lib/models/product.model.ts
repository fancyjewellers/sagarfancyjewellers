import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    title: { 
      type: String, 
      required: true, 
      trim: true 
    },
    category: { 
      type: String, 
      required: true, 
      trim: true 
    },
    price: { 
      type: Number, 
      required: true, 
      min: 0 
    },
    primaryImage: { 
      type: String, 
      required: true 
    },
    secondaryImage1: { 
      type: String 
    },
    secondaryImage2: { 
      type: String 
    },
    gender:{
      type:String,
      required: true 
    },
    weight:{
      type:Number,
      required: true 
    },
    quality:{
      type:String,
      required: true 
    }
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

export const Product = mongoose.models.Product || mongoose.model('Product', productSchema);