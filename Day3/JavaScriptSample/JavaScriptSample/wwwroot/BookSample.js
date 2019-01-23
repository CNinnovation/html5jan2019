/// <reference path="someotherscript.js"


let book1 = new Object();
book1.title = "Professional C# 7";

book1.display = function () {
    console.log(book1.title);
};

book1.display();

// book1.Display();  // undefined

console.log(book1.title);

alert(book1.title);

book1.display = mydisplay;


book1.display();

let book2 = {};
book2.publisher = "Wrox Press";


function mydisplay() {
    console.log("mydisplay");
}


let book3 = {
    title: "Professional C# 7",
    publisher: "Wrox",
    display: function () {
        console.log(this.title);
    }
};

book3.title = "Professional C# 8";  // change the title of book3
book3.display();


// constructor
let Book = function (title, publisher) {
    this.title = title;
    this.publisher = publisher;

    //this.display = function () {
    //    console.log(this.title);
    //};
};

Book.prototype = {
    display: function () {
        console.log(this.title);
    }
};

let book4 = new Book("JavaScript the definitive guide", "Oreilly");

book4.display();

let book5 = new Book();

book5.display = function () {
    console.log(this.title + ' ' + this.publisher);
};

Book.prototype.display = function () {
    console.log("ab jetzt eine neue implementierung");
};

book4.display();