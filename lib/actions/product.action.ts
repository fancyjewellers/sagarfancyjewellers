'use server'

import { dbConnect } from '@/lib/mongoose';
import { Product } from '@/lib/models/product.model';


export async function getProductsByCategory(category: string) {
    await dbConnect();
    try {
      const products = await Product.find({category: category}).lean();
      return products;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  }