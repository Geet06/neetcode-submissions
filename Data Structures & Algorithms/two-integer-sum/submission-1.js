class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const myMap=new Map()
        for (let i =0;i<nums.length;i++){
            let comp=target-nums[i];
            if(myMap.has(comp)){
                return [myMap.get(comp), i]
            }
            myMap.set(nums[i],i)
        }
    }
}
