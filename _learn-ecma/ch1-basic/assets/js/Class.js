// Define an object called Class with a create() method for use creating "classes".
// Use a closure to maintain inner functions without exposing them publicly.
// 一个用于简化其他类创建的基类
var Class = (function() {

    // The create() method defines and returns a new "class" when called, based on an object
    // literal representing the public properties and methods for its prototype. A method named
    // initialize() will be executed as the constructor function. If an optional
    // ‘parentPrototype’ property is passed in, representing a parent "class", it creates the
    // new "class" as a subclass of that.
    function create(classDefinition, parentPrototype) {

        // Define the constructor function of a new "class", using the initialize() method from
        // the ‘classDefinition’ object literal if it exists
        var _NewClass = function() {
                if (this.initialize && typeof this.initialize === 'function') {
                    this.initialize.apply(this, arguments);
                }
            },
            _name;

        // If a ‘parentPrototype’ object has been passed in (when inheriting from other
        // "classes"), inherit everything from the parent to this subclass
        if (parentPrototype) {
            _NewClass.prototype = new parentPrototype.constructor();

            for (_name in parentPrototype) {
                if (parentPrototype.hasOwnProperty(_name)) {
                    _NewClass.prototype[_name] = parentPrototype[_name];
                }
            }
        }

        // Define a function to create a closure and return a function to replace the one
        // passed in, wrapping it and providing a __parent() method which points to the
        // method of the same name from a parent "class", to enable support for polymorphism
        // 定义一个函数来创建闭包
        // 在闭包中返回另一个函数来代替传入的函数
        // 支持对父类中同名方法的访问，这样就实现了对多态的支持
        function polymorph(thisFunction, parentFunction) {
            return function () {
                var output;

                this._parent = parentFunction;
                output = thisFunction.apply(this, arguments);
                delete this._parent;
                return output;
            };
        }

        // Apply the newly provided "class" definition, overriding anything that already exists
        // from the parentPrototype
        // 覆盖所有parentPrototype中已存在的属性和方法
        for (_name in classDefinition) {
            if (classDefinition.hasOwnProperty(_name)) {

                // If we’re attempting polymorphism, creating new methods named the same as
                // ones from the parent "class", then we want to expose a way of calling the
                // parent function of the same name in a simple way
                // 提供一种在子类方法中调用父类同名方法的简单方式
                if (parentPrototype && parentPrototype[_name] &&
                        typeof classDefinition[_name] === 'function') {
                    _NewClass.prototype[_name] = polymorph(classDefinition[_name], parentPrototype[_name]);
                } else {

                    // If we’re not attempting polymorphism, just map over the entry from the
                    // ‘classDefinition’ object literal to the prototype directly
                    _NewClass.prototype[_name] = classDefinition[_name];
                }
            }
        }

        // Ensure the constructor is set correctly, whether inherited or not (in case a
        // ‘constructor’ property or method was passed in the ‘classDefinition’ object literal)
        // 确保构造函数属性设置正确，不管是否继承
        // 以防classDefinition对象直接量包含名为constructor的属性和方法
        _NewClass.prototype.constructor = _NewClass;

        // Define an extend() method on the "class" itself, pointing to the private extend()
        // function, below, which allows the current "class" to be used as a parent for
        // a new subclass
        _NewClass.extend = extend;

        return _NewClass;
    }

    // extend()与create()方法相同，不过隐含了一个额外的参数
    // 即用来进行继承的父类的原型
    function extend(classDefinition) {
        return create(classDefinition, this.prototype);
    }

    // 用相同的名字将私有的create()方法暴露
    return { create: create };
}());