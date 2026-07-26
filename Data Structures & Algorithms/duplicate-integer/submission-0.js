class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let mySet= new Set(...[nums]);
        if(mySet.size==nums.length){
            return false
        }
        return true
        // for(let i =0;i<nums.length;i++){
        //     if(mySet.has(nums[i])){
        //         return true
        //     }
        //     mySet.add(nums[i])
        // } 
        // return false
    }
}
