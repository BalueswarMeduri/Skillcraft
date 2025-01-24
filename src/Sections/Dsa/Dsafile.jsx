import React, { useState, useEffect } from "react";
import "./dsastyle.css";

const DsaRoadmap = () => {
    const initialProblems = [
        {
            topic: "Arrays",
            pattern: "Basic Sorting and Searching",
            questions: [
                { name: "Two Sum", link: "https://leetcode.com/problems/two-sum/", difficulty: "Easy" },
                { name: "3Sum", link: "https://leetcode.com/problems/3sum/", difficulty: "Medium" },
                { name: "Merge Intervals", link: "https://leetcode.com/problems/merge-intervals/", difficulty: "Medium" },
                { name: "Best Time to Buy and Sell Stock", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", difficulty: "Easy" },
                { name: "Product of Array Except Self", link: "https://leetcode.com/problems/product-of-array-except-self/", difficulty: "Medium" },
                { name: "Find Minimum in Rotated Sorted Array", link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", difficulty: "Medium" },
                { name: "Search in Rotated Sorted Array", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/", difficulty: "Medium" },
                { name: "Maximum Subarray", link: "https://leetcode.com/problems/maximum-subarray/", difficulty: "Easy" },
                { name: "Kth Largest Element in an Array", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/", difficulty: "Medium" },
                { name: "Contains Duplicate", link: "https://leetcode.com/problems/contains-duplicate/", difficulty: "Easy" },
                { name: "Set Matrix Zeroes", link: "https://leetcode.com/problems/set-matrix-zeroes/", difficulty: "Medium" },
                { name: "Spiral Matrix", link: "https://leetcode.com/problems/spiral-matrix/", difficulty: "Medium" },
                { name: "Rotate Image", link: "https://leetcode.com/problems/rotate-image/", difficulty: "Medium" },
                { name: "Word Search", link: "https://leetcode.com/problems/word-search/", difficulty: "Medium" },
                { name: "Sort Colors", link: "https://leetcode.com/problems/sort-colors/", difficulty: "Medium" },
                { name: "Insert Interval", link: "https://leetcode.com/problems/insert-interval/", difficulty: "Medium" },
                { name: "Subarray Sum Equals K", link: "https://leetcode.com/problems/subarray-sum-equals-k/", difficulty: "Medium" },
                { name: "Longest Consecutive Sequence", link: "https://leetcode.com/problems/longest-consecutive-sequence/", difficulty: "Medium" },
                { name: "Merge Sorted Array", link: "https://leetcode.com/problems/merge-sorted-array/", difficulty: "Easy" },
                { name: "Combination Sum", link: "https://leetcode.com/problems/combination-sum/", difficulty: "Medium" }
            ],
        },
        {
            topic: "Strings",
            pattern: "Sliding Window and Manipulation",
            questions: [
                { name: "Longest Substring Without Repeating Characters", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", difficulty: "Medium" },
                { name: "Valid Anagram", link: "https://leetcode.com/problems/valid-anagram/", difficulty: "Easy" },
                { name: "Group Anagrams", link: "https://leetcode.com/problems/group-anagrams/", difficulty: "Medium" },
                { name: "Longest Palindromic Substring", link: "https://leetcode.com/problems/longest-palindromic-substring/", difficulty: "Medium" },
                { name: "Minimum Window Substring", link: "https://leetcode.com/problems/minimum-window-substring/", difficulty: "Hard" },
                { name: "Find All Anagrams in a String", link: "https://leetcode.com/problems/find-all-anagrams-in-a-string/", difficulty: "Medium" },
                { name: "Valid Parentheses", link: "https://leetcode.com/problems/valid-parentheses/", difficulty: "Easy" },
                { name: "Longest Common Prefix", link: "https://leetcode.com/problems/longest-common-prefix/", difficulty: "Easy" },
                { name: "Decode String", link: "https://leetcode.com/problems/decode-string/", difficulty: "Medium" },
                { name: "Check If Two String Arrays are Equivalent", link: "https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/", difficulty: "Easy" },
                { name: "Roman to Integer", link: "https://leetcode.com/problems/roman-to-integer/", difficulty: "Easy" },
                { name: "Integer to Roman", link: "https://leetcode.com/problems/integer-to-roman/", difficulty: "Medium" },
                { name: "Count and Say", link: "https://leetcode.com/problems/count-and-say/", difficulty: "Medium" },
                { name: "Longest Substring with At Most Two Distinct Characters", link: "https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/", difficulty: "Medium" },
                { name: "String Compression", link: "https://leetcode.com/problems/string-compression/", difficulty: "Medium" },
                { name: "Basic Calculator", link: "https://leetcode.com/problems/basic-calculator/", difficulty: "Hard" },
                { name: "Zigzag Conversion", link: "https://leetcode.com/problems/zigzag-conversion/", difficulty: "Medium" },
                { name: "Palindrome Partitioning", link: "https://leetcode.com/problems/palindrome-partitioning/", difficulty: "Medium" },
                { name: "Multiply Strings", link: "https://leetcode.com/problems/multiply-strings/", difficulty: "Medium" },
                { name: "Restore IP Addresses", link: "https://leetcode.com/problems/restore-ip-addresses/", difficulty: "Medium" }
            ],
        },
        // Add similar sections for Linked List, Stack and Queue, Binary Tree, Binary Search Tree, Heaps, Graphs, Dynamic Programming, Greedy, Tries
        {
            topic: "Binary Search",
            pattern: "Search Algorithms and Applications",
            questions: [
                { name: "Binary Search", link: "https://leetcode.com/problems/binary-search/", difficulty: "Easy" },
                { name: "Find Minimum in Rotated Sorted Array", link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", difficulty: "Medium" },
                { name: "Search in Rotated Sorted Array", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/", difficulty: "Medium" },
                { name: "Search a 2D Matrix", link: "https://leetcode.com/problems/search-a-2d-matrix/", difficulty: "Medium" },
                { name: "First Bad Version", link: "https://leetcode.com/problems/first-bad-version/", difficulty: "Easy" },
                { name: "Find Peak Element", link: "https://leetcode.com/problems/find-peak-element/", difficulty: "Medium" },
                { name: "Kth Smallest Element in a Sorted Matrix", link: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/", difficulty: "Medium" },
                { name: "Median of Two Sorted Arrays", link: "https://leetcode.com/problems/median-of-two-sorted-arrays/", difficulty: "Hard" },
                { name: "Split Array Largest Sum", link: "https://leetcode.com/problems/split-array-largest-sum/", difficulty: "Hard" },
                { name: "Capacity to Ship Packages Within D Days", link: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/", difficulty: "Medium" },
                { name: "Search in Rotated Sorted Array II", link: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/", difficulty: "Medium" },
                { name: "Intersection of Two Arrays", link: "https://leetcode.com/problems/intersection-of-two-arrays/", difficulty: "Easy" },
                { name: "Intersection of Two Arrays II", link: "https://leetcode.com/problems/intersection-of-two-arrays-ii/", difficulty: "Easy" },
                { name: "Count of Smaller Numbers After Self", link: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/", difficulty: "Hard" },
                { name: "Find K Closest Elements", link: "https://leetcode.com/problems/find-k-closest-elements/", difficulty: "Medium" },
                { name: "Aggressive Cows", link: "https://www.spoj.com/problems/AGGRCOW/", difficulty: "Medium" },
                { name: "Allocate Minimum Number of Pages", link: "https://practice.geeksforgeeks.org/problems/allocate-minimum-number-of-pages/0", difficulty: "Hard" },
                { name: "Find the Duplicate Number", link: "https://leetcode.com/problems/find-the-duplicate-number/", difficulty: "Medium" },
                { name: "Minimum Number of Days to Make M Bouquets", link: "https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/", difficulty: "Medium" },
                { name: "Book Allocation Problem", link: "https://www.codingninjas.com/codestudio/problems/allocate-books_1090540", difficulty: "Hard" }
            ],
        },
        {
            topic: "Linked List",
            pattern: "Basic Operations and Advanced Problems",
            questions: [
                { name: "Reverse a Linked List", link: "https://leetcode.com/problems/reverse-linked-list/", difficulty: "Easy" },
                { name: "Merge Two Sorted Lists", link: "https://leetcode.com/problems/merge-two-sorted-lists/", difficulty: "Easy" },
                { name: "Cycle Detection in Linked List", link: "https://leetcode.com/problems/linked-list-cycle/", difficulty: "Easy" },
                { name: "Find the Start of the Cycle", link: "https://leetcode.com/problems/linked-list-cycle-ii/", difficulty: "Medium" },
                { name: "Middle of the Linked List", link: "https://leetcode.com/problems/middle-of-the-linked-list/", difficulty: "Easy" },
                { name: "Remove Nth Node From End of List", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", difficulty: "Medium" },
                { name: "Intersection of Two Linked Lists", link: "https://leetcode.com/problems/intersection-of-two-linked-lists/", difficulty: "Easy" },
                { name: "Palindrome Linked List", link: "https://leetcode.com/problems/palindrome-linked-list/", difficulty: "Easy" },
                { name: "Flatten a Multilevel Doubly Linked List", link: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/", difficulty: "Medium" },
                { name: "Add Two Numbers", link: "https://leetcode.com/problems/add-two-numbers/", difficulty: "Medium" },
                { name: "Copy List with Random Pointer", link: "https://leetcode.com/problems/copy-list-with-random-pointer/", difficulty: "Medium" },
                { name: "Rotate List", link: "https://leetcode.com/problems/rotate-list/", difficulty: "Medium" },
                { name: "Reverse Nodes in k-Group", link: "https://leetcode.com/problems/reverse-nodes-in-k-group/", difficulty: "Hard" },
                { name: "Merge k Sorted Lists", link: "https://leetcode.com/problems/merge-k-sorted-lists/", difficulty: "Hard" },
                { name: "Sort List", link: "https://leetcode.com/problems/sort-list/", difficulty: "Medium" },
                { name: "Remove Duplicates from Sorted List", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/", difficulty: "Easy" },
                { name: "Remove Duplicates from Sorted List II", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/", difficulty: "Medium" },
                { name: "Split Linked List in Parts", link: "https://leetcode.com/problems/split-linked-list-in-parts/", difficulty: "Medium" },
                { name: "Convert Sorted List to Binary Search Tree", link: "https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/", difficulty: "Medium" },
                { name: "LRU Cache", link: "https://leetcode.com/problems/lru-cache/", difficulty: "Hard" }
            ],
        },
        {
            topic: "Recursion and Backtracking",
            pattern: "Exploring All Possibilities and Optimized Backtracking",
            questions: [
                { name: "Subsets", link: "https://leetcode.com/problems/subsets/", difficulty: "Medium" },
                { name: "Combination Sum", link: "https://leetcode.com/problems/combination-sum/", difficulty: "Medium" },
                { name: "Combination Sum II", link: "https://leetcode.com/problems/combination-sum-ii/", difficulty: "Medium" },
                { name: "Permutations", link: "https://leetcode.com/problems/permutations/", difficulty: "Medium" },
                { name: "Permutations II", link: "https://leetcode.com/problems/permutations-ii/", difficulty: "Medium" },
                { name: "Letter Combinations of a Phone Number", link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/", difficulty: "Medium" },
                { name: "Generate Parentheses", link: "https://leetcode.com/problems/generate-parentheses/", difficulty: "Medium" },
                { name: "Word Search", link: "https://leetcode.com/problems/word-search/", difficulty: "Medium" },
                { name: "N-Queens", link: "https://leetcode.com/problems/n-queens/", difficulty: "Hard" },
                { name: "Sudoku Solver", link: "https://leetcode.com/problems/sudoku-solver/", difficulty: "Hard" },
                { name: "Restore IP Addresses", link: "https://leetcode.com/problems/restore-ip-addresses/", difficulty: "Medium" },
                { name: "Word Break II", link: "https://leetcode.com/problems/word-break-ii/", difficulty: "Hard" },
                { name: "Matchsticks to Square", link: "https://leetcode.com/problems/matchsticks-to-square/", difficulty: "Medium" },
                { name: "Rat in a Maze", link: "https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1", difficulty: "Medium" },
                { name: "All Paths From Source to Target", link: "https://leetcode.com/problems/all-paths-from-source-to-target/", difficulty: "Medium" },
                { name: "Palindrome Partitioning", link: "https://leetcode.com/problems/palindrome-partitioning/", difficulty: "Medium" },
                { name: "Find Kth Permutation", link: "https://leetcode.com/problems/permutation-sequence/", difficulty: "Hard" },
                { name: "Binary Tree Paths", link: "https://leetcode.com/problems/binary-tree-paths/", difficulty: "Easy" },
                { name: "Count of Subsets with Given Sum", link: "https://practice.geeksforgeeks.org/problems/perfect-sum-problem5633/1", difficulty: "Medium" },
                { name: "Tiling Problem", link: "https://practice.geeksforgeeks.org/problems/ways-to-tile-a-floor5836/1", difficulty: "Medium" }
            ],
        },
        {
            topic: "Stacks and Queues",
            pattern: "Data Structure Operations and Applications",
            questions: [
                { name: "Valid Parentheses", link: "https://leetcode.com/problems/valid-parentheses/", difficulty: "Easy" },
                { name: "Min Stack", link: "https://leetcode.com/problems/min-stack/", difficulty: "Medium" },
                { name: "Next Greater Element I", link: "https://leetcode.com/problems/next-greater-element-i/", difficulty: "Easy" },
                { name: "Next Greater Element II", link: "https://leetcode.com/problems/next-greater-element-ii/", difficulty: "Medium" },
                { name: "Daily Temperatures", link: "https://leetcode.com/problems/daily-temperatures/", difficulty: "Medium" },
                { name: "Implement Queue using Stacks", link: "https://leetcode.com/problems/implement-queue-using-stacks/", difficulty: "Easy" },
                { name: "Implement Stack using Queues", link: "https://leetcode.com/problems/implement-stack-using-queues/", difficulty: "Easy" },
                { name: "Evaluate Reverse Polish Notation", link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/", difficulty: "Medium" },
                { name: "Sliding Window Maximum", link: "https://leetcode.com/problems/sliding-window-maximum/", difficulty: "Hard" },
                { name: "Basic Calculator", link: "https://leetcode.com/problems/basic-calculator/", difficulty: "Hard" },
                { name: "Basic Calculator II", link: "https://leetcode.com/problems/basic-calculator-ii/", difficulty: "Medium" },
                { name: "Decode String", link: "https://leetcode.com/problems/decode-string/", difficulty: "Medium" },
                { name: "Longest Valid Parentheses", link: "https://leetcode.com/problems/longest-valid-parentheses/", difficulty: "Hard" },
                { name: "Rotting Oranges", link: "https://leetcode.com/problems/rotting-oranges/", difficulty: "Medium" },
                { name: "Number of Islands", link: "https://leetcode.com/problems/number-of-islands/", difficulty: "Medium" },
                { name: "Design Circular Queue", link: "https://leetcode.com/problems/design-circular-queue/", difficulty: "Medium" },
                { name: "Design a Stack with Increment Operation", link: "https://leetcode.com/problems/design-a-stack-with-increment-operation/", difficulty: "Medium" },
                { name: "Remove K Digits", link: "https://leetcode.com/problems/remove-k-digits/", difficulty: "Medium" },
                { name: "Asteroid Collision", link: "https://leetcode.com/problems/asteroid-collision/", difficulty: "Medium" },
                { name: "The Celebrity Problem", link: "https://practice.geeksforgeeks.org/problems/the-celebrity-problem/1", difficulty: "Medium" }
            ]
        },
        {
            topic: "Heaps",
            pattern: "Priority Queue and Heap Applications",
            questions: [
                { name: "Kth Largest Element in an Array", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/", difficulty: "Medium" },
                { name: "Top K Frequent Elements", link: "https://leetcode.com/problems/top-k-frequent-elements/", difficulty: "Medium" },
                { name: "Sort Characters By Frequency", link: "https://leetcode.com/problems/sort-characters-by-frequency/", difficulty: "Medium" },
                { name: "Merge k Sorted Lists", link: "https://leetcode.com/problems/merge-k-sorted-lists/", difficulty: "Hard" },
                { name: "K Closest Points to Origin", link: "https://leetcode.com/problems/k-closest-points-to-origin/", difficulty: "Medium" },
                { name: "Find Median from Data Stream", link: "https://leetcode.com/problems/find-median-from-data-stream/", difficulty: "Hard" },
                { name: "Smallest Range Covering Elements from K Lists", link: "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/", difficulty: "Hard" },
                { name: "Reorganize String", link: "https://leetcode.com/problems/reorganize-string/", difficulty: "Medium" },
                { name: "Task Scheduler", link: "https://leetcode.com/problems/task-scheduler/", difficulty: "Medium" },
                { name: "Design Twitter", link: "https://leetcode.com/problems/design-twitter/", difficulty: "Medium" },
                { name: "Min Cost to Connect All Points", link: "https://leetcode.com/problems/min-cost-to-connect-all-points/", difficulty: "Medium" },
                { name: "Maximal Score After Applying K Operations", link: "https://leetcode.com/problems/maximal-score-after-applying-k-operations/", difficulty: "Medium" },
                { name: "Minimum Cost to Connect Sticks", link: "https://leetcode.com/problems/minimum-cost-to-connect-sticks/", difficulty: "Medium" },
                { name: "Last Stone Weight", link: "https://leetcode.com/problems/last-stone-weight/", difficulty: "Easy" },
                { name: "Reduce Array Size to The Half", link: "https://leetcode.com/problems/reduce-array-size-to-the-half/", difficulty: "Medium" },
                { name: "Maximum Product of Two Elements in an Array", link: "https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/", difficulty: "Easy" },
                { name: "The Skyline Problem", link: "https://leetcode.com/problems/the-skyline-problem/", difficulty: "Hard" },
                { name: "Furthest Building You Can Reach", link: "https://leetcode.com/problems/furthest-building-you-can-reach/", difficulty: "Medium" },
                { name: "Meeting Rooms II", link: "https://leetcode.com/problems/meeting-rooms-ii/", difficulty: "Medium" },
                { name: "Minimum Number of Refueling Stops", link: "https://leetcode.com/problems/minimum-number-of-refueling-stops/", difficulty: "Hard" }
            ]
        },
        {
            topic: "Binary Trees",
            pattern: "Tree Traversals and Applications",
            questions: [
                { name: "Binary Tree Inorder Traversal", link: "https://leetcode.com/problems/binary-tree-inorder-traversal/", difficulty: "Easy" },
                { name: "Binary Tree Preorder Traversal", link: "https://leetcode.com/problems/binary-tree-preorder-traversal/", difficulty: "Easy" },
                { name: "Binary Tree Postorder Traversal", link: "https://leetcode.com/problems/binary-tree-postorder-traversal/", difficulty: "Easy" },
                { name: "Binary Tree Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/", difficulty: "Medium" },
                { name: "Invert Binary Tree", link: "https://leetcode.com/problems/invert-binary-tree/", difficulty: "Easy" },
                { name: "Maximum Depth of Binary Tree", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", difficulty: "Easy" },
                { name: "Diameter of Binary Tree", link: "https://leetcode.com/problems/diameter-of-binary-tree/", difficulty: "Easy" },
                { name: "Path Sum", link: "https://leetcode.com/problems/path-sum/", difficulty: "Easy" },
                { name: "Binary Tree Paths", link: "https://leetcode.com/problems/binary-tree-paths/", difficulty: "Easy" },
                { name: "Symmetric Tree", link: "https://leetcode.com/problems/symmetric-tree/", difficulty: "Easy" },
                { name: "Balanced Binary Tree", link: "https://leetcode.com/problems/balanced-binary-tree/", difficulty: "Easy" },
                { name: "Lowest Common Ancestor of a Binary Tree", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", difficulty: "Medium" },
                { name: "Serialize and Deserialize Binary Tree", link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", difficulty: "Hard" },
                { name: "Flatten Binary Tree to Linked List", link: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/", difficulty: "Medium" },
                { name: "Populating Next Right Pointers in Each Node", link: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/", difficulty: "Medium" },
                { name: "Construct Binary Tree from Preorder and Inorder Traversal", link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/", difficulty: "Medium" },
                { name: "Construct Binary Tree from Inorder and Postorder Traversal", link: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/", difficulty: "Medium" },
                { name: "Recover Binary Search Tree", link: "https://leetcode.com/problems/recover-binary-search-tree/", difficulty: "Hard" },
                { name: "Binary Tree Zigzag Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/", difficulty: "Medium" },
                { name: "Vertical Order Traversal of a Binary Tree", link: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/", difficulty: "Hard" }
            ]
        },
        {
            topic: "Binary Trees",
            pattern: "Tree Traversals and Applications",
            questions: [
                { name: "Binary Tree Inorder Traversal", link: "https://leetcode.com/problems/binary-tree-inorder-traversal/", difficulty: "Easy" },
                { name: "Binary Tree Preorder Traversal", link: "https://leetcode.com/problems/binary-tree-preorder-traversal/", difficulty: "Easy" },
                { name: "Binary Tree Postorder Traversal", link: "https://leetcode.com/problems/binary-tree-postorder-traversal/", difficulty: "Easy" },
                { name: "Binary Tree Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/", difficulty: "Medium" },
                { name: "Invert Binary Tree", link: "https://leetcode.com/problems/invert-binary-tree/", difficulty: "Easy" },
                { name: "Maximum Depth of Binary Tree", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", difficulty: "Easy" },
                { name: "Diameter of Binary Tree", link: "https://leetcode.com/problems/diameter-of-binary-tree/", difficulty: "Easy" },
                { name: "Path Sum", link: "https://leetcode.com/problems/path-sum/", difficulty: "Easy" },
                { name: "Binary Tree Paths", link: "https://leetcode.com/problems/binary-tree-paths/", difficulty: "Easy" },
                { name: "Symmetric Tree", link: "https://leetcode.com/problems/symmetric-tree/", difficulty: "Easy" },
                { name: "Balanced Binary Tree", link: "https://leetcode.com/problems/balanced-binary-tree/", difficulty: "Easy" },
                { name: "Lowest Common Ancestor of a Binary Tree", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", difficulty: "Medium" },
                { name: "Serialize and Deserialize Binary Tree", link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", difficulty: "Hard" },
                { name: "Flatten Binary Tree to Linked List", link: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/", difficulty: "Medium" },
                { name: "Populating Next Right Pointers in Each Node", link: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/", difficulty: "Medium" },
                { name: "Construct Binary Tree from Preorder and Inorder Traversal", link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/", difficulty: "Medium" },
                { name: "Construct Binary Tree from Inorder and Postorder Traversal", link: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/", difficulty: "Medium" },
                { name: "Recover Binary Search Tree", link: "https://leetcode.com/problems/recover-binary-search-tree/", difficulty: "Hard" },
                { name: "Binary Tree Zigzag Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/", difficulty: "Medium" },
                { name: "Vertical Order Traversal of a Binary Tree", link: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/", difficulty: "Hard" }
            ]
        },
        {
            topic: "Graphs",
            pattern: "Traversal, Shortest Path, and Applications",
            questions: [
                { name: "Graph Valid Tree", link: "https://leetcode.com/problems/graph-valid-tree/", difficulty: "Medium" },
                { name: "Number of Connected Components in an Undirected Graph", link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/", difficulty: "Medium" },
                { name: "Clone Graph", link: "https://leetcode.com/problems/clone-graph/", difficulty: "Medium" },
                { name: "Course Schedule", link: "https://leetcode.com/problems/course-schedule/", difficulty: "Medium" },
                { name: "Course Schedule II", link: "https://leetcode.com/problems/course-schedule-ii/", difficulty: "Medium" },
                { name: "Shortest Path in Binary Matrix", link: "https://leetcode.com/problems/shortest-path-in-binary-matrix/", difficulty: "Medium" },
                { name: "Rotting Oranges", link: "https://leetcode.com/problems/rotting-oranges/", difficulty: "Medium" },
                { name: "Find the Town Judge", link: "https://leetcode.com/problems/find-the-town-judge/", difficulty: "Easy" },
                { name: "Number of Islands", link: "https://leetcode.com/problems/number-of-islands/", difficulty: "Medium" },
                { name: "Pacific Atlantic Water Flow", link: "https://leetcode.com/problems/pacific-atlantic-water-flow/", difficulty: "Medium" },
                { name: "Surrounded Regions", link: "https://leetcode.com/problems/surrounded-regions/", difficulty: "Medium" },
                { name: "Word Ladder", link: "https://leetcode.com/problems/word-ladder/", difficulty: "Hard" },
                { name: "Word Ladder II", link: "https://leetcode.com/problems/word-ladder-ii/", difficulty: "Hard" },
                { name: "Minimum Genetic Mutation", link: "https://leetcode.com/problems/minimum-genetic-mutation/", difficulty: "Medium" },
                { name: "All Paths From Source to Target", link: "https://leetcode.com/problems/all-paths-from-source-to-target/", difficulty: "Medium" },
                { name: "Reconstruct Itinerary", link: "https://leetcode.com/problems/reconstruct-itinerary/", difficulty: "Hard" },
                { name: "Cheapest Flights Within K Stops", link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/", difficulty: "Medium" },
                { name: "Network Delay Time", link: "https://leetcode.com/problems/network-delay-time/", difficulty: "Medium" },
                { name: "Find if Path Exists in Graph", link: "https://leetcode.com/problems/find-if-path-exists-in-graph/", difficulty: "Easy" },
                { name: "Critical Connections in a Network", link: "https://leetcode.com/problems/critical-connections-in-a-network/", difficulty: "Hard" },
                { name: "Redundant Connection", link: "https://leetcode.com/problems/redundant-connection/", difficulty: "Medium" },
                { name: "Keys and Rooms", link: "https://leetcode.com/problems/keys-and-rooms/", difficulty: "Medium" },
                { name: "Evaluate Division", link: "https://leetcode.com/problems/evaluate-division/", difficulty: "Medium" },
                { name: "Is Graph Bipartite?", link: "https://leetcode.com/problems/is-graph-bipartite/", difficulty: "Medium" },
                { name: "Longest Path With Different Adjacent Characters", link: "https://leetcode.com/problems/longest-path-with-different-adjacent-characters/", difficulty: "Hard" },
                { name: "Largest Component Size by Common Factor", link: "https://leetcode.com/problems/largest-component-size-by-common-factor/", difficulty: "Hard" },
                { name: "The Time When the Network Becomes Idle", link: "https://leetcode.com/problems/the-time-when-the-network-becomes-idle/", difficulty: "Medium" },
                { name: "Shortest Path Visiting All Nodes", link: "https://leetcode.com/problems/shortest-path-visiting-all-nodes/", difficulty: "Hard" },
                { name: "Alien Dictionary", link: "https://leetcode.com/problems/alien-dictionary/", difficulty: "Hard" },
                { name: "Graph Coloring Problem", link: "https://practice.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1", difficulty: "Medium" }
            ]
        },
        {
            topic: "Dynamic Programming",
            pattern: "Subproblems, Memoization, and Optimization",
            questions: [
                { name: "Climbing Stairs", link: "https://leetcode.com/problems/climbing-stairs/", difficulty: "Easy" },
                { name: "House Robber", link: "https://leetcode.com/problems/house-robber/", difficulty: "Medium" },
                { name: "House Robber II", link: "https://leetcode.com/problems/house-robber-ii/", difficulty: "Medium" },
                { name: "Unique Paths", link: "https://leetcode.com/problems/unique-paths/", difficulty: "Medium" },
                { name: "Unique Paths II", link: "https://leetcode.com/problems/unique-paths-ii/", difficulty: "Medium" },
                { name: "Longest Increasing Subsequence", link: "https://leetcode.com/problems/longest-increasing-subsequence/", difficulty: "Medium" },
                { name: "Longest Common Subsequence", link: "https://leetcode.com/problems/longest-common-subsequence/", difficulty: "Medium" },
                { name: "Edit Distance", link: "https://leetcode.com/problems/edit-distance/", difficulty: "Hard" },
                { name: "Maximum Subarray", link: "https://leetcode.com/problems/maximum-subarray/", difficulty: "Medium" },
                { name: "Partition Equal Subset Sum", link: "https://leetcode.com/problems/partition-equal-subset-sum/", difficulty: "Medium" },
                { name: "Jump Game", link: "https://leetcode.com/problems/jump-game/", difficulty: "Medium" },
                { name: "Jump Game II", link: "https://leetcode.com/problems/jump-game-ii/", difficulty: "Medium" },
                { name: "Coin Change", link: "https://leetcode.com/problems/coin-change/", difficulty: "Medium" },
                { name: "Minimum Path Sum", link: "https://leetcode.com/problems/minimum-path-sum/", difficulty: "Medium" },
                { name: "Decode Ways", link: "https://leetcode.com/problems/decode-ways/", difficulty: "Medium" },
                { name: "Best Time to Buy and Sell Stock", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", difficulty: "Easy" },
                { name: "Best Time to Buy and Sell Stock II", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/", difficulty: "Medium" },
                { name: "Best Time to Buy and Sell Stock III", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/", difficulty: "Hard" },
                { name: "Burst Balloons", link: "https://leetcode.com/problems/burst-balloons/", difficulty: "Hard" },
                { name: "Word Break", link: "https://leetcode.com/problems/word-break/", difficulty: "Medium" },
                { name: "Word Break II", link: "https://leetcode.com/problems/word-break-ii/", difficulty: "Hard" },
                { name: "Longest Palindromic Subsequence", link: "https://leetcode.com/problems/longest-palindromic-subsequence/", difficulty: "Medium" },
                { name: "Palindrome Partitioning II", link: "https://leetcode.com/problems/palindrome-partitioning-ii/", difficulty: "Hard" },
                { name: "Wildcard Matching", link: "https://leetcode.com/problems/wildcard-matching/", difficulty: "Hard" },
                { name: "Regular Expression Matching", link: "https://leetcode.com/problems/regular-expression-matching/", difficulty: "Hard" },
                { name: "Triangle", link: "https://leetcode.com/problems/triangle/", difficulty: "Medium" },
                { name: "Integer Break", link: "https://leetcode.com/problems/integer-break/", difficulty: "Medium" },
                { name: "Perfect Squares", link: "https://leetcode.com/problems/perfect-squares/", difficulty: "Medium" },
                { name: "Interleaving String", link: "https://leetcode.com/problems/interleaving-string/", difficulty: "Hard" },
                { name: "Stone Game", link: "https://leetcode.com/problems/stone-game/", difficulty: "Medium" }
            ]
        }
                
          
    ];

    const [problems, setProblems] = useState(() => {
        const saved = localStorage.getItem("dsaProgress");
        return saved
            ? JSON.parse(saved)
            : initialProblems.map(topic => ({
                  ...topic,
                  questions: topic.questions.map(q => ({ ...q, completed: false })),
              }));
    });

    useEffect(() => {
        localStorage.setItem("dsaProgress", JSON.stringify(problems));
    }, [problems]);

    const handleCheckboxChange = (topicIndex, questionIndex) => {
        const updatedProblems = [...problems];
        updatedProblems[topicIndex].questions[questionIndex].completed =
            !updatedProblems[topicIndex].questions[questionIndex].completed;
        setProblems(updatedProblems);
    };

    const getDifficultyColor = difficulty => {
        switch (difficulty) {
            case "Easy":
                return "green";
            case "Medium":
                return "orange";
            case "Hard":
                return "red";
            default:
                return "black";
        }
    };

    return (
        <div className="main-container">
            <div className="web-title">DSA SHEET</div>
            <div className="web-table-container">
                {problems.map((topic, topicIndex) => (
                    <div key={topicIndex} className="topic-container">
                        <h2 className="text-2xl p-7 font-bold">{topic.topic} - {topic.pattern}</h2>
                        <table className="web-table">
                            <thead className="table-head">
                                <tr>
                                    <td>Status</td>
                                    <td>Question</td>
                                    <td>Difficulty</td>
                                    <td>Link</td>
                                </tr>
                            </thead>
                            <tbody>
                                {topic.questions.map((question, questionIndex) => (
                                    <tr key={questionIndex}>
                                        <td>
                                            <input
                                                type="checkbox"
                                                checked={question.completed}
                                                onChange={() => handleCheckboxChange(topicIndex, questionIndex)}
                                            />
                                        </td>
                                        <td>{question.name}</td>
                                        <td style={{ color: getDifficultyColor(question.difficulty) }}>
                                            {question.difficulty}
                                        </td>
                                        <td>
                                            <a className="text-cyan-600"
                                                href={question.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                LeetCode
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DsaRoadmap;