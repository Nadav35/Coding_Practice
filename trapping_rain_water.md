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
      * ```max_right = max(max_right, height[j])```
    * add ```min(max_left, max_right) - height[i]``` to ans

```javascript
let trap = function(height) {
    let ans = 0;
    let size = height.length;
    for (let i = 1; i < size - 1; i++) {
        let maxLeft = 0;
        let maxRight = 0;
        // search the left size for max bar size
        for (let j = i; j >= 0; j--) {
            maxLeft = Math.max(maxLeft, height[j]);
        }
        
        // search the right size for max bar size
        for (let j = i; j < size; j++) {
            maxRight = Math.max(maxRight, height[j]);
        }
        ans += Math.min(maxLeft, maxRight) - height[i];
    }
    return ans;
};
```

# **Approach 2: Dynamic Programmin**
## **Intuition**

In brute force, we iterate over the left and right parts again and again just to find the highest bar size upto that index. But, this could be stored. Voila, dynamic programming.

The concept is illustrated as shown:

![alt-text](https://github.com/Nadav35/Coding_Practice/blob/master/assets/trapping_rain_water.png "image 2")

## **Algorithm**
  * Find maximum height of bar from the left end upto an index i in the array leftMax
  * Find maximum height of bar from the right end upto an index i in the array rightMax
  * Iterate over the \text{height}height array and update ans:
    * add ```min(maxLeft[i], maxRight[i]) - height[i]``` to ans

```javascript
  let trap = function(height) {
    let ans = 0;
    let size = height.length;
    let leftMax = [];
    let rightMax = [];
    leftMax[0] = height[0];
    for (let i = 1; i < size; i++) {
        leftMax[i] = Math.max(height[i], leftMax[i - 1]);
    }
    rightMax[size - 1] = height[size - 1];
    for (let i = size - 2; i >= 0; i--) {
        rightMax[i] = Math.max(height[i], rightMax[i + 1]);
    }
    for (let i = 1; i < size - 1; i++) {
        ans += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
    return ans;
    
};
```