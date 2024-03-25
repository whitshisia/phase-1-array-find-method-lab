// code your solution here
function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
}

// Example usage:
const record = [
    { year: "2018", result: "N/A"},
    { year: "2017", result: "N/A"},
    { year: "2016", result: "N/A"},
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    { year: "2012", result: "N/A"},
    { year: "2011", result: "N/A"},
];

console.log(superbowlWin(record)); // Output: 2015

// Test function
function testSuperbowlWin() {
    const sadReality = [{ result: "N/A" }, { result: "N/A" }, { result: "N/A" }];
    console.log(superbowlWin(sadReality) === undefined); // Output: true
}

testSuperbowlWin();
