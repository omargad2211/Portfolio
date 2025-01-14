'use client'

import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="py-8 bg-gray-50">
      <div className="container mx-auto px-4 text-center text-gray-600">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          © {new Date().getFullYear()} Omar Gad. All rights reserved.
        </motion.p>
      </div>
    </footer>
  )
}

