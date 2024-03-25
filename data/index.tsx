import { randomUUID } from "crypto"

import armoni from "../public/armoni.jpg"
import houst from "../public/houst.png"
import shining from "../public/shining.jpg"

export const items: BentoGridItem[] = [
  {
    title: "Armoni",
    slug: "armoni",
    description: "A newspaper concept design mainly for art & musics",
    image: armoni,
    id: randomUUID()
  },
  {
    title: "THE SHINING",
    slug: "theShining",
    description: "Movie poster of Stanley Kubrick's 'The Shining'",
    image: shining,
    id: randomUUID()
  },
  {
    title: "Houst",
    slug: "houst",
    description: "Next&Gen real estate platform UI/UX design",
    image: houst,
    id: randomUUID()
  },
  {
    title: "The Power of Communication",
    slug: "powerOfCommunication",
    description:
      "Understand the impact of effective communication in our lives.",
    image: armoni,
    id: randomUUID()
  }
]
