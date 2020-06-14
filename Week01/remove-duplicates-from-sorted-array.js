/*
 * @作者: qiji 
 * @Date: 2020-06-14 18:30:42 
 * @最后更改:   qiji 
 * @最后更改: 2020-06-14 18:30:42
 * 算法题：删除排序数组中的重复项 leetcode：NO.26
 */

/**
 * 暴力解法：双指针法，写出来之后并不是暴力解法，我也不知道怎么就写出来的双指针，我想到的暴力解法就是这个
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // index 表示不重复的最后位置
  let index = 0
  for (let i = 1; i < nums.length; i++) {
    if(nums[i] !== nums[index]) {
      nums[index + 1] = nums[i]
      index ++
    }
  }
  return index + 1
}