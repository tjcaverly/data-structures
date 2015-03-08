describe('bTree', function() {
  var bTree;

  beforeEach(function() {
    bTree = new BTree(2);
  });

  it('should have methods named "insert", "contains", and "remove"', function() {
    expect(bTree.insert).to.be.a("function");
    expect(bTree.contains).to.be.a("function");
    expect(bTree.remove).to.be.a("function");
  });

  it('should contain what it inserts', function() {
  	var testNums = [2, 3, 5, 7, 11, 13, 17, 23, 29];
  	_.each(testNums, function(value) {
  		//expect(bTree.contains(value)).to.equal(false);
  		bTree.insert(value);
  		//expect(bTree.contains(value)).to.equal(true);
  	});
  	debugger;
  });

  it('should no longer contain what it removes', function() {
  	var testNums = [2, 3, 5, 7, 11, 13, 17, 23, 29];
  	_.each(testNums, function(value) {
  		bTree.insert(value);
  		expect(bTree.contains(value)).to.equal(true);
  	});
  	_.each(testNums, function(value) {
  		bTree.remove(value);
  		expect(bTree.contains(value)).to.equal(false);
  	});
  });
});