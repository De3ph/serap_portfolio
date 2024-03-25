import { cn } from "@/utils/cn"
import Link from "next/link"
import Image from "next/image"

type Props = {
  key: unknown
  item: BentoGridItem
  className: string
}

export default function BentoGridItem({ item, className }: Props) {
  return (
    <Link
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
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
          className='w-full'
        />
      </div>
      <div className='group-hover/bento:translate-x-2 transition duration-200 grid grid-cols-1 grid-rows-2'>
        <div className='font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2'>
          {item.title}
        </div>
        <div
          className='opacity-0
        group-hover/bento:opacity-100 font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 text-ellipsis'
        >
          {item.description}
        </div>
      </div>
    </Link>
  )
}
