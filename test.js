window.onload=function(){
var node=[290,180,[180,250,150],200,270];
var i=0,k=0,x=100,y=100,r=0; 
var paper=Raphael(0,0,1360,800);
var len=node.length;
var bub=function be(node,len) {
while(k<len)
{
	var l=node[i].length;
	if(l===undefined)
	{	
		if(k<len)
		{
		r=600/(300-node[i]);
		x=x+75+r;
		y=y+75;	
		draw_circle(x,y,r);
		k++;
		return (be(node[k],len));
		}
		
	}

	else
	{	
		
		a=node[i];
		return be(a,(a.length));
	}

}
function draw_circle(x,y,r)
{
	paper.circle(x,y,r).attr({fill:'red'});
	paper.text(x,y,"radius:"+r);
}
}
}

