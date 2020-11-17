const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park("Death Park", 50, 100)
  })

  it('should have a name', function(){
    park.parkName()
    const actual = park.parkName();
    assert.strictEqual(actual, "Death Park")
  });

  it('should have a ticket price', function(){
    park.priceOfTicket();
    const actual = park.priceOfTicket();
    assert.strictEqual(actual, 50);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.numberOfDinosaurs;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    dinosaur = Dinosaur;
    park.addDinosaur(dinosaur);
    const expected = [dinosaur];
    assert.deepStrictEqual(park.numberOfDinosaurs, expected)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    dinosaur = Dinosaur;
    park.addDinosaur(dinosaur);
    park.removeDinosaur(dinosaur);
    const actual = park.numberOfDinosaurs
    assert.deepStrictEqual(actual, [])
  });

  xit('should be able to find the dinosaur that attracts the most visitors');

  xit('should be able to find all dinosaurs of a particular species');

  xit('should be able to calculate the total number of visitors per day');

  xit('should be able to calculate the total number of visitors per year');

  xit('should be able to calculate total revenue for one year');

});
