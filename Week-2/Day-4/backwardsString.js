function backwardString(str) {
    if (str.length === 0) {
        return;
    }
    
    console.log(str[str.length - 1]);
    
    backwardString(str.slice(0, -1));
}
