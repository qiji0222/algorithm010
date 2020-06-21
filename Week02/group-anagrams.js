/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map= new Map()

  for(let i = 0; i < strs.length; i++) {
    const str = strs[i].split('').sort().join();
    const getStr = map.get(str)
    if(getStr) {
      getStr.push(strs[i])
      map.set(str, getStr)
    } else {
      map.set(str, [strs[i]])
    }
  }

  const ret = [...map.values()]

  return ret
};