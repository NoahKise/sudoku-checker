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