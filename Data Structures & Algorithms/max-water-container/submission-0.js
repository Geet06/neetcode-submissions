class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxVal=0;
        let left=0;
        let right=heights.length-1;
        while(left<right){
            let currArea=(right-left)*Math.min(heights[right],heights[left])
            maxVal=Math.max(currArea,maxVal)
            if(heights[right]>heights[left]){
                left++;
            } else if(heights[right]<heights[left]){
                right--
            }else {
                left++;
                right--
            }
        }
        return maxVal
    }
}
