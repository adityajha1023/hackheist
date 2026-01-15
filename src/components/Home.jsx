import { useNavigate } from 'react-router-dom'
import { Play, Info } from 'lucide-react'
import professorBg from '../assets/professor-bg.jpg'
import Navigation from './Navigation'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <Navigation />
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${professorBg})`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-end px-8 md:px-16 pb-32 md:pb-48">
        {/* Series Label */}
        <div className="mb-1">
          <span className="text-red-600 text-sm md:text-paragraph font-bold tracking-widest">GDG IILM</span>
        </div>

        {/* Main Title */}
        <h1 className="text-[6rem] font-medium tracking-tight text-white mb-3 leading-tight font-netflix">
          HACK O' CLOCK
        </h1>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm md:text-paragraph text-gray-300 mb-6">
          <span>2025</span>
          <span>•</span>
          <span>Interactive Experience</span>
          <span>•</span>
          <span>Experimental</span>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
          Explore an immersive scroll-paragraphd interactive experience. Discover dynamic animations, smooth transitions, and innovative design techniques that push the boundaries of web experiences.
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/scroll')}
            className="flex items-center gap-3 px-8 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition-colors duration-200 font-netflix text-paragraph md:text-lg">
            <Play className="w-6 h-6 fill-current" />
            <span>Play</span>
          </button>
          <button
            className="flex items-center gap-3 px-8 py-3 bg-gray-400/20 hover:bg-gray-400/10 text-white font-medium rounded-md transition-colors duration-200 font-netflix text-paragraph md:text-lg border border-gray-500">
            <span>More Info</span>
          </button>
        </div>
      </div>

      {/* Vignette effect */}
      <div className="absolute inset-0 z-30 pointer-events-none shadow-2xl" 
           style={{
             boxShadow: 'inset 0 0 120px rgba(0,0,0,0.5)'
           }} 
      />
    </div>
  )
}
