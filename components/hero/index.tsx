"use client"
import serap_jpg from "@/public/serap.jpg"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar"

const Index = () => {
  return (
    <div className='space-y-16 md:space-y-32'>
      <section className='grid grid-cols-1 space-y-4 md:space-y-0 md:grid-cols-2'>
        <div className='w-full md:flex md:flex-col md:justify-center md:items-start'>
          <div className='text-3xl text-center'>
            <div>
              <span className='font-medium'>Merhaba 👋, ben</span>
              &nbsp;
              <span className='font-bold'>Serap</span>
            </div>
          </div>
        </div>

        <div>
          <div className='w-full flex justify-end'>
            <Avatar className='size-64'>
              <AvatarImage
                src={serap_jpg.src}
                alt='my_image'
                className='object-scale-down'
              />
              <AvatarFallback>SF</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </section>

      <section className='space-y-8 text-wrap'>
        <div className='text-xl font-medium space-y-4'>
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
        <div className='text-md text-balance text-center'>
          UI/UX alanında çalışmalar yapmayı seviyorum. Adobe Creative Cloud
          programlarına hakimim Figma ise favori progralarım arasında.
        </div>
      </section>
    </div>
  )
}

export default Index
