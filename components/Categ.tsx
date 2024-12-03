'use client'

import Image from 'next/image'
import Link from 'next/link'

const categories = [
  {
    title: 'Men',
    description: 'Explore premium jewelry for men, crafted with precision.',
    image: 'https://via.placeholder.com/300x400?text=Men+Jewelry',
    link: '/categories/men',
  },
  {
    title: 'Women',
    description: 'Discover elegant and timeless pieces for women.',
    image: 'https://via.placeholder.com/300x400?text=Women+Jewelry',
    link: '/categories/women',
  },
  {
    title: 'Kids',
    description: 'Adorable and safe jewelry designs for kids.',
    image: 'https://via.placeholder.com/300x400?text=Kids+Jewelry',
    link: '/categories/kids',
  },
]

export default function Categ() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link key={index} href={category.link}>
              <a className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 block">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={300}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <button className="bg-gold text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition duration-300">
                    Explore {category.title}
                  </button>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
