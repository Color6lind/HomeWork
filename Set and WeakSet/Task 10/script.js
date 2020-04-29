let array = [1, 1, 2, 3, 7, 4, 4, 4, 4, 2, 9, 5];

function uniq(arr) {
	return [...new Set(arr)];
}
console.log(array);
console.log(uniq(array));