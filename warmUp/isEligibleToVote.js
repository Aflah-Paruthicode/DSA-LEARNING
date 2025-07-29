const peoples = [
    { name : 'muhsin', age : 25 },
    { name : 'anees', age : 13 },
    { name : 'fawas', age : 20 },
]

let i = 0
while(i < peoples.length) {

    if (peoples[i].age > 17) {
        console.log(peoples[i].name+' is eligible for vote');
    } else {
        console.log(peoples[i].name+' is not eligible');
    }

    i++;
};
