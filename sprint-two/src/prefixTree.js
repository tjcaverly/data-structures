var PrefixTree = function(isWord) {
	this.value = '';
	this.children = [];
	this.prefixes = 0;
	this.isWord = (isWord === undefined) ? false : isWord;

};

PrefixTree.prototype.addWord = function(word){
	var addWordNode = function(node, postfix) {
		node.prefixes++;
		if (postfix === ''){
			node.isWord = true;
		} else {
			var charNum = letterNum(postfix);
			if (!node.children[charNum]) {
				node.children[charNum] = new PrefixTree();
				node.children[charNum].value = postfix[0];
			} 
			addWordNode(node.children[charNum], postfix.slice(1));
		}
	}

	addWordNode(this, word.toLowerCase());
};

PrefixTree.prototype.countPrefixes = function(prefix){
	var countPrefixesNode = function(node, postfix){

		if (postfix === ''){
			return node.prefixes;
		} else {
			var charNum = letterNum(postfix);
			if (!node.children[charNum]) {
				return 0;
			} else {
				return countPrefixesNode(node.children[charNum], postfix.slice(1));
			}
		}
	}

	return countPrefixesNode(this, prefix);
};

PrefixTree.prototype.countWords = function(word){
	var countWordsNode = function(node) {
		var count = node.isWord ? 1 : 0;
		_.each(node.children, function(child) {
			count += countWordsNode(child);
		});
		return count;
	};
	return countWordsNode(this);
};

PrefixTree.prototype.autoComplete = function(prefix, limit){
	var autoCompleteNode = function(node, postfix) {
		if (node.prefixes === 0) {
			return;
		}
		if (postfix === ''){
			if (node.prefixes > limit){
				return;
			} else {
				var words = [];
				var collectWords = function(node, wordPrefix) {
					if (node.isWord) {
						words.push(wordPrefix + node.value);
					}
					_.each(node.children, function(child){
						if (child) {
							collectWords(child, wordPrefix + node.value);
						}
					});
				};
				collectWords(node, prefix.slice(0,prefix.length-1));
				return words;	
			}
		} else {
			var charNum = letterNum(postfix);
			if (!node.children[charNum]) {
				return;
			} else {
				return autoCompleteNode(node.children[charNum], postfix.slice(1));
			}

		}
	}
	return autoCompleteNode(this, prefix);
}

var letterNum = function(word) {
	return word.charCodeAt(0) - 'a'.charCodeAt(0);
}

