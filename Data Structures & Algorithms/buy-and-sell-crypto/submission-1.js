class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxVal=0;
        let left=0;
        while(left<prices.length-1){
            for(let right=left+1;right<prices.length;right++){
                let curr=prices[right]-prices[left]
                maxVal=Math.max(maxVal,curr);
                console.log('curr',prices[right]-prices[left],right,left)
            }
            left++
        }
        return maxVal
    }
}
