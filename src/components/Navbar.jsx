import { Menu, X } from "lucide-react"
import { useState } from "react"


const Navbar = () => {
    
  const [hasMenuOpen, setHasMenuOpen] = useState(false) 
  
  return (
        <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-blue-950/20 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 sm:px-6">
            <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
             <div className="flex items-center space-x-1 group cursor-pointer">
                <div>
                    <img 
                    src='/logo.png' 
                    alt='logo'
                    className="w-12 h-10 sm:w-14 sm:h-12"
                    />
                </div>
                <span className="text-lg sm:text-xl md:text-2xl font-medium">
                    <span className="text-blue-400">Swift</span>
                    <span className="text-white">Code</span>
                </span>
             </div>
              {/* Nav Links */}
              <div className='hidden md:flex items-center space-x-6 lg:space-x-8'>
                <a 
                  href='#features'
                  className="text-gray-300 hover:text-white text-sm lg:text-base"
                >
                  Features
                </a>
                <a 
                  href='#pricing'
                  className="text-gray-300 hover:text-white text-sm lg:text-base"
                >
                  Pricing
                </a>
                <a 
                  href='#testimonials'
                  className="text-gray-300 hover:text-white text-sm lg:text-base"
                >
                  Testimonials
                </a>
              </div>

                <button 
                  className="md:hidden p-2 text-gray-300 hover:text-white"
                  onClick={() => setHasMenuOpen((prev) => !prev)}
                >
                  {hasMenuOpen ? (
                    <X className="w-5 h-5 sm:w-6 sm:h-6"/>
                  ) : (
                    <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                  )}
                </button>
            </div>
          </div>

            {hasMenuOpen && (
              <div className="md:hidden bg-blue-950/50 backdrop-blur-lg border-t border-slate-800 animate-in duration-300 slide-in-from-top">
                <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                   <a
                     onClick={() => setHasMenuOpen(false)} 
                     href='#features'
                     className="block text-gray-300 hover:text-white text-sm lg:text-base"
                >
                  Features
                </a>
                <a 
                  onClick={() => setHasMenuOpen(false)} 
                  href='#pricing'
                  className="block text-gray-300 hover:text-white text-sm lg:text-base"
                >
                  Pricing
                </a>
                <a
                  onClick={() => setHasMenuOpen(false)}  
                  href='#testimonials'
                  className="block text-gray-300 hover:text-white text-sm lg:text-base"
                >
                  Testimonials
                </a>
                </div>
              </div>
            )}
        </nav>
    )
}
export default Navbar
