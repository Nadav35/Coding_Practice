```
Given n non-negative integers representing an elevation map where the width of each bar is 1, 
compute how much water it is able to trap after raining.
```

![alt text](https://github.com/Nadav35/Coding_Practice/blob/master/assets/rainwatertrap.png "image 1")

The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

```
Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
```

# **Approach 1: Brute Force**
## **Intuition**

Do as directed in question. For each element in the array, we find the maximum level of water it can trap after the rain, which is equal to the minimum of maximum height of bars on both the sides minus its own height.

## **Algorithm**
  * Initialize ans = 0
  * Iterate the array from left to right:
    * Initialize ```max_left = 0``` and ```max_right = 0```
    * Iterate from the current element to the beginning of array, updating:
      * ```max_left = max(max_left, height[j])```
    * Iterate from the current element to the end of array, updating:
      * ```max_right = max(max_left, height[j])```
    * add ```min(max_left, max_right - height[i])``` to ans
