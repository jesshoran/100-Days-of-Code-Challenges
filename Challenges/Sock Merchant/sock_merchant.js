// Hacker Rank Sock Merchant

const sockMerchant = (n, arr) => {
    let socks = {};
    let pairs = 0;
    for (x of arr) {
        socks[x] = socks[x] + 1 || 1
        if (socks[x] % 2 === 0) {
            pairs += 1;
        }
    }
    return pairs
}


console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))
