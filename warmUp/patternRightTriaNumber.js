let number = 5

for(let i = 0;i < number; i++) {
    let row = '';
    for(let j = 1;j <i+2 ; j++) {
        row += ` ${j}`;
    }
    console.log(row);
}

//  1
//  1 2
//  1 2 3
//  1 2 3 4
//  1 2 3 4 5