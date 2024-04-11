import React from "react"
import serap_jpg from "@/public/serap.jpg"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar"

const Index = () => {
  return (
    <div className='text-center space-y-8'>
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

      <p className='text-xl font-medium'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
        recusandae provident temporibus minima nemo unde! Vel quibusdam, magnam
        nulla inventore odit deserunt.
      </p>
      <p className='text-sm'>
        Saepe sunt, iusto ducimus sint ipsa necessitatibus repellat dolore
        dolores placeat deserunt nesciunt perferendis commodi optio natus! Iusto
        minima maiores eaque ipsa aliquid!
      </p>
    </div>
  )
}

export default Index
