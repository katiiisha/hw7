//1) напишите функцию для удаления переданного в параметры ключа из переданного объекта
const shops = {
    stuff: 22,
    adres: 'SPB, pr.ydarnikov 29',
    menger: {
        name: 'Ira',
        age: 29,
        salary: 45000, 
    }
}

function deleteKey(object, parameter) {
    delete object[parameter];
}
deleteKey(shops, 'stuff')
console.log(shops);
//) напишите функцию которая принимает объект и возвращает его длину

function lenghtObj(obj) {
   
    console.log(Object.keys(obj).length);
    
}
lenghtObj(shops)
