describe("Javascript Data Structure Suite", function() {



  describe("Queue", function() {

    beforeEach(function() {
      queue = new window.DS.Queue();
    });


    it("should add 5 to the Queue with enqueue method", function() {


      expect(queue.enqueue(5)).toBe(1);
      
    });


    it("calling clear or empty method should clear the Queue", function() {
      queue.enqueue(4);
      queue.enqueue(5);
      expect(queue.clear()).toBe(null);

      queue.enqueue(4);
      queue.enqueue(5);
      expect(queue.empty()).toBe(null);
    });

    it("should remove an item by using dequeue from a queue that has 2 elements and the queue should have one item left", function() {
      queue.enqueue(4);
      queue.enqueue(5);
      queue.dequeue();
      expect(queue.length()).toBe(1);

    });
    
    it("a queue that has 2 elements (4 and 5) should give 5 as back and 4 as front item", function() {
      queue.enqueue(4);
      queue.enqueue(5);
      
      expect(queue.back()).toBe(5);
      expect(queue.front()).toBe(4);

    });
    
    it("a queue that has 2 elements (4 and 5) should keep 5 after dequeue method is used", function() {
      queue.enqueue(4);
      queue.enqueue(5);
      queue.dequeue();
      expect(queue.front()).toBe(5);

    });

    it("should add an item to an empty queue and the queue's length or size should be 1", function() {
      queue.enqueue(4);
      expect(queue.length()).toBe(1);
      
      queue.empty();
      
      queue.enqueue(4);
      expect(queue.size()).toBe(1);

    });
    
    
    it("should return true for an empty list by using isEmpty method", function() {
      
      expect(queue.isEmpty()).toBe(true);
    });

  });

});