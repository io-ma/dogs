const leaks = (bigVolumes)=> {
  const leaksList = []
  let prev = 0
  bigVolumes.forEach((curr, index) => {
    if (curr.hour - prev != 1 || index === 0) {
      leaksList.push([])
    }
    leaksList[leaksList.length - 1].push(curr)
      prev = curr.hour
  })
  return leaksList.filter((leak) => leak.length >= 3)
} 

export default leaks
