import Hero from "@/components/hero"
import Showcase from "@/components/showcase"

export default function Home() {
  return (
    <main className='px-8 md:px-0 space-y-16'>
      <Hero />
      <Showcase />
    </main>
  )
}
