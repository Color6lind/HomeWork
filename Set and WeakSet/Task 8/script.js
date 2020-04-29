let set = new Set([1,2,3,3,4,6]);

let sum = 0;
for (let key of set) {
	sum += key
}
console.log(sum)