function rnd(m,n){
	return Math.floor(n+Math.random()*(m-n));
}
window.onload=function(){
	var oBox=document.querySelector('.box');
	var R=4;
	var C=7;
	var iNow=0;
	var bOk=false;
	var timer=null;
	for(var i=0;i<R;i++){
		for(var j=0;j<C;j++){
			var oDiv=document.createElement('div');
			oDiv.style.width=oBox.offsetWidth/C+'px'
			oDiv.style.height=oBox.offsetHeight/R+'px';
			oBox.appendChild(oDiv);
			oDiv.style.top=oDiv.offsetHeight*i+'px';
			oDiv.style.left=oDiv.offsetWidth*j+'px';
			oDiv.time=i+j;
			var oS1=document.createElement('span');
			oS1.className='span1';
			oS1.style.backgroundPosition='-'+oDiv.offsetWidth*j+'px -'+oDiv.offsetHeight*i+'px';
			oDiv.appendChild(oS1);
			var oS2=document.createElement('span');
			oS2.className='span2';
			oS2.style.backgroundPosition='-'+oDiv.offsetWidth*j+'px -'+oDiv.offsetHeight*i+'px';
			oDiv.appendChild(oS2);
		}
	}
	oBox.onclick=function(){
		var aS1=[];
		var aS2=[];
		clearTimeout(timer);
		if(bOk)return;
		bOk=true;
		iNow++;
		var aDiv=oBox.getElementsByTagName('div');
		for(var i=0;i<aDiv.length;i++){
			aS1.push(aDiv[i].children[0]);
			aS2.push(aDiv[i].children[1]);
			(function(i){
				timer=setTimeout(function(){
					aDiv[i].style.transition='1s all ease';
					aDiv[i].style.transform='rotateY(180deg)';
				},100*aDiv[i].time);
			})(i);
		}
		aDiv[aDiv.length-1].addEventListener('transitionend',function(){
			for(var i=0;i<aDiv.length;i++){
				aDiv[i].style.transition='none';
				aDiv[i].style.transform='rotateY(0deg)';
				aS1[i].style.backgroundImage='url(../img/'+(iNow%3+1)+'.jpg)';
				aS2[i].style.backgroundImage='url(../img/'+((iNow+1)%3+1)+'.jpg)';
			}
			bOk=false;
			clearTimeout(timer);
		},false)
	};
};