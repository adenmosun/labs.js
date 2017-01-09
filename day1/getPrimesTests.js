'use strict';

var getPrimes = require('./getPrimes.js').getPrimes;


 describe('Prime numbers are in an array', function () {

  describe('Return the prime numbers of the parameter in a list`', function () {

    it('should return [] for 0', function () {
      expect(getPrimes(0)).toEqual([]);
    });

    it('should return [] for 1', function () {
      expect(getPrimes(1)).toEqual([]);
    });

    it('should return [2, 3, 5, 7, 11, 13, 17, 19] for 20', function () {
      expect(getPrimes(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
    });
    it('should return [2, 3, 5, 7] for 10', function () {
      expect(getPrimes(10)).toEqual([2, 3, 5, 7]);
    });
    it('should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97] for 100', function () {
      expect(getPrimes(100)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
    });
    it('should return [2, 3, 5, 7, 11, 13, 17, 19, 23] for 25', function () {
      expect(getPrimes(25)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23]);
    });
    it('should return [2, 3] for 3', function () {
      expect(getPrimes(3)).toEqual([2, 3]);
    });
    it('should return [] for -4', function () {
      expect(getPrimes(-4)).toEqual([]);
    });
    it('should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109] for 110', function () {
      expect(getPrimes(110)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109]);
    });
    it('should return [] for -0', function () {
    expect(getPrimes(-0)).toEqual([]);
    });
  });

});
