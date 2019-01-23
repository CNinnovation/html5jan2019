var Person = (function () {
    function Person(first, last) {
        this.first = first;
        this.last = last;
    }
    Person.prototype.display = function () {
        console.log(this.first);
    };
    return Person;
}());