class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let arr=[]
        const myMap=new Map();
        for (let word of strs){
            let sortedStr=word.split('').sort().join('')
            if(myMap.has(sortedStr)){
                let currKeyVal=myMap.get(sortedStr);
                currKeyVal.push(word)
            } else {
                myMap.set(sortedStr,[word])
            }
        }
        for(let values of myMap.values()){
            arr.push(values)
        }
        return arr;
    }
}
