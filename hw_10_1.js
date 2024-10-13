var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Jane",
        lastName:"Doe",
        email:"janedoe666@ukr.net"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru"
    },
    {
        userName:"Vania",
        lastName:"Petrov",
        email:"vanyaP123@yandex.ru"
    },
];

var regex = /^[a-z0-9]+(\.[a-z0-9]+)*@(gmail\.com|yahoo\.com|ukr\.net)$/i
function getValidEmails(array, reg){
    let validEmails = [];
    array.forEach(element => {
        for (const key in element){
            if (key === 'email')
                validEmails.push(element[key])
        }
    });
    return validEmails.filter(function (email){return reg.test(email)});
}

let newArr = getValidEmails(arr, regex);
console.log(newArr);