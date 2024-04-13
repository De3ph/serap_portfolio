import { cn } from "@/utils/cn"
import Link from "next/link"
import Image from "next/image"

type Props = {
  item: BentoGridItem
  className?: string
}

export default function Item({ item, className }: Props) {
  return (
    <div className='transition duration-200 hover:-translate-y-1'>
      <Link
        className={cn(
          "animated-item scale-50 opacity-0", // framer motion animasyonu için
          "bg-neutral-100 bg-opacity-75 dark:bg-neutral-800 dark:bg-opacity-100 dark:shadow-neutral-800 dark:border-white/[0.2]",
          "h-[24rem] md:h-[20rem] rounded-md pb-4 grid grid-cols-1 grid-rows-1 gap-y-4",
          "group/bento ease-in-out hover:shadow-xl",
          className
        )}
        href={`/projects/${item.slug}`}
      >
        <div className='overflow-clip'>
          <Image
            src={item.image?.src as string}
            width={300}
            height={0}
            alt='head image'
            className='object-cover w-full h-full rounded-t-md'
          />
        </div>
        <div className='space-y-2 px-4'>
          <div className='font-sans font-bold text-neutral-600 dark:text-neutral-200'>
            {item.title}
          </div>
          <div
            className='transition duration-200 md:-translate-x-2 md:group-hover/bento:translate-x-0 opacity-100 md:opacity-0 md:group-hover/bento:opacity-100 text-wrap line-clamp-2
         font-sans font-[550] text-neutral-600 text-sm dark:text-neutral-300 text-ellipsis'
          >
            {item.description}
          </div>
        </div>
      </Link>
    </div>
  )
}
