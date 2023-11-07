export default function SudokuBoard(row1, row2, row3, row4, row5, row6, row7, row8, row9, col1, col2, col3, col4, col5, col6, col7, col8, col9, box1, box2, box3, box4, box5, box6, box7, box8, box9){
    this.row1 = row1;
    this.row2 = row2;
    this.row3 = row3;
    this.row4 = row4;
    this.row5 = row5;
    this.row6 = row6;
    this.row7 = row7;
    this.row8 = row8;
    this.row9 = row9;
    this.col1 = col1;
    this.col2 = col2;
    this.col3 = col3;
    this.col4 = col4;
    this.col5 = col5;
    this.col6 = col6;
    this.col7 = col7;
    this.col8 = col8;
    this.col9 = col9;
    this.box1 = box1;
    this.box2 = box2;
    this.box3 = box3;
    this.box4 = box4;
    this.box5 = box5;
    this.box6 = box6;
    this.box7 = box7;
    this.box8 = box8;
    this.box9 = box9;
}

SudokuBoard.prototype.winCheck = function () {
    const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = testArray.every(i => this.row1.includes(i));
    return result;
}

        // reusableTestArray.every(i => reusableSudoku.row1.includes(i));