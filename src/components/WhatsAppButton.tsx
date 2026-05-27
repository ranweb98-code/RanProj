import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { openWhatsApp } from '../utils/navigation'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="#contact"
      onClick={(e) => {
        e.preventDefault()
        openWhatsApp()
      }}
      aria-label="Contact on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#25D366] text-white no-underline shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-105"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 2, repeat: 2, ease: 'easeOut' }}
      />
      <MessageCircle className="relative h-6 w-6" strokeWidth={1.75} />
    </motion.a>
  )
}
