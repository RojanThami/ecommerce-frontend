let student = {
  name: "Rojan",
  age: 20,
  greet: function () {
    console.log("Hello");
  }
};

console.log(student.name); // Rojan
student.greet();           // Hello


class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}

let s1 = new Student("Rojan", 20);

console.log(s1.age); // 20
s1.greet();          // Hello Rojan