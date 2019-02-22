import BruteSolver from './BruteSolver';

describe("Does an unfinished grid get completed correctly", () => {

    const unfinishedGrid = [
        [2, "", 9, "", 8, "", 5, "", ""],
        ["", "", 4, 7, 6, 9, "", "", ""],
        [3, "", "", "", 1, 2, "", 4, ""],
        ["", "", 3, 6, "", "", "", 5, 4],
        ["", 4, "", "", "", "", "", 8, ""],
        [8, 5, "", "", "", 7, 6, "", ""],
        ["", 2, "", 8, 7, "", "", "", 9],
        ["", "", "", 1, 9, 6, 2, "", ""],
        ["", "", 5, "", 4, "", 1, "", 8]
    ];

    const unsolvableGrid = [
        [2, "", 9, "", 8, "", 5, "", ""],
        ["", "", 4, 7, 6, 9, "", "", ""],
        [3, "", "", "", 1, 2, "", 4, ""],
        ["", "", 3, 6, "", "", "", 5, 4],
        ["", 4, "", "", "", "", "", 8, ""],
        [8, 5, "", "", "", 7, 6, "", ""],
        ["", 2, "", 8, 7, "", "", "", 9],
        ["", "", "", 1, 9, 6, 2, "", ""],
        ["", "", 5, "", 4, "", 1, "", 8]
    ];

    const solvedGrid = [
        [2, 6, 9, 3, 8, 4, 5, 1, 7],
        [5, 1, 4, 7, 6, 9, 8, 2, 3],
        [3, 8, 7, 5, 1, 2, 9, 4, 6],
        [1, 9, 3, 6, 2, 8, 7, 5, 4],
        [7, 4, 6, 9, 5, 1, 3, 8, 2],
        [8, 5, 2, 4, 3, 7, 6, 9, 1],
        [6, 2, 1, 8, 7, 5, 4, 3, 9],
        [4, 3, 8, 1, 9, 6, 2, 7, 5],
        [9, 7, 5, 2, 4, 3, 1, 6, 8],
    ];

    let bruteSolver;
    beforeEach(() => {
        bruteSolver = new BruteSolver;
    })

    it("should solve an unfinished grid", () => {

        expect(bruteSolver.solve(unfinishedGrid)).toEqual(solvedGrid)
    })

    it("should send false if the grid is unsolvable", () => {

        expect(bruteSolver.solve(unsolvableGrid)).toThrowError('unsolvable');
    })

})