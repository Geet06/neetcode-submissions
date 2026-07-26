class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let myObj={}
        let arr=[]
        for(let num of nums){
            myObj[num]=(myObj[num] || 0)+1
        }
        for (let i=0;i<k;i++){
            let max=0
            let key=0
            for(let keys in myObj){
                if(myObj[keys]>max){
                    console.log('keys',myObj[keys])
                    max=myObj[keys]
                    key=keys
                }
            }
            arr.push(key)
            delete myObj[key]
        }
        return arr;
    }
}
