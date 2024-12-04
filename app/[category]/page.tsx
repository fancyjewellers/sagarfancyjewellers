// import { getProductsByCategory } from '@/lib/actions/product.action'
// import Image from 'next/image';
// import React from 'react'
// import { Product } from '@/lib/types';




// const Pages = async ({ params }: any)=> {
//     const { category }=await params;
//     const products = (await getProductsByCategory(category) as unknown) as Product[];
    
//   return (
//     <div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {products.map((product: Product) => (
//             <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden">
//               <div className="relative h-64">
//                 <Image
//                   src={product.primaryImage}
//                   alt={product.category}
                 
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               </div>
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
//                 <p className="text-gray-600 mb-4">₹{product.price.toLocaleString()}</p>
//                 <button className="w-full bg-gold text-white py-2 rounded hover:bg-yellow-600 transition duration-300">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//     </div>
//   )
// }

// export default Pages
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/lib/types';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart } from "lucide-react";
import { getProductsByCategory } from '@/lib/actions/product.action';

const ProductCard = ({ product }: { product: Product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <Card 
      className="group relative h-full transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={isHovered ? product.secondaryImage1 : product.primaryImage}
          alt={product.title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 bg-white/80 hover:bg-white"
          onClick={() => setLiked(!liked)}
        >
          <Heart className={liked ? "text-red-500 fill-red-500" : "text-gray-600"} />
        </Button>
      </div>

      <CardContent className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <Badge variant="secondary" className="text-xs">
            {product.quality}
          </Badge>
          <span className="text-xs text-gray-500">{product.weight}g</span>
        </div>
        
        <h3 className="mb-2 font-semibold line-clamp-2">{product.title}</h3>
        
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold">₹{product.price.toLocaleString()}</span>
          <Button className="gap-2">
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const FilterSection = ({ category,totalroducts }: { category: string ,totalroducts:number}) => (
  <div className="mb-8 flex items-center justify-between">
    <h2 className="text-2xl font-bold">{category}</h2>
    <div className="flex gap-4">
      <Button variant="outline">Total Products:{totalroducts}</Button>
    </div>
  </div>
);

const Pages = async ({ params }: { params: { category: string } }) => {
  const { category } = params;
  const products = (await getProductsByCategory(category) as unknown) as Product[];

  return (
    <div className="mx-auto max-w-7xl p-6">
      <FilterSection category={category} totalroducts={products.length} />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Pages;
