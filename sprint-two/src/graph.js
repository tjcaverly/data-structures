

var Graph = function(){
	this.nodes = [];

	this.edges = []; // Edges are stored in an array where each pair of indicies (i,i+1) where i is even forms an edge
};

Graph.prototype.addNode = function(node){
	this.nodes.push(node);
};

Graph.prototype.contains = function(node){
	return _.contains(this.nodes, node);
};

Graph.prototype.removeNode = function(node){
	if (this.contains(node)){
		var index = _.indexOf(this.nodes, node);
		this.nodes.pop(index);
		for (var i=0; i<this.edges.length; i++) {
			if (this.edges[i] === node) {
				if (i%2===0) {
					this.edges.pop(i);
					this.edges.pop(i);
				} else {
					this.edges.pop(i-1);
					this.edges.pop(i-1);
				}
				i-=2;
			}
		}
	}
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	for (var i = 0; i<this.edges.length; i+=2){
		if ( (this.edges[i] === fromNode && this.edges[i+1] === toNode) || 
					(this.edges[i+1] === fromNode && this.edges[i] === toNode) ){
			return true;
		}
	}
	return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
	this.edges.push(fromNode);
	this.edges.push(toNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	for (var i = 0; i<this.edges.length; i+=2){
		if ( (this.edges[i] === fromNode && this.edges[i+1] === toNode) || 
					(this.edges[i+1] === fromNode && this.edges[i] === toNode) ){
			this.edges.pop(i);
			this.edges.pop(i);
		}
	}
};

Graph.prototype.forEachNode = function(cb){
	_.each(this.nodes,cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 nodes = n, edges = m
 addNode = O(1)
 contains = O(n)
 removeNode = O(n + m)
 addEdge = O(1)
 hasEdge = O(m)
 removeEdge = O(m)
 forEachNode = O(n)
 */



