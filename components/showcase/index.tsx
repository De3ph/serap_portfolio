import Grid from "./grid"
import Item from "./item"
import { items } from "@/data"

const Index = () => {
  return (
    <section>
      <Grid className='mx-auto'>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Grid>
    </section>
  )
}

export default Index
