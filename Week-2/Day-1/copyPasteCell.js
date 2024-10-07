const accounts = [
    ["client", "invoice", "discount", "payable", "paid"],
    ["ace footwear", 10200, 0.1, 9180, false],
    ["bling.com", 4000, 0.05, null, true],
    ["chasm", 20000, 0.15, 17000, true],
];
  
const copyPasteCell = (sheet, i, j, k, l) => {
    sheet[k][l] = sheet[i][j];
    return sheet;
}
