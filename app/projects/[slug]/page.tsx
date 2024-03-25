import React from "react"

type Props = {
  params: {
    slug: string
  }
}

const Page = ({ params }: Props) => {
  return <div>{params.slug}</div>
}

export default Page
