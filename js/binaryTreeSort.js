var array = [10, 2, 4, 24, 15]; 

$(document).ready(function(){


alert('aha');

});

// Класс узла дерева
// 
function Node(root){
   this.root = root;
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
}