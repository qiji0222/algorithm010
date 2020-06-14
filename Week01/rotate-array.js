/*
 * @作者: qiji 
 * @Date: 2020-06-14 19:21:55 
 * @最后更改:   qiji 
 * @最后更改: 2020-06-14 19:21:55
 * 旋转数组 
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 方法1：切数组，本机运行可以，leetcode不行。
// var rotate = function(nums, k) {
//   const arr = nums.splice(nums.length-k)
//   nums = arr.concat(nums)
// }

// var rotate = function(nums, k) {
//   // 见到一个类似的解法， 可以求出结果
//   nums.splice(0,0,...nums.splice(nums.length-k))
// };

// 方法2：三次反转
// 1. 第一次反转整个数组。倒序，相当于 将后部元素移动到前面
// 2. 第二次反转前面一组的k个数字，也就是相当于将原数组的 k 个元素的末尾移动到前面去；
// 3. 第三次反转另一组，相当于原来靠前的 len-k 个元素，不要动，还是原来的顺序。
var rotate = function(nums, k) {
  k%= nums.length
  reverse(nums, 0, nums.length - 1)
  console.log(nums);
  reverse(nums, 0, k - 1)
  console.log(nums);
  reverse(nums, k, nums.length - 1 )
  console.log(nums);
};

function reverse(arr, start, end) {
  while(start < end) {
    const t = arr[start]
    arr[start] = arr[end]
    arr[end] = t
    start++;
    end--;
  }
}


rotate([1, 2, 3, 4, 5, 6, 7], 3)