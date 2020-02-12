
var string = prompt('enter the string')

let flag = true;
for( i in string)
{

    if(string[i]!=string[string.length-i-1])
    {
        flag = false;
        break;
    }
}

document.write(flag);