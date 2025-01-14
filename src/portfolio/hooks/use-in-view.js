'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function useInViewAnimation(threshold = 0.1) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  return { ref, hasAnimated }
}

