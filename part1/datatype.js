let student = {
    name: 'Sarah',
    major: 'CS',
    'Grad Year': '2022',
    greeting: function() {console.log('Hello!');},
    'Favorite Teacher': {
        name: 'TP',
        course: 'CSE 110'
    },
    courseLoad: ['110', '134', '41']
};
console.log(student.name);
console.log(student['Grad Year']);
console.log(student.greeting());
console.log(student['Favorite Teacher'].name);
console.log(student.courseLoad[0]);