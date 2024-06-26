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

The worst case time complexity of this implementation is $\Theta (n^2)$

Reasoning: In a worst case, the quicksort pivot that is chosen is the worst, which gives quicksortIterative() a time complexity of $\Theta(n)$ as it will need to compare against the entire array. Regardless of case, the time complexity of the part() function is $\Theta(n)$ because it will need to go thorugh the entire array in order to partition it.
