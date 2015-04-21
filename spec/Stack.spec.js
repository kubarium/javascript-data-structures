/*
var requirejs = require('requirejs');

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    paths: {
        //jquery: 'lib/jquery',
        //jasmine: 'lib/jasmine/lib/jasmine',
        //'jasmine-html': 'lib/jasmine/lib/jasmine-html',
        spec: 'spec/'
    },
    nodeRequire: require
});
*/


describe("Javascript Data Structure Suite", function() {



  describe("Stack", function() {

    beforeEach(function() {
      stack = new window.DS.Stack();
    });


    it("should add 5 to the Stack with add or push method", function() {


      expect(stack.push(5)).toBe(1);
      expect(stack.add(5)).toBe(2);
    });


    it("calling clear or empty method should clear the Stack", function() {
      stack.push(4);
      stack.push(5);
      expect(stack.clear()).toBe(null);

      stack.push(4);
      stack.push(5);
      expect(stack.empty()).toBe(null);
    });

    it("should remove or pop an item from a stack that has 2 elements and the stack should have one item left", function() {
      stack.push(4);
      stack.push(5);
      stack.remove();
      expect(stack.length()).toBe(1);

      stack.clear();
      stack.push(4);
      stack.push(5);
      stack.pop();
      expect(stack.length()).toBe(1);


    });

    it("should add an item to an empty stack and the stack's length or size should be 1", function() {
      stack.push(4);
      
      expect(stack.length()).toBe(1);
      
      stack.empty();
      
      stack.push(4);
      
      expect(stack.size()).toBe(1);

    });
    
    it("should return 4 for a stack that has 4 as its top element by using top or peek method", function() {
      stack.push(4);
      
      expect(stack.top()).toBe(4);
      
      expect(stack.peek()).toBe(4);
    });
    
    it("should return true for an empty list by using isEmpty method", function() {
      
      expect(stack.isEmpty()).toBe(true);
    });

  });

});