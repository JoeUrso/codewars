// PROBLEM

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// SOLUTION

export function xo(str: string) {
    let x: number = 0;
    let o: number = 0;

    for (let i: number = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === "x") {
            x++;
        }

        if (str[i].toLowerCase() === "o") {
            o++;
        }
    }

    return x === o;
}
