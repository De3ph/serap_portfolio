const generateBento: (i: number) => string = (i: number) => {
  if (i % 3 === 0) {
    return "md:col-span-2"
  }
  return "md:col-span-2"
}

export default generateBento
