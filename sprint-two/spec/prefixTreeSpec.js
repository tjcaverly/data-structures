describe('prefixTree', function() {
  var prefixTree;

  beforeEach(function() {
    prefixTree = new PrefixTree();
  });

  it('should have methods named "addWord", "countPrefixes", and "countWords"', function() {
    expect(prefixTree.addWord).to.be.a("function");
    expect(prefixTree.countPrefixes).to.be.a("function");
    expect(prefixTree.countWords).to.be.a("function");
  });

  it('should add words and return the correct number of words', function() {
    var words = ['all', 'rob', 'rib', 'rub', 'rip', 'hello', 'a'];
    _.each(words, function(word){
      prefixTree.addWord(word);
    });
    expect(prefixTree.countWords()).to.equal(words.length);
  });

  it('should count prefix', function() {
    var words = ['all', 'rob', 'rib', 'rub', 'rip', 'hello', 'a'];
    _.each(words, function(word){
      prefixTree.addWord(word);
    });
    expect(prefixTree.countPrefixes('')).to.equal(words.length);
    expect(prefixTree.countPrefixes('r')).to.equal(4);
  });

  it('should autoComplete properly', function() {
    var words = ['all', 'rob', 'rib', 'rub', 'rip', 'hello', 'a'];
    _.each(words, function(word){
      prefixTree.addWord(word);
    });
    expect(prefixTree.autoComplete('hel',1)[0]).to.equal('hello');
    expect(prefixTree.autoComplete('ri',1)).to.equal(undefined);
    expect(prefixTree.autoComplete('ri',2)[0]).to.equal('rib');
    expect(prefixTree.autoComplete('ri',2)[1]).to.equal('rip');
  });

});
