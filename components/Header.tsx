'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingCart, Heart, Search, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="py-2 border-b border-gray-800 flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="tel:+916265653436" className="text-sm hover:text-gold">+91 6265653436</a>
            <a href="mailto:sagarfancyjewellers@gmail.com" className="text-sm hover:text-gold">sagarfancyjewellers@gmail.com</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-sm hover:text-gold">Track Order</a>
            <a href="#" className="text-sm hover:text-gold">Login / Register</a>
          </div>
        </div>

        {/* Main Header */}
        <div className="py-4 flex justify-between items-center">
          <Link href="/" className='font-serif text-yellow-600 text-3xl '>
            {/* <Image src={logo} alt="Ashirwaad Jewelry" width={150} height={50} /> */}
            Fancy Jewellers
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-gold">Home</Link>
            <div className="relative group">
              <button className="flex items-center hover:text-gold">
                Categories <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute top-full left-0 bg-gray-800 py-2 w-48 hidden group-hover:block">
                <Link href="/category/necklaces" className="block px-4 py-2 hover:bg-gray-700">Necklaces</Link>
                <Link href="/category/earrings" className="block px-4 py-2 hover:bg-gray-700">Earrings</Link>
                <Link href="/category/rings" className="block px-4 py-2 hover:bg-gray-700">Rings</Link>
                <Link href="/category/bracelets" className="block px-4 py-2 hover:bg-gray-700">Bracelets</Link>
              </div>
            </div>
            <Link href="/uncut-diamonds" className="hover:text-gold">Uncut Diamonds</Link>
            <Link href="/about" className="hover:text-gold">About Us</Link>
            <Link href="/Contact" className="hover:text-gold">Contact</Link>
          </nav>

          {/* Header Icons */}
          <div className="flex items-center space-x-4">
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="hover:text-gold">
              <Search size={20} />
            </button>
            <Link href="/wishlist" className="hover:text-gold">
              <Heart size={20} />
            </Link>
            <Link href="/cart" className="hover:text-gold relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-gold text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">3</span>
            </Link>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden hover:text-gold">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-800">
            <Link href="/" className="block py-2 hover:text-gold">Home</Link>
            <button className="w-full text-left py-2 hover:text-gold flex justify-between items-center">
              Categories <ChevronDown size={16} />
            </button>
            <Link href="/uncut-diamonds" className="block py-2 hover:text-gold">Uncut Diamonds</Link>
            <Link href="/about" className="block py-2 hover:text-gold">About Us</Link>
            <Link href="/contact" className="block py-2 hover:text-gold">Contact</Link>
          </nav>
        )}

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-gray-800">
            <form className="flex">
              <input 
                type="search" 
                placeholder="Search for products..." 
                className="flex-grow px-4 py-2 bg-gray-800 text-white rounded-l focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-gold text-white rounded-r hover:bg-yellow-600 transition duration-300"
              >
                Search
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  )
}

