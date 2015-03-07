describe('bloomFilter', function() {
  var bloomFilter;

  beforeEach(function() {
    bloomFilter = new BloomFilter();
  });

  it('should have methods named insert, contains', function() {
    expect(bloomFilter.insert).to.be.a("function");
    expect(bloomFilter.contains).to.be.a("function");
  });

  it('should insert values, and contains with no false negatives', function() {
  	expect(bloomFilter.contains(1)).to.equal(false);
  	expect(bloomFilter.contains(2)).to.equal(false);
  	bloomFilter.insert(1);
  	bloomFilter.insert(2);
  	expect(bloomFilter.contains(1)).to.equal(true);
  	expect(bloomFilter.contains(2)).to.equal(true);
  });

  xit('should calculate false positive rate', function() {
  	var numFalsePositives = 0;
  	for (var i=0; i<10000; i++) {
  		bloomFilter = new BloomFilter();
  		for (var j=0; j<3; j++) {
  			bloomFilter.insert(Math.random());
  		}
  		if (bloomFilter.contains(Math.random())) {
  			numFalsePositives++;
  		}
  	}
  	//console.log("False Positive Rate: " + numFalsePositives/10000);
  	// Predicted: 6.0916%, Actual: 6.94%
  });

  xit('should calculate false negative rate and find no false negatives', function() {
  	var numFalseNegatives = 10000;
  	for (var i=0; i<10000; i++) {
  		bloomFilter = new BloomFilter();
  		for (var j=0; j<2; j++) {
  			bloomFilter.insert(Math.random());
  		}
  		var rememberMe = Math.random();
  		bloomFilter.insert(rememberMe);
  		if (bloomFilter.contains(rememberMe)) {
  			numFalseNegatives--;
  		}
  	}
  	expect(numFalseNegatives).to.equal(0);
  	// Predicted: 0%, Actual: 0%
  });

});
