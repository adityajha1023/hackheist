import { useNavigate } from 'react-router-dom'
import { Play, Info } from 'lucide-react'
import { motion } from 'framer-motion'
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
        <motion.div 
          className="mb-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-red-600 text-sm md:text-paragraph font-bold tracking-widest">GDG IILM</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          className="text-[6rem] font-medium tracking-tight text-white mb-3 leading-tight font-netflix"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          HACK O' CLOCK
        </motion.h1>

        {/* Metadata */}
        <motion.div 
          className="flex flex-wrap items-center gap-3 md:gap-4 text-sm md:text-paragraph text-gray-300 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span>2025</span>
          <span>•</span>
          <span>Interactive Experience</span>
          <span>•</span>
          <span>Experimental</span>
        </motion.div>

        {/* Description */}
        <motion.p 
          className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Explore an immersive scroll-paragraphd interactive experience. Discover dynamic animations, smooth transitions, and innovative design techniques that push the boundaries of web experiences.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
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
        </motion.div>
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
