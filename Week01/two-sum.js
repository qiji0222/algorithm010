/*
 * @作者: qiji 
 * @Date: 2020-06-14 20:16:56 
 * @最后更改:   qiji 
 * @最后更改: 2020-06-14 20:16:56
 * 两数之和 
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 暴力：第一次
 */
var twoSum = function(nums, target) {
  const result = []
  const arr2 = JSON.parse(JSON.stringify(nums))
  const len = nums.length
  for (let i = 0; i < len; i++) {
  arr2.splice(0, 1)
  const ret = target - nums[i]
  const index2 = arr2.indexOf(ret)
  if (index2 !== -1) {
      result[0] = i
      result[1] = index2 + i + 1
  }
  }
  return result
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 第二次，这是用hash？
 */
var twoSum = function(nums, target) {
  let len = nums.length,
      map = new Map();
  for(let i = 0;i<len;i++){
      if(!map.has(nums[i])){
          map.set(nums[i],[i]);
      }else{
          map.get(nums[i]).push(i);
      }
  }
  let flag= [];
  for(let i = 0;i<len;i++){
      if(map.get(nums[i]).length===2){
          if(nums[i]*2===target){
              flag = map.get(nums[i]);
              break;
          }
      }
      if(map.has(target-nums[i])&&(map.get(target-nums[i]))[0]!==i){
          flag.push(i);
          flag.push(map.get(target-nums[i])[0]);
          break;
      }
  }
  return flag;
};