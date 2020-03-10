class linkedList {

     constructor(x) {
              
          if(x)
        {  this.data = x; }
          this.left = null;
          this.right = null;

     }

}

let head = new linkedList();


function addlast(head, val) {

     let temp = head;

     while (temp.right != null) {
          temp = temp.right
     }

     temp.right = new linkedList(val);
}

function addfirst(head, val) {
     let temp = head.right;
     head.right = new linkedList(val);
//   console.log(head.right);
     head.right.right = temp;
}

function length(head) {

     let counter = 0;

     let temp = head;
     while (temp.right != null) {
          temp = temp.right;
          counter++;
     }
     return counter ;
}

function getfirst(head) {
     return head.right.data;
}

function getlast(head) {
     let temp = head;
     while (temp.right != null) {
          temp = temp.right;
     }
     return temp.data;
}

function print(head)
{
     let temp = head;
     while(temp.right!=null)
     {  
          temp = temp.right;
          console.log(temp.data);
     }
}
addlast(head , 6)
addlast(head , 8)
addlast(head , 4)
addlast(head , 3)
addlast(head , 7)
addlast(head , 1)
addlast(head , 9)
addlast(head , 2)
addlast(head , 5)


addfirst(head , 34);


console.log(getfirst(head));

console.log(getlast(head));

print(head);
console.log(length(head));