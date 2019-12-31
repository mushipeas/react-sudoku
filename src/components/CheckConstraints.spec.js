import CheckConstraints from './CheckConstraints';

describe("CheckConstraints.hasDuplicates", () => {

    const uniqueList = [
        1, 2, 3, 4, 5, 6, 7, 8, 9
    ];

    const uniqueList_w_empty = [
        1, 2, "", "", "", 6, 7, 8, 9
    ];

    const duplicateList = [
        1, 1, 2, 3, 4, 5, 6, 7, 8
    ];

    let checkConstraints;
    
    beforeEach(() => {
        checkConstraints = new CheckConstraints;
    })

    it("should return false for a unique list", () => {
        expect(checkConstraints.hasDuplicates(uniqueList)).toBeFalsy()
    })

    it("should return false for a unique list with multipe empties", () => {
        expect(checkConstraints.hasDuplicates(uniqueList_w_empty)).toBeFalsy()
    })

    it("should return true for a list with duplicates", () => {
        expect(checkConstraints.hasDuplicates(duplicateList)).toBeTruthy()
    })

})


describe("CheckConstraints.grid", () => {

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

    const unfinishedGrid_w_dupRow = [
        2, "", 9, "", 8, "", 5, "", "",
        "", "", 4, 7, 6, 9, "", "", "",
        3, "", "", "", 1, 2, "", 4, "",
        "", "", 3, 6, "", "", "", 5, 4,
        "", 4, "", "", "", "", "", 8, "",
        8, 5, 6, "", "", 7, 6, "", "", //on this line, (6)
        "", 2, "", 8, 7, "", "", "", 9,
        "", "", "", 1, 9, 6, 2, "", "",
        "", "", 5, "", 4, "", 1, "", 8
    ];

    const unfinishedGrid_w_dupCol = [
        2, "", 9, "", 8, "", 5, "", "",
        "", "", 4, 7, 6, 9, "", "", "",
        3, "", "", "", 1, 2, "", 4, "",
        "", "", 3, 6, "", "", "", 5, 4,
        2, 4, "", "", "", "", "", 8, "", //on this line, (2)
        8, 5, "", "", "", 7, 6, "", "",
        "", 2, "", 8, 7, "", "", "", 9,
        "", "", "", 1, 9, 6, 2, "", "",
        "", "", 5, "", 4, "", 1, "", 8
    ];

    const unfinishedGrid_w_dupSq = [
        2, "", 9, "", 8, "", 5, "", "",
        "", "", 4, 7, 6, 9, "", "", "",
        3, "", "", "", 1, 2, "", 4, "",
        "", "", 3, 6, "", "", "", 5, 4,
        "", 4, "", "", "", "", "", 8, 5, //on this line (5)
        8, 5, "", "", "", 7, 6, "", "",
        "", 2, "", 8, 7, "", "", "", 9,
        "", "", "", 1, 9, 6, 2, "", "",
        "", "", 5, "", 4, "", 1, "", 8
    ];

    let checkConstraints;
    beforeEach(() => {
        checkConstraints = new CheckConstraints;
    })

    it("should return true for an unfinished grid", () => {

        expect(checkConstraints.grid(unfinishedGrid)).toBeTruthy()
    })

    it("should return false for a grid with duplicate in Col", () => {

        expect(checkConstraints.grid(unfinishedGrid_w_dupCol)).toBeFalsy()
    })

    it("should return false for a grid with duplicate in Row", () => {

        expect(checkConstraints.grid(unfinishedGrid_w_dupRow)).toBeFalsy()
    })

    it("should return false for a grid with duplicate in Sq", () => {

        expect(checkConstraints.grid(unfinishedGrid_w_dupSq)).toBeFalsy()
    })

})
