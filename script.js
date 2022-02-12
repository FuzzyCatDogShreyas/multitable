var s=prompt("Enter the number for which you want to print the multiplication table")
var e=prompt("Enter how many rows you want")
for(i=1;i<=s; i++)
{
    document.write(s+"x"+i+"="+i*s)
    document.write("<br/>")
}