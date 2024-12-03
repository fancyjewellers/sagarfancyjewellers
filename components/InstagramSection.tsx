import { instagramPosts } from '@/constants/indext'
import Image from 'next/image'


export default function InstagramSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Follow Us on Instagram</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map(post => (
            <div key={post.id} className="relative aspect-square overflow-hidden group">
              <Image
                src={post.image}
                alt={`Instagram post ${post.id}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="https://www.instagram.com/ashirwaadjewelry" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
            @Fancyjewellers.
          </a>
        </div>
      </div>
    </section>
  )
}
