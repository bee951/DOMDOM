document.addEventListener('DOMContentLoaded',function(){
    var button=document.createElement('button');
    var btntext=document.createTextNode('Add Square');
    document.body.appendChild(button);
    button.appendChild(btntext);
    var container=document.createElement('div');
    document.body.appendChild(container);
    container.className='container';
    var sqrid=0;
    function addsquare() {
        var sqr=document.createElement('div')
        container.appendChild(sqr);
        sqr.className='square'
        sqr.id=sqrid
        sqr.style.backgroundColor="black"
    }
    button.addEventListener("click", function(){
        addsquare();
        sqrid++;
    });
})