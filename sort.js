document.getElementById("sid").addEventListener("click" , () =>{
    var btn = document.querySelectorAll(".sorting-btn")
    for(var k=0;k<btn.length;k++)
    {
        if(k==0)
        {
            btn[k].style.background="red";
        }
        else
        {
            btn[k].style.background="black";
        }
    }
    var column = document.querySelectorAll(".main-column");
    for(var j=0;j<column.length;j++)
    {
        column[j].style.display="none";
    }
    var sid = document.querySelectorAll(".sid");
    for(var i=0;i<sid.length;i++)
    {
        sid[i].style.display="inline";
    }
});

document.getElementById("manish").addEventListener("click" , () =>{
    var btn = document.querySelectorAll(".sorting-btn")
    for(var k=0;k<btn.length;k++)
    {
        if(k==1)
        {
            btn[k].style.background="red";
        }
        else
        {
            btn[k].style.background="black";
        }
    }
    var column = document.querySelectorAll(".main-column");
    for(var j=0;j<column.length;j++)
    {
        column[j].style.display="none";
    }
    var manish = document.querySelectorAll(".manish");
    for(var i=0;i<manish.length;i++)
    {
        manish[i].style.display="block";
    }
});

document.getElementById("others").addEventListener("click" , () =>{
    var btn = document.querySelectorAll(".sorting-btn")
    for(var k=0;k<btn.length;k++)
    {
        if(k==2)
        {
            btn[k].style.background="red";
        }
        else
        {
            btn[k].style.background="black";
        }
    }
    var column = document.querySelectorAll(".main-column");
    for(var j=0;j<column.length;j++)
    {
        column[j].style.display="none";
    }
    var others = document.querySelectorAll(".others");
    for(var i=0;i<others.length;i++)
    {
        others[i].style.display="block";
    }
});

document.getElementById("tiwari").addEventListener("click" , () =>{
    var btn = document.querySelectorAll(".sorting-btn")
    for(var k=0;k<btn.length;k++)
    {
        if(k==3)
        {
            btn[k].style.background="red";
        }
        else
        {
            btn[k].style.background="black";
        }
    }
    var column = document.querySelectorAll(".main-column");
    for(var j=0;j<column.length;j++)
    {
        column[j].style.display="none";
    }
    var tiwari = document.querySelectorAll(".tiwari");
    for(var i=0;i<tiwari.length;i++)
    {
        tiwari[i].style.display="block";
    }
});

document.getElementById("nitin").addEventListener("click" , () =>{
    var btn = document.querySelectorAll(".sorting-btn")
    for(var k=0;k<btn.length;k++)
    {
        if(k==4)
        {
            btn[k].style.background="red";
        }
        else
        {
            btn[k].style.background="black";
        }
    }
    var column = document.querySelectorAll(".main-column");
    for(var j=0;j<column.length;j++)
    {
        column[j].style.display="none";
    }
    var nitin = document.querySelectorAll(".nitin");
    for(var i=0;i<nitin.length;i++)
    {
        nitin[i].style.display="block";
    }
});

document.getElementById("all").addEventListener("click" , () =>{
    var btn = document.querySelectorAll(".sorting-btn")
    for(var k=0;k<btn.length;k++)
    {
        if(k==5)
        {
            btn[k].style.background="red";
        }
        else
        {
            btn[k].style.background="black";
        }
    }
    var column = document.querySelectorAll(".main-column");
    for(var j=0;j<column.length;j++)
    {
        column[j].style.display="none";
    }
    var nitin = document.querySelectorAll(".nitin");
    for(var i=0;i<nitin.length;i++)
    {
        nitin[i].style.display="block";
    }
    var tiwari = document.querySelectorAll(".tiwari");
    for(var i=0;i<tiwari.length;i++)
    {
        tiwari[i].style.display="block";
    }
    var others = document.querySelectorAll(".others");
    for(var i=0;i<others.length;i++)
    {
        others[i].style.display="block";
    }
    var manish = document.querySelectorAll(".manish");
    for(var i=0;i<manish.length;i++)
    {
        manish[i].style.display="block";
    }
    var sid = document.querySelectorAll(".sid");
    for(var i=0;i<sid.length;i++)
    {
        sid[i].style.display="block";
    }
});
