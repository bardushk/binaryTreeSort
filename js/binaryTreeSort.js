$(document).ready(function(){
	var tree = new BinaryTree(30, $('#container'));
});

// Класс узла дерева
// 
function Node(root){
	this.root = root;
	// Добавляет узел
	this.addNode = function(value){
		if(value < root){
			if(!this.leftBranch){
				this.leftBranch = new Node(value);
			}
			else{
				this.leftBranch.addNode(value);
			}
		}else{
			if(!this.rightBranch){
				this.rightBranch = new Node(value);
			}
			else{
				this.rightBranch.addNode(value);
			}
		}
	}
	var that = this;
	// Отображает узел
	this.render = function(container){
		if(that.leftBranch){
			that.leftBranch.render(container);
		}
		container.append('<div class = "node">' + that.root + '</div>');
		if(that.rightBranch){
			that.rightBranch.render(container);
		}
	}
}

// Класс бинарного дерева
//
function BinaryTree(count, container){	
	var array = [];
	for(var index = 0; index < count; index++){
		array.push(Math.round(Math.random() * 100));
	}
	
	var tree = new Node(array[0]);
	console.log(array);
	var index = 0;
	var that = this;
	var intervalId = setInterval(function(){ 
		if( index == array.length) { 
			clearInterval(intervalId); 
			alert('done'); 
			return;
		}
		tree.addNode(array[index++]); 
		that.render(container); 
	}, 200);
	this.render = function(container){
		container.html('');
		tree.render(container);
	}
}