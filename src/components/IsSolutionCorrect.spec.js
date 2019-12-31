import IsSolutionCorrect from './IsSolutionCorrect';

describe("IsSolutionCorrect.checkGrid", () => {

    const emptyGrid = [
        "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", ""
    ];
    
    const unfinishedGrid = [
        2, "", 9, "", 8, "", 5, "", "",
        "", "", 4, 7, 6, 9, "", "", "",
        3, "", "", "", 1, 2, "", 4, "",
        "", "", 3, 6, "", "", "", 5, 4,
        "", 4, "", "", "", "", "", 8, "",
        8, 5, "", "", "", 7, 6, "", "",
        "", 2, "", 8, 7, "", "", "", 9,
        "", "", "", 1, 9, 6, 2, "", "",
        "", "", 5, "", 4, "", 1, "", 8
    ];
    
    const incorrectGrid = [
        6, 2, 9, 3, 8, 4, 5, 1, 7,
        5, 1, 4, 7, 6, 9, 8, 2, 3,
        3, 8, 7, 5, 1, 2, 9, 4, 6,
        1, 9, 3, 6, 2, 8, 7, 5, 4,
        7, 4, 6, 9, 5, 1, 3, 8, 2,
        8, 5, 2, 4, 3, 7, 6, 9, 1,
        6, 2, 1, 8, 7, 5, 4, 3, 9,
        4, 3, 8, 1, 9, 6, 2, 7, 5,
        9, 7, 5, 2, 4, 3, 1, 6, 8
    ];
    
    const solvedGrid = [
        2, 6, 9, 3, 8, 4, 5, 1, 7,
        5, 1, 4, 7, 6, 9, 8, 2, 3,
        3, 8, 7, 5, 1, 2, 9, 4, 6,
        1, 9, 3, 6, 2, 8, 7, 5, 4,
        7, 4, 6, 9, 5, 1, 3, 8, 2,
        8, 5, 2, 4, 3, 7, 6, 9, 1,
        6, 2, 1, 8, 7, 5, 4, 3, 9,
        4, 3, 8, 1, 9, 6, 2, 7, 5,
        9, 7, 5, 2, 4, 3, 1, 6, 8
    ];
    
    
    let isSolutionCorrect;
    beforeEach(() => {
        isSolutionCorrect = new IsSolutionCorrect;
    })

    it("should return false for an empty grid", () => {
    
        expect(isSolutionCorrect.checkGrid(emptyGrid)).toBeFalsy()
    })
    
    it("should return false for an unfinished grid", () => {
    
        expect(isSolutionCorrect.checkGrid(unfinishedGrid)).toBeFalsy()
    })
    
    it("should return false for an incorrect grid", () => {
    
        expect(isSolutionCorrect.checkGrid(incorrectGrid)).toBeFalsy()
    })
    
    it("should return true for an solved grid", () => {
    
        expect(isSolutionCorrect.checkGrid(solvedGrid)).toBeTruthy()
    })
}) 

