'use client'

import { useState } from 'react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log('Subscribing email:', email)
    setMessage('Thank you for subscribing!')
    setEmail('')
  }

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-8">Stay updated with our latest collections and exclusive offers</p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-grow px-4 py-2 rounded-l-md text-gray-900"
            />
            <button
              type="submit"
              className="bg-gold text-white px-6 py-2 rounded-r-md hover:bg-yellow-600 transition duration-300"
            >
              Subscribe
            </button>
          </div>
          {message && <p className="mt-4 text-green-400">{message}</p>}
        </form>
      </div>
    </section>
  )
}