import SudokuBoard from "../src/sudoku";

describe('SudokuBoard', () => {
    test('should create a sudokuBoard object with 27 arrays', () => {
        const sudokuBoard = new SudokuBoard([],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]);
        expect(sudokuBoard.row1).toEqual([]);
        expect(sudokuBoard.row2).toEqual([]);
        expect(sudokuBoard.row3).toEqual([]);
        expect(sudokuBoard.row4).toEqual([]);
        expect(sudokuBoard.row5).toEqual([]);
        expect(sudokuBoard.row6).toEqual([]);
        expect(sudokuBoard.row7).toEqual([]);
        expect(sudokuBoard.row8).toEqual([]);
        expect(sudokuBoard.row9).toEqual([]);
        expect(sudokuBoard.col1).toEqual([]);
        expect(sudokuBoard.col2).toEqual([]);
        expect(sudokuBoard.col3).toEqual([]);
        expect(sudokuBoard.col4).toEqual([]);
        expect(sudokuBoard.col5).toEqual([]);
        expect(sudokuBoard.col6).toEqual([]);
        expect(sudokuBoard.col7).toEqual([]);
        expect(sudokuBoard.col8).toEqual([]);
        expect(sudokuBoard.col9).toEqual([]);
        expect(sudokuBoard.box1).toEqual([]);
        expect(sudokuBoard.box2).toEqual([]);
        expect(sudokuBoard.box3).toEqual([]);
        expect(sudokuBoard.box4).toEqual([]);
        expect(sudokuBoard.box5).toEqual([]);
        expect(sudokuBoard.box6).toEqual([]);
        expect(sudokuBoard.box7).toEqual([]);
        expect(sudokuBoard.box8).toEqual([]);
        expect(sudokuBoard.box9).toEqual([]);
    });
});

describe('SudokuBoard.prototype.winCheck', () => {
    let reusableSudoku;
    let reusableTestArray;
    
    beforeEach(() => {
        reusableSudoku = new SudokuBoard([4, 3, 5, 2, 6, 9, 7, 8, 1,], [6, 8, 2, 5, 7, 1, 4, 9, 3,], [1, 9, 7, 8, 3, 4, 5, 6, 2], [8, 2, 6, 1, 9, 5, 3, 4, 7], [3, 7, 4, 6, 8, 2, 9, 1, 5], [9, 5, 1, 7, 4, 3, 6, 2, 8], [5, 1, 9, 3, 2, 6, 8, 7, 4], [2, 4, 8, 9, 5, 7, 1, 3, 6], [7, 6, 3, 4, 1, 8, 2, 5, 9], [4, 6, 1, 8, 3, 9, 5, 2, 7], [3, 8, 9, 2, 7, 5, 1, 4, 6], [5, 2, 7, 6, 4, 1, 9, 8, 3], [2, 5, 8, 1, 6, 7, 3, 9, 4], [6, 7, 3, 9, 8, 4, 2, 5, 1], [9, 1, 4, 5, 2, 3, 6, 7, 8], [7, 4, 5, 3, 9, 6, 8, 1, 2], [8, 9, 6, 4, 1, 2, 7, 3, 5], [1, 3, 2, 7, 5, 8, 4, 6, 9], [4, 3, 5, 6, 8, 2, 1, 9, 7], [2, 6, 9, 5, 7, 1, 8, 3, 4,], [7, 8, 1, 4, 9, 3, 5, 6, 2], [8, 2, 6, 3, 7, 4, 9, 5, 1], [1, 9, 5, 6, 8, 2, 7, 4, 3], [3, 4, 7, 9, 1, 5, 6, 2, 8], [5, 1, 9, 2, 4, 8, 7, 6, 3], [3, 2, 6, 9, 5, 7, 4, 1, 8], [8, 7, 4, 1, 3, 6, 2, 5, 9]);
        reusableTestArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    });

    test('should correctly determine if sudokuBoard.row1 contains each intiger from 1 to 9', () => {
        let result = reusableSudoku.winCheck();
        expect(result).toEqual(true);
    })
})