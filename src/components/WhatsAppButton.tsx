import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <motion.div
      role="presentation"
      aria-hidden
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 cursor-default items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30"
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
    </motion.div>
  )
}
