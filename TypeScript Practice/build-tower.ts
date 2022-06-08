// PROBLEM

// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

// SOLUTION

// build i'th floor for a tower of size n floors
function buildFloor(i: number, n: number): string {
    let middleSection = "*".repeat(2 * i - 1);
    let sideSection = " ".repeat(n - i);
    let floor = sideSection + middleSection + sideSection;
    return floor;
}
export const towerBuilder = (nFloors: number): string[] => {
    let result = [];
    for (let i = 1; i <= nFloors; i++) {
        result.push(buildFloor(i, nFloors));
    }
    return result;
};
