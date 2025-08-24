let maxProfit = function (prices) {
    let min = prices[0];
    let maximumProfit = 0;

    for(let i = 1;i<prices.length;i++) {
        if(prices[i] - min > maximumProfit) maximumProfit = prices[i] -min;

        if(prices[i]<min) min = prices[i]
    }
    return maximumProfit;
}