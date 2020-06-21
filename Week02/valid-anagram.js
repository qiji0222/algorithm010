// 242. 有效的字母异位词
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if(s.length !== t.length) {
    return false
  }

  let map = new Map()

  for(let i = 0; i < s.length; i++) {
    const getMap = map.get(s[i])
    if(getMap) {
      map.set(s[i], getMap + 1)   
    } else {
      map.set(s[i], 1)
    }
  }

  for(let j = 0; j < t.length; j++) {
    const getMap = map.get(t[j])
    if(getMap) {
      map.set(t[j], getMap - 1)
    } else {
      return false
    }
  }

  console.log(map)

  return true
};


// hash, map --> 统计每个字符的频次