import { cn } from "@/utils/cn"

export default function Grid({
  className,
  children
}: {
  className?: string
  children?: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  )
}
