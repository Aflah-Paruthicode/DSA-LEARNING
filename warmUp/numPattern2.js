let number = 5;

let swch = 1;
for(let i = 0;i<number;i++) {
    let row = '';
    for(let j = 0;j<=i;j++) {
        row += ` ${swch}`;
        swch = swch == 0 ? 1 : 0;
    }
    console.log(row);
}

//  1
//  0 1
//  0 1 0
//  1 0 1 0
//  1 0 1 0 1