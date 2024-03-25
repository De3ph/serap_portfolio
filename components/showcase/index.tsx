import BentoGrid from "./grid"
import BentoGridItem from "./item"
import { items } from "@/data"
import generateBento from "@/utils/generateBentoClassname"

const Index = () => {
  return (
    <div className='mt-8 py-4'>
      <BentoGrid className='mx-auto md:auto-rows-[20rem] pt-4 pb-8'>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            item={item}
            className={i === 3 || i % 7 === 0 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  )
}

export default Index
