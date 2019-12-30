
export function clone_deep(grid) {
    let gridClone = [];
    for (let row of grid) {
        gridClone.push([...row]);
    }
    return gridClone;
}