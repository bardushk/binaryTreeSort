var array = [10, 2, 4, 24, 15]; 

$(document).ready(function(){
	var tree = new BinaryTree(array);
	tree.render($('#container'));
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
function BinaryTree(array){	
	if(!$.isArray(array)) return;
	var tree = new Node(array[0]);
	for(var index = 1; index < array.length; index++ ){
		tree.addNode(array[index]);
	}
	this.render = function(container){
	debugger;
		container.html('');
		tree.render(container);
	}
}