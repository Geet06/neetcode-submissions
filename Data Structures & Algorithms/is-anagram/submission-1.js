class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const sMap = new Map();
        for(let char of s){
            if(sMap.has(char)){
              sMap.set(char, sMap.get(char)+1)
            } else{
                sMap.set(char, 1);
            }
        }
        for(let char of t){
            if(sMap.get(char) === 1){
                sMap.delete(char)
            } else if(sMap.get(char) > 1){
                sMap.set(char, sMap.get(char)-1)
            }
        }
        if(sMap.size==0){
            return true
        } else{
            return false
        }
    }
}
