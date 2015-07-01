window.onload=function bubble(){

var node=
	{
	parent:90,
	child:[
		{
			value:50
			
		},
		{
			value:30
			
		}
		      ]
	}
var paper=Raphael(0,0,1360,800);
var px=680,py=400,x=100,y=100,i=0;
draw_circle(px,py,node.parent);
function bub(parent,child)
{
		var parent1,child1;	
		child1=child;
		parent1=parent;	
							
				while(i<child1.length)
				{
					console.log(child1.length+" par " + i+ " "+child1);
					draw_circle(x,y,child1[i].value);
					connector(px,py,x,y);	
					if(typeof(child1[i])=="object")	
					{
						px=x;
						py=y;
						x=x+100;
						console.log("inside if");
						bub(child1[i].value,child1[i].child);	
					}
					else
					{
						x=x+100;
						draw_circle(x,y,child1[i].value);
						connector(px,py,x,y);
					}					
					i++;		
				}
					
			
			
			
		/*else if(typeof(parent1)==="object")
		{
			if(child1.length>1)
			{
							
				while(i<child1.length)
				{
					draw_circle(x,y,child1[i].value);
					connector(px,py,x,y);	
					if(typeof(child1[i])==="object")	
					{	px=x;
						py=y;
						x=x+100;
						console.log(child1[i].value+" pari "+child1[i].child);
						bub(child1[i].value,child1[i].child);
					}
					else
					{
						x=x+100;
						
						bub(parent,child1[i++]);

					}					
					i++;		
				}					
			}
		}
		
		*/
/*draw_circle(x,y,child1[i].value);
					connector(px,py,x,y);
					i++;
					x=x+100; */
}
bub(node.parent,node.child);
function draw_circle(x,y,r)

{

	paper.circle(x,y,r);

	paper.text(x,y,"radius:"+r);

}
function connector(x,y,ex,ey)

{
	
	paper.path("M"+x+" "+y+"L"+ex+" "+ey).toBack();

}
}	

	


