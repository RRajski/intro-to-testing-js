// describe('name for test', function(){
//   it('this is the label for this test',function () {
//       expect(test).toBeDefined(false);
//   });
//   it('to be', function() {
//       expect(test).toBeDefined(true);
//   });
//     it('not to be', function () {
//         expect(test).not.toBe(false);
//     });
//
// });


// Unit tests for the helloWorld function
// describe('helloWorld', function() {
//     it('should be a defined function', function() {
//       expect(typeof helloWorld).toBe('function');
//     });
//     it('should return a string when called', function() {
//       expect(typeof helloWorld()).toBe("string");
//     });
//     it('should return the string "Hello, World!" when executed', function() {
//       expect(helloWorld()).toBe("Hello, World!");
//     });
//     it("should never return 'undefined' when called", function() {
//       expect(helloWorld()).not.toBe(undefined);
//     });
// });
// Unit tests for the sayHello function
describe('sayHello("Jane!")', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello Jane!" when executed', function() {
        expect(sayHello()).toBe("Hello Jane!");
    });
    it("should never return 'undefined' when called", function() {
        expect(sayHello()).not.toBe(undefined);


    });
});








// describe('name for test', function() {
//     it('this is the label for this test', function() {
//         expect(test).toBeDefined(false);
//     });
//     it('to be', function() {
//         expect(test).toBe(true);
//     });
//     it('not to be', function() {
//         expect(test).not.toBe(false);
//     });
// });