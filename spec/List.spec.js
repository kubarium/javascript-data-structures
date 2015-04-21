describe("Javascript Data Structure Suite", function() {



  describe("List", function() {

    beforeEach(function() {
      list = new window.DS.List();
    });


    it("should add 5 to the List with append method", function() {

      expect(list.append(5)).toBe(1);

    });


    it("should find 5 in the a list of (4,5,6) and return 1 as its index number", function() {
      list.append(4);
      list.append(5);
      list.append(6);
      expect(list.find(5)).toBe(1);

    });

    it("for a list of (4,5,6) finding 3 should return -1", function() {
      list.append(4);
      list.append(5);
      list.append(6);
      expect(list.find(3)).toBe(-1);

    });


    it("for a list of (4,5,6) remove 5 should be possible", function() {
      list.append(4);
      list.append(5);
      list.append(6);
      expect(list.remove(5)).toBe(true);

    });

    it("for a list of (4,5,6) removing 3 should return false", function() {
      list.append(4);
      list.append(5);
      list.append(6);
      expect(list.remove(3)).toBe(false);

    });

    it("calling clear or empty method should clear the List", function() {
      list.append(4);
      list.append(5);
      expect(list.clear()).toBe(null);

      list.append(4);
      list.append(5);
      expect(list.empty()).toBe(null);
    });

    it("should remove an item by using dequeue from a list that has 2 elements and the list should have one item left", function() {
      list.append(4);
      list.append(5);
      list.remove(4);
      expect(list.length()).toBe(1);

    });

    it("a list that has 2 elements (4 and 5) should give 5 as last and 4 as first item", function() {
      list.append(4);
      list.append(5);

      expect(list.last()).toBe(5);
      expect(list.first()).toBe(4);

    });

    it("a list that has 2 elements (4 and 5) the list should contain or have 5 by using contain/has method", function() {
      list.append(4);
      list.append(5);

      expect(list.contains(5)).toBe(true);
      expect(list.has(4)).toBe(true);

    });

    it("for an empty list that has just been appended 2 elements (4 and 5) currentPosition should still be 0", function() {

      list.append(4);
      list.append(5);

      expect(list.currentPosition).toBe(0);

    });

    it("for an empty list that has just been appended 2 elements (4 and 5) using getItem or getElement method should return 4", function() {

      list.append(4);
      list.append(5);

      expect(list.getItem()).toBe(4);

      expect(list.getElement()).toBe(4);

    });

    it("for a list of (4,3,5) using front then getElement method should return 4", function() {

      list.append(4);
      list.append(3);
      list.append(5);
      list.front();
      expect(list.getItem()).toBe(4);
    });

    it("for a list of (4,3,5) using end then getElement method should return 5", function() {

      list.append(4);
      list.append(3);
      list.append(5);
      list.end();
      expect(list.getItem()).toBe(5);
    });

    it("for a list of (4,3,5) using getItem or getElement method after using moveTo(1) should return 3", function() {

      list.append(4);
      list.append(3);
      list.append(5);
      list.moveTo(1);
      expect(list.getItem()).toBe(3);

      expect(list.getElement()).toBe(3);

    });

    it("should add an item to an empty list and the list's length or size should be 1", function() {
      list.append(4);
      expect(list.length()).toBe(1);

      list.empty();

      list.append(4);
      expect(list.size()).toBe(1);

    });

    it("for a list of (4,3,5) insert(2) with currentPosition = 1 should insert 2 after 4", function() {
      list.append(4);
      list.append(3);
      list.append(5);

      list.moveTo(1);
      list.insert(2);
      expect(list.toString()).toBe([4, 2, 3, 5].toString());
    });

    it("for a list of (4,3,5) insert(2) with currentPosition = 2 should insert 2 after 3", function() {
      list.append(4);
      list.append(3);
      list.append(5);

      list.moveTo(2);
      list.insert(2);
      expect(list.toString()).toBe([4, 3, 2, 5].toString());
    });

    it("for a list of (4,3,5) insert(2,2) should insert 2 after 5", function() {
      list.append(4);
      list.append(3);
      list.append(5);

      list.insert(2, 2);
      expect(list.toString()).toBe([4, 3, 2, 5].toString());
    });

    it("for a list of (4,3,5) insert(2,-2) or insert(2,4) should not insert anything", function() {
      list.append(4);
      list.append(3);
      list.append(5);

      list.insert(2, -2);
      expect(list.toString()).toBe([4, 3, 5].toString());
    });

    it("move the cursor to a position beyond the limits of the list should throw a DSError", function() {
      list.append(4);

      var foo = function() {
        list.moveTo(4);
      };
      expect(foo).toThrowError("Can't move the cursor beyond range");


    });

    it("should return true for an empty list by using isEmpty method", function() {

      expect(list.isEmpty()).toBe(true);
    });

    it("for a list of (4,3,5) and currentPosition = 0 using next() should move the cursor to position 1", function() {
      list.append(4);
      list.append(3);
      list.append(5);

      list.next();
      expect(list.currentPosition).toBe(1);
    });

    it("for a list of (4,3,5) and currentPosition = 0 using next() and getItem() consecutively should return 3 and 5", function() {
      list.append(4);
      list.append(3);
      list.append(5);

      list.next();
      expect(list.getItem()).toBe(3);
      list.next();
      expect(list.getItem()).toBe(5);
    });

    it("for a list of (4,3,5) and currentPosition = 2 using next() should not move the cursor", function() {
      list.append(4);
      list.append(3);
      list.append(5);

      list.moveTo(2);
      list.next();
      expect(list.currentPosition).toBe(2);
    });

    it("for a list of (4,3,5) and currentPosition = 2 using previous() should move the cursor to position 1", function() {
      list.append(4);
      list.append(3);
      list.append(5);

      list.moveTo(2);
      list.previous();

      expect(list.currentPosition).toBe(1);
    });

    it("for a list of (4,3,5) and currentPosition = 2 using previous() and getItem() consecutively should return 3 and 5", function() {
      list.append(4);
      list.append(3);
      list.append(5);

      list.moveTo(2);
      list.previous();
      expect(list.getItem()).toBe(3);
      list.previous();
      expect(list.getElement()).toBe(4);
    });

    it("for a list of (4,3,5) and currentPosition = 0 using previous() should not move the cursor", function() {
      list.append(4);
      list.append(3);
      list.append(5);


      list.previous();
      expect(list.currentPosition).toBe(0);
    });

  });

  describe("Iteration", function() {
    beforeEach(function() {
      names = new window.DS.List();
      names.append('Clayton');
      names.append('Raymond');
      names.append('Cynthia');
      names.append('Jennifer');
      names.append('Bryan');
      names.append('Danny');
    });
    
    it("for a list of (a,b,c) calling next() more than two times should move the currentPosition to 2 and stop it there",function() {
      list.append('a');
      list.append('b');
      list.append('c');
      
      list.next();
      list.next();
      list.next();
      list.next();
      list.next();
      
      expect(list.currentPosition).toBe(2);
    });

    it("iterating over the names list should resut in 'ClaytonRaymondCynthiaJenniferBryanDanny'", function() {

      var foo = function() {
        
        var output = "";

        while(names.hasNext()) {
          output += names.getElement();
          names.next();
        }
        
        return output
      };
      
      expect(foo()).toBe('ClaytonRaymondCynthiaJenniferBryanDanny');
    });
  });

});