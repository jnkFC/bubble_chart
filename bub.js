window.onload=function bubble(){
var node=[290,180,200,270];
var paper=Raphael(0,0,1360,800);
var l=node.length;
var i=0,r,x=100,y=100;
draw_circle(680,400,70);
while(i<l)
{	
	r=600/(300-node[i]);
	x=x+75+r;
	y=y+75;	
	draw_circle(x,y,r);
	connector(x,y);
	i++;
}
function draw_circle(x,y,r)
{
	paper.circle(x,y,r).attr({fill:'red'});
	paper.text(x,y,"radius:"+r);
}
function connector(ex,ey)
{
	paper.path("M680 400"+"L"+ex+" "+ey).toBack();	
}

}

