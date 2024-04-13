"use client"
import { cn } from "@/utils/cn"
import { stagger, useAnimate, useInView } from "@/lib/framer"
import { useEffect } from "react"

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
            startDelay: 0.2
          }),
          type: "spring",
          ease: "circIn"
        }
      )
    }
  }, [animate, isInView])

  return (
    <div
      ref={scope}
      className={cn(
        "max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-6",
        className
      )}
    >
      {children}
    </div>
  )
}