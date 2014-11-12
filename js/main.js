

	var Dispacher={
			connect : function(event,fun){
				$("body").bind(event,fun);
			},
	        notify : function(event,args){
	        	$("body").trigger(event,args);
	        }
	};
	$('#handleCanvas').css('top',$('#bkCanvas').position.top);
	$('#handleCanvas').css('left',$('#bkCanvas').position.left);

/*function getOs()
{
	   if(navigator.userAgent.indexOf("MSIE")>0) {
	        return "MSIE";
	   }
	   if(navigator.userAgent.indexOf("Firefox")>0){
	        return "Firefox";
	   }
	   if(navigator.userAgent.indexOf("Safari")>0) {
	        return "Safari";
	   } 
	   if(navigator.userAgent.indexOf("Camino")>0){
	        return "Camino";
	   }
	   if(navigator.userAgent.indexOf("Gecko/")>0){
	        return "Gecko";
	   }
	  
}*/

function getOs(){
    var browserName=navigator.userAgent.toLowerCase();
    if(/msie/i.test(browserName) && !/opera/.test(browserName)){
        return "IE";
    }else if(/firefox/i.test(browserName)){
        return "Firefox";
    }else if(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName)){
        return "Chrome";
    }else if(/opera/i.test(browserName)){
        return "Opera";
    }else if(/webkit/i.test(browserName) &&!(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName))){
        return "Safari";
    }else{
        return "unKnow";
    }
}
function loadImages(sources, callback){
	//var images={};
	var num=0;//资源数
	var loadNum=0;//已加载资源数
	for(var src in sources){
		num++;//所有资源数目
	}
	for(var src in sources){
		source.images[src]=new Image();
		source.images[src].onload=function(){
			loadNum++;
			if(loadNum>=num){
				callback();
			}
		};
		source.images[src].src=sources[src];
	}
}
/*var T={
	init:function(){
	  source.init();
	  
    }
};*/
function speedUp(){
    var speed=velocity.speedUp();
    if(speed){
	    $('#speed').html(speed);
    }
    
}
function slowDown(){
    var speed=velocity.slowDown();
	if(speed){
	    $('#speed').html(speed);
	}
}

$(function(){
	source.init();
	velocity.init();
	scoreBoard.init();
	nextList.init();
	cellList.init();
	
    source.loadImages(function(){
    	  drawBk.init();
    	  drawRegion.init();
    });
	$('#speed').html(velocity.getSpeed());
/*    loadImages(source.files,function(){
    	  drawBk.init();
     	  drawRegion.init();
    });*/

});