let number = 5

for(let i = 0;i < number; i++) {
    let row = '';
    for(let j = 0;j <i+1 ; j++) {
        row += ' ★';
    }
    console.log(row);
}

//  ★
//  ★ ★
//  ★ ★ ★
//  ★ ★ ★ ★
//  ★ ★ ★ ★ ★
