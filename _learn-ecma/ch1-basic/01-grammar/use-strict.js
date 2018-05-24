// Define a function
(function myFunction() {
    "use strict";

    counter = 1;
    eval("console.log(counter)");
    delete counter; // Delete of an unqualified identifier in strict mode.
})();
