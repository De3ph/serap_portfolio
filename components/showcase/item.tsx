import { cn } from "@/utils/cn"
import Link from "next/link"
import Image from "next/image"

type Props = {
  isEven: boolean
  item: BentoGridItem
  className: string
}

export default function BentoGridItem({ item, className, isEven }: Props) {
  return (
    <Link
      className={cn(
        "bg-neutral-100 bg-opacity-75 dark:bg-black dark:bg-opacity-100 dark:shadow-slate-900",
        "dark:border-white/[0.2]",
        "max-h-[350px] md:max-h-500 row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input p-4 space-y-4",
        "flex flex-col justify-between",
        "transition ease-in-out duration-200 hover:scale-[100%] hover:shadow-lg",
        className,
        isEven
          ? "md:hover:-translate-y-2 origin-bottom"
          : "md:hover:-translate-y-2 origin-bottom"
      )}
      // href={`/projects/${item.slug}`}
      href={`#`}
    >
      <div className='overflow-clip'>
        <Image
          src={item.image?.src as string}
          width={300}
          height={0}
          alt='head image'
          className='object-cover w-full h-full'
        />
      </div>
      <div className='group-hover/bento:translate-x-2 transition duration-200 space-y-2'>
        <div className='font-sans font-bold text-neutral-600 dark:text-neutral-200'>
          {item.title}
        </div>
        <div
          className='opacity-100 md:opacity-0 text-wrap line-clamp-2
        md:group-hover/bento:opacity-100 font-sans font-[550] text-neutral-600 text-sm dark:text-neutral-300 text-ellipsis'
        >
          {item.description}
        </div>
      </div>
    </Link>
  )
}
// justify-between flex flex-col