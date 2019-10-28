// Code your solution here
function findMatching (drivers,string) {
  return drivers.filter(driver=> string.toLowerCase() === driver.toLowerCase())
}


function fuzzyMatch (drivers,string) {
  return drivers.filter(driver=> string.toLowerCase() === driver.charAt(0).toLowerCase())
}