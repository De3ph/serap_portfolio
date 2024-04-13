"use client"
import { useAnimate } from "@/lib/framer"
import serap_jpg from "@/public/serap.jpg"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar"
import { useEffect } from "react"

const Index = () => {
  const [scope, animate] = useAnimate<HTMLDivElement>()

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

  return (
    <div ref={scope} className='text-center space-y-8'>
      <h1 className='text-3xl font-semibold'>Merhaba 👋, ben Serap</h1>

      <section className='flex justify-center'>
        <Avatar className='size-64'>
          <AvatarImage
            src={serap_jpg.src}
            alt='my_image'
            className='object-scale-down'
          />
          <AvatarFallback>SF</AvatarFallback>
        </Avatar>
      </section>

      <div className='text-xl font-medium'>
        <p>
          Ege Üniversitesi Görsel İletişim Tasarımı 3. sınıf öğrencisiyim.
          Birçok sosyal alanda çalışma tecrübemin yanında bölümüm olan Görsel
          İletişim Tasarımında da çeşitli projeler geliştirdim.
        </p>
        <p>
          Hobilerim arasında vals ve tango dansları var. Ayrıca gönüllü olarak
          birçok sosyal sorumluluk projesine katıldım. Kendimi her alanda
          geliştirerek yeni şeyler keşfetmeyi ve seyahat etmeyi çok seviyorum.
        </p>
      </div>
      <p className='text-md'>
        Alan olarak kendime net bir alan belirlemesem de UI/UX alanında kendimi
        geliştirmeyi seviyorum. Adobe Creative Cloud programlarına hakimim Figma
        ise favori progralarım arasında.
      </p>
    </div>
  )
}

export default Index
