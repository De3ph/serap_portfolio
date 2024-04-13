import Image from "next/image"
import { items } from "@/data"

type Props = {
  params: {
    slug: string
  }
}

const Page = ({ params }: Props) => {
  const project: BentoGridItem | undefined = items.find((item) => {
    return item.slug === params.slug
  })
  return (
    <main className='text-center space-y-8 min-h-dvh'>
      <div className='text-3xl font-bold capitalize'>{project?.title}</div>

      <section className='grid grid-cols-1 space-y-8 place-items-center'>
        {project?.fileLinks?.map((link) => (
          <Image
            key={link}
            src={link as string}
            alt='image'
            width={700}
            height={700}
            className='aspect-auto'
          />
        ))}
      </section>
    </main>
  )
}

export default Page
