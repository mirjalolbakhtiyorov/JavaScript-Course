// alert('Hello what is your name')

// variables
/*
let name ='Mirjalol'
let middle_name = 'Bakhtiyorov'
let result = name + ' '+middle_name;
console.log(result)

let age = 24
age = 25
console.log(age) 

const pi = 3.14574;
let r = 10
const result = pi*r**2;
console.log(result) 

var nation = 'uzbekistan'
console.log(nation) */

// string
// console.log('Hello world q1234 #$%%^!')

// let email = 'mirjalolbakhtiyorov@gmail.com'
// console.log(email)

// string concatenation
// let name = 'Mirjalol'
// let surname = 'Bakhtiyorov'
// let familyname = 'Alishervich'
// let result = name+' '+surname+' '+familyname
// console.log(result)


// getting characters kerakli indexni ajratib olish uchun
// let gmail = 'mirjalolbakhtiyorovgithub@gmail.com' 
// console.log(gmail[3])
// console.log(gmail[90])

// string length => uzunlik
// let gmail = 'mirjalolbakhtiyorovgithub@gmail.com'
// let result = gmail.length
// console.log(result)
// string methods => funktsiyaga o'xshash ish bajaradi

// let ism = 'Mister Italiano'
// console.log(ism.toLowerCase())
// console.log(ism.toLocaleUpperCase())
// let gmail = 'mirjalolbakhtiyorovgithub@gmail.com'
// console.log(gmail.indexOf('k'))

/* ------ ko'p ishlatilinadigan string metodlari ------ */

// let email = 'baxtiyorovmirjalol03@gmail.com'

// lastIndeOf()
// let result = email.indexOf('y')
// console.log(result)
// let result_two = email.lastIndexOf('m')
// console.log(result_two)


// slice()
// let result = email.slice(9,10)
// console.log(result)


// substr()
// let result = email.substr(1, 9)
// console.log(result)

// replace()
// let result = email.replace('a', 'd')
// console.log(result)

// charAt() - birinchi harakterni olib beradi
// let result = email.charAt()
// console.log(result)

// toUpperCase() - toLowerCase()

// let result = email.toLowerCase() 
// console.log(result)
                                        
       

// trim()-->boshida va oxirida joylashgan space larni olib tashlaydi

// let result = email.trim()
// console.log(result.length, email.length)

// split()--> berilgan stringni massiv qilib qaytaradi
// let result = email.split('a')
// console.log(result)


// template string
// const title = 'Rastamojka qachon ochiladi ?! yohud Monopoliya Respublikasi !'
// const author = "Lag'mon makazi"
// const likes = 35000000

// concatentation way
// let result = 'Bu post nomi ' + title + ' ' + author + ' tomonidan yozilgan. ' + 'va bu postda ' + likes + ' ta like bor'

// console.log(result)

// template string way
// let result = `bu post nomi ${title},${author} tomonidan yozilgan va bu postda ${likes} ta like bor`;
// console.log(result)

// let result = `
//     <h2>${title}</h2>
//     <p>${author} tomonidan yozilgan</p>
//     <span>${title}</span>
// `
// console.log(result)








// Number
// const pi = 3.145743;
// let radius = 10
// let result = pi*radius**2;
// console.log(result)

// mathematics operation
// console.log(10*2);
// console.log(74/9)
// console.log(8**2)
// console.log(89%6)

// math of operations
// let result = 10*3-9-(9/8)-3;
// console.log(result)

// let like=10;
// like = like+1;
// console.log(like)
// like++;
// console.log(like)
// like+=10;
// console.log(like)


// arrays massivlar 
// const mehmon1 = 'Azizbek'
// const mehmon2 = 'MuhammadSaid'
// const mehmon3 = 'Asror'
// const mehmon4 = 'Diyorbek'

// array => massive

// const mehmonlar = ['Azizbek', 'MuhmmadSaid', 'Asror', 'Diyorbek']

// mehmonlar[0] = 'Ahror'
// console.log(mehmonlar)

// let numbers = [1, 2, 3, 4, 5, 6, 123]

// property
// const result = numbers.length

// console.log(result)

// let result = mehmonlar.indexOf('Diyorbek')
// let result = mehmonlar.concat(numbers)

// mehmonlar.push('Davlatbek')
// mehmonlar.pop('Diyorbek')

// console.log(mehmonlar)


// let age = 25

// kuchsiz taqqoslashlar (turli xil tiplar tengligi)
// console.log(age == 25)
// console.log(age == '25')
// console.log(age != 25)
// console.log(age != 24)

// kuchli taqqoslashlar (turli xil tiplar teng bo'lmasligi)
// console.log(age === 25)
// console.log(age === '25')
// console.log(age !== 25)
// console.log(age !== '25')
// let ism = 'dhror'

// console.log(ism == 'ahror')
// console.log(ism == 'Ahror')
// console.log('dhror' >= 'dhror')


// let age = 25

// kuchsiz taqqoslashlar (turli xil tiplar tengligi)
// console.log(age == 25)
// console.log(age == '25')
// console.log(age != 25)
// console.log(age != 24)

// kuchli taqqoslashlar (turli xil tiplar teng bo'lmasligi)
// console.log(age === 25) true
// console.log(age === '25') false
// console.log(age !== 25) false
// console.log(age !== '25') true



// for(i=0; i<mehmon.length; i++){
//        console.log(mehmon[i].toUpperCase())
// }

// while

// let m = 0;
// while(m<mehmon.length){
//        console.log(mehmon[m].toLowerCase())
// }

// let i = 5

// do {
//   console.log(i)
//   i++
// } while (i < 5)
// for loop

// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }

// const names = ['ahror', 'sardor', 'doniyor']

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i].toUpperCase())
// }

// while

// let i = 0

// while (i < names.length) {
//   console.log(names[i].toUpperCase())
//   i++
// }

// let password = 'password12332'

// if (password.length>=12){
//        console.log('parolingiz juda uzun')
// } else if(password.length>=8){
//        console.log('ajoyib parol')
// }
// else{
//        console.log('parolingiz kuchsiz')
// }


// boleans or // and


// let password = 'mirjalol@2002'

// if(password.length>=12 && password.includes('@')){
//        console.log('sizning parolingiz juda uzun')
// }else if (parol.length >= 8 || (parol.includes('@') && parol.length >= 5)) {
//   console.log('Sizning parolingiz yetarlicha kuchli !')
// } else {
//   console.log('Sizning parolingiz yetarlicha kuchli emas !')
// }



// break and continue 

// let natijalar = [1, 24, 325, 233, 564, 870, 78, 76]

// for(m=0; m<natijalar.length; m++){

//        if (natijalar[m]===1){
//               continue
//        }
//        console.log('sizning natijalaringiz:', natijalar[m])
//        if(natijalar[m]===870){
//               console.log('siz yuqori natijani oldingiz')
//               break
//        }
// }

// switch case

// let mark = 'c'

// switch(mark){
//        case 'a':
//               console.log('sizning balingiz a') 
//        case 'b':
//          break
//               console.log('sizning balinngiz b')
//          break
//        case 'c':
//               console.log('sizning balingiz c')
//        break
//        case 'd':
//               console.log('sizning balingiz d')
//        break
//        default:
//               console.log('balingiz null')
// }


// let calcarea = function(radius) {
//   const yuza = 3.14 * radius ** 2;
//   return yuza
// }
// let m = calcarea(4)
// console.log(m)

/* Argument & Parameters */

// const sayHello = function (name, day = 'kech') {
//   console.log(`Hayrili ${day} ${name}`)
// }

// sayHello('Behruz', 'tong')




// let calcarea = function(radius) {
//   const yuza = 3.14 * radius ** 2;
//   return yuza
// }
// calcarea(4)


// let bill = function(products, tax){
//   let total = 0;

//   for (i=0; i<products.length; i++){
//     total+=products[i]+products[i]*tax
//       }
//     return total

// }

// let producttax = bill([12,43,98],0.2)
// console.log(producttax)

// let bill = (products, tax)=>{
//    let total = 0;

//   for (i=0; i<products.length; i++){
//     total+=products[i]+products[i]*tax
//       }
//     return total
// }

// let producttax = bill([12,43,98],0.2)
// console.log(producttax)

// let aylanayuzi = function(radius){
//   return  3.14 *radius**2
// }

// let yuza = aylanayuzi(5)
// console.log(yuza)


// let aylanayuzi = radius => { 
//   return 3.14*radius**2
// }
// let yuza = aylanayuzi(5)
// console.log(yuza)


// const greet = ()=> `hello`
// let great = gree()
// console.log(great)

// let ism = `Mirjalol`
// const convertion1 = ism.toLowerCase()
// const convertion2 = ism.toUpperCase()
// function calcAge(brithday, firstName){
//   let age = 2025-brithday;
//   console.log(`${firstName} siz ${age} yoshdasiz `)
//   return age
// }
// let myAge = calcAge(2003, 'Mirjalol Bakhtiyorov')
// console.log(myAge)

// callback 

// const myfunc = (callback)=>{
//   let Number = 50;
//   callback(Number)
// }

// myfunc((value) => {
//   console.log(value)
// })



// const ismlar = ['ahror', 'sardor', 'doniyor', 'farxod']
// const newismlar = [] 
// ismlar.forEach(function(ism){
//     let newIsm = ism.charAt().toUpperCase()+ism.slice(1).toLowerCase()+`bek`
//     newismlar.push(newIsm)
// })
// console.log(newismlar)


// objects

// const user = {
//   name: 'Mirjalol',
//   age: 24,
//   email: 'mirjalolbakhtiyorov@gmail.com',
//   location: "Qarshi",
//   lang: ['uzbek', 'russian', 'english'],
// }

// console.log(user)
// console.log(user.email)

// user.age = 25
// console.log(user.age)

// console.log(user['location'])
// user['name'] = 'Doniyor'
// console.log(user['name'])

// console.log(typeof user)




// const user = {
//     name:  `Mirjalol`,
//     age: 22,
//     email: `mirjalolbaxtiyorov03@gmail.com`,
//     lang: [`english`, `russian`, `uzbek`],
//     location: `Qashqadaryo`,
//     study: `Toshkent university information technology`,
//     login: function(){
//         console.log(`siz web sahifangizga kirdingiz`)
//     },
//     logout: function(){
//         console.log(`siz wen sahifanfzini tark etdingiz`)
//     }
// }

// user.login()
// user.logout()



/*------- lesson-38 -----*/

// onjeclarga mehtod qo'shish

// const user = {
//   name: 'Ahror',
//   age: 24,
//   email: 'akhrorteacher@gmail.com',
//   location: "Farg'ona",
//   langs: ['uzbek', 'russian', 'english'],
//   login: function () {
//     console.log('Siz bu saytdagi sahifangiznga kirdingiz.')
//   },
//   logout: function () {
//     console.log('Siz bu saytdagi sahifangizni tark etdingiz.')
//   },
//   speak: function () {
//     console.log(this)
//     console.log('I can speak:')
//     this.langs.forEach((lang) => {
//       console.log(lang)
//     })
//   },
// }

// user.speak()


/*------- lesson-38 -----*/

// objectlar arrayda

// { name: 'Harry Potter', likes: 484 },
// { name: 'Titanic', likes: 987 },
// { name: 'Sitve Jobs', likes: 156 },
// { name: 'Sherlock', likes: 574 },

// const user = {
//   name: 'Ahror',
//   age: 24,
//   email: 'akhrorteacher@gmail.com',
//   location: "Farg'ona",
//   langs: ['uzbek', 'russian', 'english'],
//   login: function () {
//     console.log('Siz bu saytdagi sahifangiznga kirdingiz.')
//   },
//   logout: function () {
//     console.log('Siz bu saytdagi sahifangizni tark etdingiz.')
//   },
//   speak: function () {
//     console.log(this)
//     console.log('I can speak:')
//     this.langs.forEach((lang) => {
//       console.log(lang)
//     })
//   },
//   movies: [
//     { name: 'Avatar', likes: 456 },
//     { name: 'Harry Potter', likes: 484 },
//     { name: 'Titanic', likes: 987 },
//     { name: 'Sitve Jobs', likes: 156 },
//     { name: 'Sherlock', likes: 574 },
//   ],
// }

// objectlar arrayda

// const movies = [
//   { name: 'Avatar', likes: 456 },
//   { name: 'Harry Potter', likes: 484 },
//   { name: 'Titanic', likes: 987 },
//   { name: 'Sitve Jobs', likes: 156 },
//   { name: 'Sherlock', likes: 574 },
// ]

// movies.forEach((movie) => {
//   // console.log(movie.name)
//   // console.log(movie.likes)
//   const result = `Kino nomi: ${movie.name}🎥, Likes: ${movie.likes}💖`
//   console.log(result)
// })

// user.moviesWatch()


// Math object

// Math, Math.PI, Math.E
// console.log(Math)
// console.log(Math.E)
// console.log(Math.PI)

// const area = 7.9

//  sonning eng yaqin butun qismga yaxlitlaydi
// Math.round()
// console.log(Math.round(area))

// eng yaqin kichik butun qisma qarab yaxlitlaydi
// Math.floor()
// console.log(Math.floor(area))

// eng yaqin kattasiga butun qisma qarab yaxlitlaydi
// Math.ceil()
// console.log(Math.ceil(area))

// sonning faqat butun qismini qaytaradi
// Math.trunc()
// console.log(Math.trunc(area))

// 0 va 1 oralig'ida ixtiyoriy raqamlarni qaytaradi
// Math.random()
// const randomNumber = Math.trunc(Math.random() * 10) + 1
// console.log(randomNumber)

