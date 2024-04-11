import BentoGrid from "./grid"
import BentoGridItem from "./item"
import { items } from "@/data"

const Index = () => {
  return (
    <div className='mt-8 py-4'>
      <BentoGrid className='mx-auto md:auto-rows-[20rem] pt-4 pb-8'>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            isEven={i % 2 === 0}
            item={item}
            // className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            className={"animated-item scale-50 opacity-0"}
          />
        ))}
      </BentoGrid>
    </div>
  )
}

export default Index
