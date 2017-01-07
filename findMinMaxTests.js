'use strict';

var findMinMax = require('../app/findMinMax.js').findMinMax;

describe('Min-Max Numbers in a List: ', function () {

  describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

    it('should return [1,4] for [1, 2, 3 , 4]', function () {
      expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
    });

    it('should return [4, 6] for [6, 4]', function () {
      expect(findMinMax([6, 4])).toEqual([4, 6]);
    });

    it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
      expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
    });
    it('should return [3, 16] for [3, 16, 6, 4]', function () {
      expect(findMinMax([3, 16, 6, 4])).toEqual([3, 16]);
    });
    it('should return [7, 88] for [44, 7, 88, 8, 68, 10]]', function () {
      expect(findMinMax([ 44, 7, 88, 8, 68, 10])).toEqual([7, 88]);
    });
    it('should return [8, 14] for [8, 14]', function () {
      expect(findMinMax([8, 14])).toEqual([8, 14]);
    });
    it('should return [2, 68] for [8, 68, 2]]', function () {
      expect(findMinMax([8, 68, 2])).toEqual([2, 68]);
    });
    it('should return [10, 19] for [10, 13, 15, 19]', function () {
      expect(findMinMax([10, 13, 15, 19])).toEqual([10, 19]);
    });
    it('should return [1, 4] for [1, 3, 4, 2]', function () {
      expect(findMinMax([1, 3, 4, 2])).toEqual([1, 4]);
    });

  });

  describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

    it('should return [4] for [4, 4, 4, 4]', function () {
      expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
    });

  });

});
