// students details -> Name, grade
let students = [
    {
        firstname: "Thabang",
        marks: {
            math : 78,
            SQL : 91,
            python : 87
        }
    },

    {
        firstname: "Kamo",
        marks: {
            math : 90,
            SQL : 68,
            python: 66
        }
    },

    {
        firstname: "Mj",
        marks: {
            math : 55,
            SQL : 60,
            python : 65
        }
    },
];

function calculateGrade() {
    // let totalMarks =0

    // a loop to run through our array and retain the value of our marks

    for (let i = 0; i < students.length; i++) {
        let student = students[i]
        let studentMarks = student.marks;
        let markscombined = studentMarks.math + studentMarks.SQL + studentMarks.python;
        // Calculating the average
        percentage = (markscombined / 300) * 100;

        console.log(student.firstname, ": Average (%) -> ",  percentage.toFixed(2) + "%");
    }

    // Calculating the average

    // let mathAverage = mathTotal / students.length;
    // let sqlAverage = sqlTotal / students.length;
    // let pythonAverage = pythonTotal / students.length;

    // console.log(mathAverage.toFixed(2));
    // console.log(sqlAverage.toFixed(2));
    // console.log(pythonAverage.toFixed(2));

    // console.log("Average ->", percentage.toFixed(2) ,"%"  );
}

calculateGrade()