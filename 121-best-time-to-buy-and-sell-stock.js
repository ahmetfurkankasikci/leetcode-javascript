var maxProfit = function (prices) {
    var buy = prices[0];
    var profit = 0;
    for (var i = 1; i < prices.length; i++) {
        if (buy > prices[i]) {
            buy = prices[i];
            continue;
        }
        profit = Math.max(profit, prices[i] - buy);
    }
    return profit;
};