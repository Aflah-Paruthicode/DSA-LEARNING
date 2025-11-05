
function desendingOrderPrint(a) { 
    if(a == 0) return 0;
    console.log(a);
    return desendingOrderPrint(a-1)
}

desendingOrderPrint(5)