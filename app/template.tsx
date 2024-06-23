"use client"
import { useAnimate } from "@/lib/framer"
import { useEffect } from "react"
type Props = {
  children: React.ReactNode
}

const Template = ({ children }: Props) => {
  const [scope, animate] = useAnimate<HTMLElement>()

  useEffect(() => {
    animate(
      scope.current,
      { opacity: [0, 1], x: [-10, 0] },
      {
        duration: 0.15,
        delay: 0.1,
        ease: "linear"
      }
    )
  }, [animate, scope])
  return <main ref={scope}>{children}</main>
}

export default Template
