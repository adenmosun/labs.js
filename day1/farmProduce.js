
'use strict'
var file = {}

file.farmProduce = function (name, type) {
  this.name = ((typeof (name) === 'undefined') ? 'produce' : name);
  this.type = ((typeof (type) === 'undefined') ? 'food' : type);
  this.quality = ((name === 'beans') ? 'dry' : 'fresh'); //the quality is either fresh or dry if beans.
  this.harvest = ((type === 'fruits') ? 2 : 1); // the harvest is either within two years(type - fruits) or one year for others.
  this.isHealthy = ((name === 'yam') ? false:  true); // yam is not healthy everything else is.
  this.weight = '0 kg';
  this.cost = function (price) {
    this.total = (type === 'fruits') ? (price * 2) + ' /kg' : (price * 5) + ' /kg'; // fruits cost 2*price/kg everything else costs 5*price/kg
  return this;
	}
}

module.exports = file;
