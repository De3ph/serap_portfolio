"use client"
import { cn } from "@/utils/cn"
import { animate, stagger, useAnimate, useInView } from "framer-motion"
import React, { useEffect } from "react"

export default function Grid({
  className,
  children
}: {
  className?: string
  children?: React.ReactNode
}) {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    if (isInView) {
      animate(
        ".animated-item",
        { opacity: 1, scale: 1 },
        {
          delay: stagger(0.05, {
            startDelay: 0.15
          }),
          type: "spring",
          ease: "circIn"
        }
      )
    }
  }, [isInView])

  return (
    <div
      ref={scope}
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-4 max-w-5xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  )
}
