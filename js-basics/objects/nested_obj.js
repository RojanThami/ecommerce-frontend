let student = {
  name: "Rojan",
  age: 20,
  address: {
    city: "Kathmandu",
    country: "Nepal"
  }
};

console.log(student.name);           // Rojan
console.log(student.address.city);   // Kathmandu



class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address {
  constructor(city, country) {
    this.city = city;
    this.country = country;
  } 
}

const p1 = new Person("Rojan", 20, ["Kathmandu", "Nepal"]);

console.log(p1.name);
console.log(p1.address.city);