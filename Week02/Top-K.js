/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */

// 1. 暴力解决，数组的排序 + 截取 over
// var getLeastNumbers = function(arr, k) {
//   const ret = []
//   arr.sort((a, b) => a-b)
//   return arr.splice(0, k)
// };

// 利用二叉堆解决，题目的意思是找到一堆数中最小（大）的那几个数，所以可以采用这种方式。
// 1. 从数组中取前 k 个数（ 0 到 k-1 位），构造一个大顶堆
// 2. 从 k 位开始遍历数组，每一个数据都和大顶堆的堆顶元素进行比较，如果大于堆顶元素，则不做任何处理，
// 继续遍历下一元素；如果小于堆顶元素，则将这个元素替换掉堆顶元素，然后再堆化成一个大顶堆。
// 3. 遍历完成后，堆中的数据就是前 K 小的数据
var getLeastNumbers = function(arr, k) {
  let len = arr.length
  if (!len || !k) return []
  let heap = new Heap()
  // 建立最小堆，O(N) 复杂度
  heap.init(arr)
  let res = []
  while (k) {
    // 依次从堆顶弹出最小元素，O(logN) 复杂度
    res.push(heap.delete())
    k--
  }
  return res
}

function Heap() {
  this.heap = [-Infinity]
}
Heap.prototype.init = function(arr) {
  this.heap = [-Infinity]
  this.heap.push(...arr)
  let size = arr.length
  // 从最后一个元素的父节点开始实现最小堆，类似删除操作中将最后一个元素放在堆顶进行调整。
  for (let pos = parseInt(size / 2); pos > 0; pos--) {
    let tmp = this.heap[pos]
    let parent, child
    for (parent = pos; parent * 2 <= size; parent = child) {
      child = parent * 2
      if (child + 1 <= size && this.heap[child + 1] < this.heap[child]) child++
      if (tmp < this.heap[child]) break
      else this.heap[parent] = this.heap[child]
    }
    this.heap[parent] = tmp
  }
}
Heap.prototype.delete = function() {
  let size = this.heap.length - 1
  let res = this.heap[1]
  // 拿到最后一个元素
  let tmp = this.heap[size]
  this.heap.length--
  size--
  // 将最后一个元素放在堆顶，并调整最小堆
  let parent, child
  for (parent = 1; parent * 2 <= size; parent = child) {
    child = parent * 2
    if (child + 1 <= size && this.heap[child + 1] < this.heap[child]) child++
    if (tmp < this.heap[child]) break
    else this.heap[parent] = this.heap[child]
  }
  this.heap[parent] = tmp
  return res
}