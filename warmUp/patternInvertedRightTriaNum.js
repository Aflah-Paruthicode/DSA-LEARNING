let num = 5;

for(let i = 0;i<num;i++) {
    let row = '';
    for(let j = 0;j<num-i;j++) {
        row+= ` ${j+1}`
    }
    console.log(row);
}

//  1 2 3 4 5
//  1 2 3 4
//  1 2 3
//  1 2
//  1