let number = 5;

for(let i = 1;i<=number;i++) {
    let row = '';
    
    for(let j = 0 ; j<number-i;j++) {
        row+= '  ';
    }
    
    for(let j = 0;j<i;j++) {
        row+= ' *';
    }
    console.log(row);
}

//          *
//        * *
//      * * *
//    * * * *
//  * * * * *
