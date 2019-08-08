
// Given a list of students, filter out the famale ones

var students    =   [
    {
        name: 'Thanh',
        famous: true
    },
    {
        name: 'Lam',
        famous: true
    },
    {
        name: 'Hoang',
        famous: false
    },
    {
        name: 'Tuan',
        famous: true
    },
    {
        name: 'Son',
        famous: true
    }

];


function filterOutFemales(members) {
    var result = [];
    members.filter(function(x){
        if (x.famous == true) {
            result.push(x.name);
        }
    })
    return result;
}

console.log(filterOutFemales(students));
