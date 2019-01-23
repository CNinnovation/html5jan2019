var Book = /** @class */ (function () {
    function Book(title, publisher) {
        this.title = title;
        this.publisher = publisher;
    }
    Book.prototype.display = function () {
        console.log(this.title);
    };
    return Book;
}());
//# sourceMappingURL=book.js.map