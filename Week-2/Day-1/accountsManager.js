const accounts = [
    ["client", "invoice", "discount", "payable", "paid"],
    ["ace footwear", 10200, 0.1, 9180, false],
    ["bling.com", 4000, 0.05, null, true],
    ["chasm", 20000, 0.15, 17000, true],
];

const cutPasteCell = (sheet, i, j, k, l) => {
    sheet[k][l] = sheet[i][j];
    sheet[i][j] = null;
    return sheet;
}

const insertRow = (sheet, i, row) => {
    sheet.splice(i, 0, row);
    return sheet;
}

const copyPasteRow = (sheet, i, j) => {
    let newVal = [...sheet[i]];;
    sheet[j] = newVal;
    return sheet;
}

const reverseRows = (sheet) => {
    reversedSheet = sheet.reverse();
    return reversedSheet;
}
  