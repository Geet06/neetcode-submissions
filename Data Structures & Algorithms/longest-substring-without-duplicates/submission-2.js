class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let max = 0;
        let set = new Set()
        for (let right = 0; right < s.length; right++) {
            while (set.has(s[right])) {
                set.delete(s[left])
                left++
            }
            set.add(s[right])
            max = Math.max(max, set.size)

        }
        return max
    }
}
