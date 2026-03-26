/*
* 1. CLASS
*/
console.log("\n--- 1. CLASS ---");

class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        console.log(this.name + " says Woof!");
    }
}

let dog1 = new Dog("Buddy");
dog1.bark();

/*
* 2. GETTER / SETTER
*/
console.log("\n--- 2. GETTER & SETTER ---");

class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}

let p = new Person("Dara");
console.log(p.name);

p.name = "Nita";
console.log(p.name);

/**
 * 3. INHERITANCE
 */
console.log("\n--- 3. INHERITANCE ---");

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + " make a sound");
    }
}

class Cat extends Animal {
    meow() {
        console.log(this.name + " says Meow");
    }
}

let cat = new Cat("Kitty");
cat.speak();
cat.meow();

/**
 * 4. CALLBACK FUNCTION
 */
console.log("\n--- 4. CALLBACK ---");

function calculate(a, b, CALLBACK) {
    let result = a + b;
    CALLBACK(result);
}

calculate(5, 10, function (res) {
    console.log("Callback result:", res);
});

/**
 * 5. ASYNC (setTimeout)
 */
console.log("\n--- 5. ASYNCE ---");

console.log("Start");

setTimeout(() => {
    console.log("This runs later (2s");
}, 2000);

console.log("End");

/**
 * 6. PROMISE
 */
console.log("\n--- 6. PROMISE ---");

let promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Promise sucess!");
    } else {
        reject("Promise error!");
    }
});

promise
.then(res => console.log(res))
.catch(err => console.log(err));

/**
 * 7. ASYNCE / AWAIT
 */
console.log("\n--- 7. ASYNCE /AWAIT ---");

async function getData() {
    let promise = new Promise(resolve => {
        setTimeout(() => {
            resolve("Data received!");
        }, 2000);
    });

    let result = await promise;
    console.log(result);
}

getData();

/**
 * 8. DOM (REQUIRES HTML)
 */

console.log("\n--- 8. DOM ---");

// Requires HTML;
// <p id="demo">Hello</p>

let demo = document.getElementById("demo");

if (demo) {
    demo.textContent = "Changed by JavaScript";
    console.log("DOM updated");
} else {
    console.log("DOM element not found (add HTML to test)");
}

/**
 * 9. BOM
 */
console.log("\n--- 9. BOM ---");

console.log("Window width:", window.innerWidth);
console.log("Screen width:", screen.width);
console.log("Current URL:", location.href);
console.log("Browser platform:", navigator.platform);

/**
 * 10. COOKIES
 */
console.log("\n--- 10. COOKIES ---");

// Create cookie
document.cookie = "username=Student; expires=Thu, 18 Dec 2030 12:00:00 UTC";

// Read cookie
console.log("Cookies:", document.cookie);

// Update cookie
document.cookie = "username=AdvancedStudent; expires=Thur, 18 Dec 2030 12:00:00 UTC; path=/";

console.log("Updated Cookies:", document.cookie);