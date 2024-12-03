'use client'

import { useState } from 'react'
import Image from 'next/image'
import { products } from '@/constants/indext'




export default function ProductSection({ title }: { title: string }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const categories = ['All', ...new Set(products.map(product => product.category))]

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory)

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
        <div className="flex justify-center mb-8">
          {categories.map(category => (
            <button
              key={category}
              className={`mx-2 px-4 py-2 rounded ${
                activeCategory === category ? 'bg-gold text-white' : 'bg-white text-gray-800'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">₹{product.price.toLocaleString()}</p>
                <button className="w-full bg-gold text-white py-2 rounded hover:bg-yellow-600 transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
