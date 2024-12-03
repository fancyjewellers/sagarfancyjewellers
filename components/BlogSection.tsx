import { blogPosts } from '@/constants/indext'
import Image from 'next/image'


export default function BlogSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 mt-2">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectPosition="center"
                  objectFit="contain"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a href="#" className="text-gold hover:underline">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

