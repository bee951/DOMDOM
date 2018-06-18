document.addEventListener('DOMContentLoaded',function(){
    var button=document.createElement('button');
    var btntext=document.createTextNode('Add Square');
    document.body.appendChild(button);
    button.appendChild(btntext);
    var container=document.createElement('div');
    document.body.appendChild(container);
    container.className='container';
    var sqrid=0;
    function randcolor() {
        var col='#'+Math.floor(Math.random()*16777215).toString(16)
        return col
    }
    function addsquare() {
        var sqr=document.createElement('div')
        container.appendChild(sqr);
        sqr.className='square';
        sqr.id=sqrid;
        sqr.style.backgroundColor="black";
        var iddis=document.createElement("h3")
        var sid=document.createTextNode(String(sqrid));
        iddis.appendChild(sid);
        sqr.appendChild(iddis);
        iddis.style.color="white"
        iddis.style.visibility="hidden"
    sqr.addEventListener("click",function() {
        var colr=randcolor();
        sqr.style.backgroundColor=colr;
    });
    sqr.addEventListener('mouseover', function() {
        iddis.style.visibility="visible"
    })
    sqr.addEventListener('mouseout', function() {
        iddis.style.visibility="hidden"
    })
    }
    button.addEventListener("click", function(){
        addsquare();
        sqrid++;
    });
})