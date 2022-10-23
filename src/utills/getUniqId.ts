const getUniqId = () => {
  return `${new Date().getTime().toString()}-${Math.random()
    .toString(16)
    .slice(2)}`
}

export { getUniqId }
