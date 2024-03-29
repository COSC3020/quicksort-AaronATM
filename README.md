[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/ZLHpg3lN)
# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make qicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

The worst case time complexity of this implementation is $\Theta(n^2)$

Reasoning: The time complexity of the quicksortIterative() function is $\Theta(n^2)$ as in the worst case, the pivot starting at array[high] is the largest number in the array and will need to be compared against the entire array once and again to be sorted properly. The part() function does not have a time complexity because it is solely based off of input from the quicksortIterative() function and does not change based on input size. Therefore the part() function is constant. Iterative quicksort should have the same time complexity as recursive quicksort.
