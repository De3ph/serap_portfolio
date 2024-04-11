// import { randomUUID } from "crypto"

import armoni from "../public/armoni.jpg"
import houst from "../public/houst.png"
import shining from "../public/shining.jpg"
import coffeLure from "../public/coffeLure.jpg"

export const items: BentoGridItem[] = [
  {
    title: "Coffe Luure",
    slug: "coffeLure",
    description:
      "Caffee Lure, a café with a name that evokes classic charm, offers an atmosphere where guests feel right at home.",
    image: coffeLure,
    id: "",
    fileLinks: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/disp/2f5717195929349.6616a69729a70.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/fs/8e6ae3195929349.6616a69729e8c.jpg"
    ]
  },
  {
    title: "Armoni",
    slug: "armoni",
    description: "A newspaper concept design mainly for art & musics",
    image: armoni,
    id: ""
  },
  {
    title: "The Shining",
    slug: "theShining",
    description: "Movie poster of Stanley Kubrick's 'The Shining'",
    image: shining,
    id: ""
  },
  {
    title: "Houst",
    slug: "houst",
    description: "Next&Gen real estate platform UI/UX design",
    image: houst,
    id: ""
  }
]
