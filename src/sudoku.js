export default function SudokuBoard(row1, row2, row3, row4, row5, row6, row7, row8, row9, row10, row11, row12, row13, row14, row15, row16, row17, row18, row19, row20, row21, row22, row23, row24, row25, row26, row27) {
    this.row1 = row1;
    this.row2 = row2;
    this.row3 = row3;
    this.row4 = row4;
    this.row5 = row5;
    this.row6 = row6;
    this.row7 = row7;
    this.row8 = row8;
    this.row9 = row9;
    this.row10 = row10;
    this.row11 = row11;
    this.row12 = row12;
    this.row13 = row13;
    this.row14 = row14;
    this.row15 = row15;
    this.row16 = row16;
    this.row17 = row17;
    this.row18 = row18;
    this.row19 = row19;
    this.row20 = row20;
    this.row21 = row21;
    this.row22 = row22;
    this.row23 = row23;
    this.row24 = row24;
    this.row25 = row25;
    this.row26 = row26;
    this.row27 = row27;
}

SudokuBoard.prototype.winCheck = function () {
    const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = true;

    for (let i = 0; i < 27; i++) {
        if (!testArray.every(j => this[`row${i + 1}`].includes(j))); {
            result = false;
            break;
        }
    }
    return result;
}

        // reusableTestArray.every(i => reusableSudoku.row1.includes(i));