var objects;
(function (objects) {
    var Person = (function () {
        //CONSTRUCTOR +++++++++++++++++++++++++++++++
        function Person(name) {
            this._name = name;
        }
        //PUBLIC METHODS
        Person.prototype.speaks = function () {
            console.log(this._name + " says hello");
        };
        return Person;
    })();
    objects.Person = Person;
})(objects || (objects = {}));
//# sourceMappingURL=person.js.map