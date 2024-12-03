import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
            Since the 1980s, New Fancy Jewellers has been a beacon of timeless elegance and craftsmanship.
            Discover our exquisite collection of enduring treasures, thoughtfully designed to celebrate life’s most precious milestones.
            </p>
            <p className='mt-2'>1980 के दशक से,  फैंसी ज्वेलर्स बेजोड़ कारीगरी और शाश्वत सुंदरता का प्रतीक रहा है।
            हमारे अद्वितीय संग्रह को खोजें, जिसे जीवन के सबसे अनमोल पलों का जश्न मनाने के लिए सावधानीपूर्वक तैयार किया गया है।</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-gold">Home</Link></li>
              <li><Link href="/category" className="text-gray-400 hover:text-gold">Shop</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-gold">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-gold">Contact</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-gold">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <address className="text-gray-400 not-italic">

              <p><a href='#'>Fancy Jewellers</a></p>
              <p> Jawahar Ganj, ward parkot, <br></br>
                Sagar, Madhay Pradesh<br></br>
                India</p>

                <p className='mt-2' ><a href='#'> New Fancy Jewellers</a></p>
              <p> Neha nagar <br></br>
                Sagar, Madhay Pradesh<br></br>
                India</p>  
              <p className="mt-2">Phone:
                <a href='tel:+916265653436'>+91 6265653436</a>
                <br></br>
                Tel:
                <a href='tel:07528313226'>07582313226</a>
              </p>
              <a href="https://wa.me/6265653436">Chat with us on WhatsApp</a>
              <p>Email: <a href='mailto:sagarfancyjewellers@gmail.com'>sagarfancyjewellers@gmail.com</a></p>
            </address>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gold text-white rounded hover:bg-yellow-600 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">&copy; 2024  Fancy Jewellers. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-gold"><Facebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-gold"><Twitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-gold"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-gold"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-gold"><Youtube size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}