function sortByMarks(students) {
    students.sort(function(a, b) {
        if (a.biologyMarks === b.biologyMarks) {
            return a.chemistryMarks - b.chemistryMarks;
        }
        return a.biologyMarks - b.biologyMarks;
    });
}

const students = [    { name: 'Alice', dob: '1990-01-01', biologyMarks: 80, chemistryMarks: 70 },    { name: 'Bob', dob: '1991-02-01', biologyMarks: 70, chemistryMarks: 80 },    { name: 'Charlie', dob: '1992-03-01', biologyMarks: 70, chemistryMarks: 70 },    { name: 'Dave', dob: '1993-04-01', biologyMarks: 80, chemistryMarks: 80 }];

sortByMarks(students);

console.log(students);