class Stack {

    constructor(x) {
             
         if(x)
       {  this.data = x; }
         this.left = null;
         this.right = null;

    }
     
    
}

let head = new Stack()
function pushIn(head , val)
{
    let temp = head.right;
    head.right = new Stack(val);
//   console.log(head.right);
    head.right.right = temp;
}

function popOut(head)
{
    let temp = head.right.right;
     delete head.right ;
     head.right  = temp;

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
pushIn(head , 6)
pushIn(head , 8)
pushIn(head , 4)
pushIn(head , 3)
pushIn(head , 7)
pushIn(head , 1)
pushIn(head , 9)
pushIn(head , 2)
pushIn(head , 5)


popOut(head);
popOut(head);
popOut(head);
popOut(head);
popOut(head);


print(head);
