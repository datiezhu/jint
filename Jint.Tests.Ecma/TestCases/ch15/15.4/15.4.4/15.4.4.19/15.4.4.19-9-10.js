/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.19/15.4.4.19-9-10.js
 * @description Array.prototype.map - empty array to be returned if 'length' is 0 (subclassed Array, length overridden with obj with valueOf)
 */


function testcase() {

        var accessed = false;

        function callbackfn(val, idx, obj) {
            accessed = true;
            return val > 10;
        }

        var Foo = function () { };
        Foo.prototype = [1, 2, 3];
        var obj = new Foo();
        obj.length = {
            valueOf: function () {
                return 0;
            }
        };

        var testResult = Array.prototype.map.call(obj, callbackfn);
        return testResult.length === 0;
    }
runTestCase(testcase);
