// used examples from geeksforgeeks
// https://www.geeksforgeeks.org/iterative-quick-sort/

function quicksort(array) {
    if (array.length > 1)
    {
        quicksortIterative(array, 0, array.length - 1);
    }
    return array;
}

function quicksortIterative(array, low, high)
{
    var stack = new Array((high - low) + 1);
    var top = -1;

    stack.fill(0);
    stack[++top] = low;
    stack[++top] = high;

    while (top >= 0)
    {
        high = stack[top--];
        low = stack[top--];

        var p = part(array, low, high);

        if (p - 1 > low)
        {
            stack[++top] = low;
            stack[++top] = p - 1;
        }

        if (p + 1 < high)
        {
            stack[++top] = p + 1;
            stack[++top] = high;
        }
    }
}

function part(array, low, high)
{
    var temp;
    var pivot = array[high];
    var i = low - 1;

    for (var k = low; k <= high - 1; k++)
    {
        if (array[k] <= pivot)
        {
            i++;
            temp = array[i];
            array[i] = array[k];
            array[k] = temp;
        }
    }

    temp = array[i + 1];
    array[i + 1] = array[high];
    array[high] = temp;

    return i + 1;
}