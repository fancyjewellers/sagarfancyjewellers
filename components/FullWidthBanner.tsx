import Image from 'next/image';
import image from '@/public/images/banner/banner2222.jpg';

export default function FullWidthBanner() {
  return (
    <section className="relative h-96 sm:h-[30rem] lg:h-[40rem]">
      <Image
        src={image}
        alt="Special Offer"
        layout="fill"
        objectFit="cover"
        
        className="brightness-50"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 sm:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Special Collection
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6">
            Get up to 50% off on our exclusive jewelry collection
          </p>
          <button className="bg-gold text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-lg hover:bg-yellow-600 transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
