import { ChevronDown, Sparkle, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react'
import SyntaxHighlighter from "react-syntax-highlighter";
import { codeSamples, floatingCards } from '../data/CodeMockup';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const Hero = () => {
    
    const [ mousePosition, setMousePosition ] = useState({ x:0, y:0 });
    const [ activeTap, setActiveTap ] = useState('App.jsx');

    useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

    const currentActiveTap = floatingCards[activeTap]

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div
            className="absolute inset-0 opacity-30"
            style={{ background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.5), transparent 40%)`,
            }}
          />
          <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          



          <div className='max-w-7xl mx-auto text-center relative w-full'>
            <div className='max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative'>
              <div>
                <div className='inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700'>
                  <Sparkles />   {/*Start from here*/}
                  <span>Introducing SwiftCode AI</span>
                </div>
              </div>
              <div className='relative order-2 w-full'>
                <div className='relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border-white/10'>
                  <div className='bg-linear-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-lg overflow-hidden h-70 sm:w-87.5 lg:h-112.5 border border-white/5'>
                    {/* IDE header*/}
                    <div className='flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10'>
                      <div className='flex items-center space-x-2'>
                        <div className='flex items-center space-x-1 sm:space-x-2'>
                          <div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500'></div>
                          <div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500'></div>
                           <div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-500'></div>
                        </div>
                        <span className='text-xs sm:text-sm text-gray-300'>SwiftCode AI</span>
                      </div>
                      <ChevronDown className='w-3 h-3 sm:w-4 sm:h-4 text-gray-400' />
                      </div>
                    
                      <div className='p-3 sm:p-4 relative h-full'>
                      {/*file tap*/}
                      <div className='flex space-x-1 sm:space-x-2 mb-3 sm:mb-4 overflow-x-auto'>
                        <button 
                          onClick={() => setActiveTap('App.jsx')}
                          className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border 
                          ${activeTap === 'App.jsx'
                            ? 'bg-blue-500/30 text-white border-blue-400/20' 
                            : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10' } 
                            text-gray-300 transition-all duration-200 whitespace-nowrap`}
                        >
                          App.jsx
                        </button>
                        <button 
                          onClick={() => setActiveTap('Hero.jsx')}
                          className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border 
                          ${activeTap === 'Hero.jsx'
                            ? 'bg-blue-500/30 text-white border-blue-400/20' 
                            : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10' } 
                            text-gray-300 transition-all duration-200 whitespace-nowrap`}
                        >
                          Hero.jsx
                        </button>
                        <button 
                          onClick={() => setActiveTap('Navbar.jsx')}
                          className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border 
                          ${activeTap === 'Navbar.jsx'
                            ? 'bg-blue-500/30 text-white border-blue-400/20' 
                            : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10' } 
                            text-gray-300 transition-all duration-200 whitespace-nowrap`}
                        >
                          Navbar.jsx
                        </button>
                      </div>

                    {/* Code */}
                      <div className='relative overflow-hidden grow'>
                        <SyntaxHighlighter 
                          language='javascript' 
                          style={nightOwl} 
                          customStyle={{ 
                            margin:0, 
                            borderRadius:'8px', 
                            fontSize:'11px', 
                            lineHeight:'1.4',
                            height: '100%',
                            border: '1px solid #3c3c3c'
                          }}
                        >
                          {codeSamples[activeTap]}
                        </SyntaxHighlighter>
                      </div>
                    </div> 
                  </div>

                {/* Floating Card */}
                  <div className={`hidden lg:block absolute bottom-4 right-4 transform translate-x-8 translate-y-8 w-72 ${currentActiveTap.bgColor} backdrop-blur-xl rounded-lg p-4 border border-white/20 shadow-2xl`}>
                    <div className='flex items-center space-x-2 mb-2'>
                      <div className={`w-6 h-6 ${currentActiveTap.iconColor} flex items-center justify-center text-sm font-bold`}>
                        {currentActiveTap.icon}
                      </div>
                      <span className={`text-sm font-medium ${currentActiveTap.textColor}`}>
                        {currentActiveTap.title}
                      </span>
                    </div>
                    <div className={`text-sm text-left ${currentActiveTap.contentColor}`}>
                        {currentActiveTap.content}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}
export default Hero