

// 1) Увеличить возраст всех людей на 5 лет
// const arr_1 = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
// ]

// const arr_2 = arr_1.map(a => ({
//     a, 
//     age: a.age + 5
// }));

// console.log(arr_2);



// 2) Получить массив, где только имена (строки), из массива объектов

// const names = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
// ];

// const names_2 = names.map(a => a.name);
// console.log(names_2);






// Задачи на filter:
// 1) Отфильтровать массив объектов, чтобы оставить только те, у кого возраст больше 18 лет.
// const names_3 = [
//     { name: 'Alice', age: 16 },
//     { name: 'Bob', age: 22 },
//     { name: 'Charlie', age: 15 }
// ]

// const newNames = names_3.filter(a => a.age > 18);

// console.log(newNames);




// 2) Отфильтровать массив объектов, чтобы оставить только тех, кто проголосовал
// const ar_4= [
//     { name: 'Alice', voted: true },
//     { name: 'Bob', voted: false },
//     { name: 'Charlie', voted: true },
//     { name: 'Dave', voted: false }
// ]
// const votedUsers = ar_4.filter(user => user.voted);

// console.log(votedUsers);








// 3) Отфильтровать массив студентов, чтобы оставить только тех, у кого оценка выше 70.


// const students = [
//     { name: 'Alice', grade: 85 },
//     { name: 'Bob', grade: 62 },
//     { name: 'Charlie', grade: 74 },
//     { name: 'Dave', grade: 55 }
// ]

// const students_1 = students.filter(el => el.grade > 70);

// console.log(students_1);


// Задачи на forEach:
// Пройтись по массиву объектов и добавить каждому объекту новое свойство discountedPrice, которое будет равно price * 0.9.


// const products = [
//     { name: 'Laptop', price: 1000 },
//     { name: 'Phone', price: 500 },
//     { name: 'Tablet', price: 300 }
// ]

// products.forEach(
//     (el) => {
//         el.discountedPrice = el.price * 0.9;
//     }
// )

// console.log(products);
