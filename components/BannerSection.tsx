import Image from 'next/image'
import { banners } from '@/constants/indext'

// const banners = [
//   {
//     image: '/images/banner/bg-1.jpg',
//     title: 'Small design Rings',
//     subtitle: 'New Design',
//     discount: 'Sale 20%'
//   },
//   {
//     image: '/images/banner/bg-2.jpg',
//     title: 'White gold rings',
//     subtitle: 'Bestselling Rings',
//     discount: 'Sale 10%'
//   },
//   {
//     image: '/images/banner/bg-3.jpg',
//     title: 'Platinium Rings',
//     subtitle: 'Featured Rings',
//     discount: 'Sale 30%'
//   }
// ]

export default function BannerSection() {
  return (
    <section className="banner_section banner_black py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {banners.map((banner, index) => (
            <div key={index} className="relative overflow-hidden group">
              <Image
                src={banner.image}
                alt={banner.title}
                width={400}
                height={300}
                layout="responsive"
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white">
                  <p className="text-gold mb-2">{banner.subtitle}</p>
                  <h2 className="text-2xl font-bold mb-2">{banner.title}</h2>
                  <span className="text-xl">{banner.discount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
