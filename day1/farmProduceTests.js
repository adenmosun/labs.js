(function(){
  'use strict';

  var farmProduce = require('../app/farmProduce.js').farmProduce;
  describe("farmProduce: Create a farmProduce, weight and price it", function() {

    it("The produce should be a type of `object`, and an instance of the `farmProduce` class", function() {
      var potatoes = new farmProduce('potatoes');
      expect(typeof potatoes).toEqual(typeof {});
      expect(potatoes instanceof farmProduce).toBeTruthy();
    });

    it("The produce should be a type of `object`, and an instance of the `farmProduce` class", function() {
      var plaintain = new farmProduce('plaintain');
      expect(typeof plaintain).toEqual(typeof {});
      expect(plaintain instanceof farmProduce).toBeTruthy();
    });

    it("The produce should be a type of `object`, and an instance of the `farmProduce` class", function() {
      var onions = new farmProduce('onions');
      expect(typeof onions).toEqual(typeof {});
      expect(onions instanceof farmProduce).toBeTruthy();
    });

    it("The farmProduce should be called 'produce' if no name is passed as a parameter", function() {
      var avocado = new farmProduce();
      expect(avocado.name).toEqual('produce');
      expect(avocado.type).toBe('food');
    });

    it("The farmProduce name and type should be a property of the farmProduce", function() {
      var roseApple  = new farmProduce('roseApple', 'fruit');
      expect(roseApple.name).toBe('roseApple');
      expect(roseApple.type).toBe('fruit');
    });

    it("The farmProduce shoud be fresh except its a legume", function() {
      var celery  = new farmProduce('celery', 'vegetable');
      expect(celery.quality).toBe('fresh');

      var watermelon = new farmProduce('watermelon', 'fruit');
      expect(watermelon.quality).toBe('fresh');
      watermelon.cost(500);
      expect(watermelon.total).toBe('2500 /kg');
      expect((function(){return new farmProduce('beans', 'legumes');}()).quality).toBe('dry');
    });

    it("The farmProduce shoud de harvested within a year except fruits that take longer", function() {
      var mangoes  = new farmProduce('mangoes', 'fruits', 'trailer');
      expect(mangoes.harvest).toBe(2);
      expect(mangoes.isHealthy).toBe(true);

      var beans = new farmProduce('beans', 'legumes');
      expect(beans.harvest).toBe(1);
      expect(beans.isHealthy).toBeTruthy();
    });

    it("The weight should be 0 kg until you put some produce on it", function() {
      var roseApple  = new farmProduce('roseApple', 'fruits');
      expect(roseApple.weight).toBe('0 kg');
      roseApple.cost(200);
      expect(roseApple.total).toBe('400 /kg');
    });

    it("The weight should be 0 kg until you put some produce on it", function() {
      var corn  = new farmProduce('corn', 'vegetable');
      expect(corn.weight).toBe('0 kg');
      corn.cost(50);
      expect(corn.total).toBe('250 /kg');
    });

    it("The farmProduce cost function should return the instance of the farmProduce class", function() {
      var roseApple = new farmProduce('roseApple', 'fruits');
      var sales = roseApple.cost(200);
      expect(sales instanceof farmProduce).toBeTruthy();
      expect(typeof sales.cost).toBe(typeof (function (){}));
      expect(roseApple.total).toBe(sales.total);
    });

  });
})();