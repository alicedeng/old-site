var adjustCoverHeight=function(){var e=document.querySelector(".title-container").offsetHeight,t=document.getElementById("particles-js");t.style.height=e+80+"px"};window.onload=function(){window.innerWidth<970&&adjustCoverHeight()},window.onresize=function(){window.innerWidth<970?adjustCoverHeight():document.getElementById("particles-js").style.height="470px"};var trackOutboundLink=function(e){ga("send","event","outbound","click",e,{transport:"beacon",hitCallback:function(){document.location=e}})};particlesJS("particles-js",{particles:{number:{value:200,density:{enable:!0,value_area:800}},color:{value:"#f0f0f0"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.3,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:110,color:"#ffffff",opacity:.15,width:1},move:{enable:!0,speed:1,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:130,line_linked:{opacity:.3}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0});