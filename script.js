function mincost(arr) {
    if (arr.length === 0) return 0;
    arr.sort((a, b) => a - b);
    let minCost = 0;
    while (arr.length > 1) {
        let first = arr.shift();
        let second = arr.shift();
        let cost = first + second;
        minCost += cost;
        arr.push(cost);
        arr.sort((a, b) => a - b);
    }
    return minCost;
}
module.exports = mincost;
