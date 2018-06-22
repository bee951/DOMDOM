document.addEventListener('DOMContentLoaded',function(){
    var button=document.createElement('button');
    var btntext=document.createTextNode('Add Square');
    document.body.appendChild(button);
    button.appendChild(btntext);
    var container=document.createElement('div');
    document.body.appendChild(container);
    container.className='container';
    var sqrid=0;
    var idary=[];
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
        iddis.style.margin="0"
        iddis.style.padding="1.57em"
        iddis.style.justifyContent="center"
        idary.push(sqrid);
        console.log(idary)
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
    sqr.addEventListener("dblclick",function(){
        var itemid=this.id
        var sqra=idary.findIndex(function findidnd(itid) {
            return itid==itemid;
        })
        console.log(itemid)
        console.log(sqra)
        if (sqra==-1) {
            alert("Unable to find square to remove")
        } else {
        if (itemid%2==0) {
            var impst=sqra+1
            if (idary.length==impst||idary.length==1) {
                alert("No square following this one.")
            } else {
            console.log(impst)
            var sqarid=idary[impst]
            console.log(sqarid)
            var sqrp=document.getElementById(sqarid);
            container.removeChild(sqrp)
            idary.splice(impst,1)    
            }
        } else {
            var inmst=sqra-1
            if (inmst>idary.length||inmst==-1) {
                alert("No square preceding this one.")
            } else {
            console.log(inmst)
            var sqaridm=idary[inmst]
            console.log(sqaridm) 
            var sqrm=document.getElementById(sqaridm);
            container.removeChild(sqrm)
            idary.splice(inmst,1)    
            }
            
        }}
        console.log(idary)
    })
    }
    button.addEventListener("click", function(){
        addsquare();
        sqrid++;
    });
})