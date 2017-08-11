//console.log('Loaded!');
//var img = document.getElementById('madi');
//img.onclick=function() {
//    img.style.marginLeft='150px';
//};
var button=document.getElementById('counter');
button.onClick = function()
{
    counter=counter+1;
    var span=document.getElementbyId('count');
    span.innerHTML=counter.toString();
};