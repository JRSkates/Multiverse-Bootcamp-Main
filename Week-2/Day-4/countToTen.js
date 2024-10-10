const countToTen = (num) => {
    if (num > 10) {
        return;
    } 
 
    console.log(num);
 
    countToTen(num + 1);
}


countToTen(1); // Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
