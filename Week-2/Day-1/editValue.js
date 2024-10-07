const accounts = [
    ["client", "invoice", "discount", "payable", "paid"],
    ["ace footwear", 10200, 0.1, 9180, false],
    ["bling.com", 4000, 0.05, null, true],
    ["chasm", 20000, 0.15, 17000, true],
];
  
  // Write your code here
const editValue = (sheet, i, j, newVal) => {
    sheet[i][j] = newVal;
    return sheet;
}
