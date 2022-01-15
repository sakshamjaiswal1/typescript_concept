// const person:{
//     name:string,
//     age:number,
//     hobbies:string[],
//     role:[number,string]
// }= {
//     name:'Saksham',
//     age:24,
//     hobbies:['Sports','cooking'],
//     role:[2,"author"]
// }
enum Role {
  ADMIN=6,
  READ_ONLY,
  AUTHOR,
}
const person = {
  name: "Saksham",
  age: 24,
  hobbies: ["Sports", "cooking"],
  role: Role.ADMIN
};


let favString: string[];
favString = ["123"];
console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
if( person.role==Role.READ_ONLY){
console.log('admin')
}