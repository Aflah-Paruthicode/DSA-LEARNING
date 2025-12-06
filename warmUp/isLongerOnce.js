var checkZeroOnes = function(s) {

    let oneSum =  Math.max(...s.split('0').map(s => s.length));
    let zeroSum = Math.max(...s.split('1').map(s => s.length));
    return oneSum > zeroSum;
    };