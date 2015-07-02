window.onload=function(){
var node={
	  "value": "90",
          "child": [
			{
			"value": "70",
		      	"child": [{
					"value": "60"
				  },
				  {
	 				"value": "50",
					"child": [{
							"value": "80"
						  },
						  {
							"value": "30"
						  }
					]
				},
				{
					"value": "40"
				}
			]
			},
			{
			"value": "75"
			}
		]
	};
	
var paper=Raphael(0,0,1360,800);
var r=0,i=0,n=2,a;

function bubble(){
	var  x = 900,y = 10,parent = [],children = [];
	
		function recurr(child,h){	
            		for(i in child){
	                	if (child[i]!==null && typeof(child[i])==="object"){
					console.log(child[i]);	                	    
					parent.push({x1:x,y1:y,height:h});
					recurr(child[i],h);
        	       		}
				else{
					a = parent.pop();					
					//console.log("pop"+ a.x1);					
					x = x + (200+n*10) * Math.cos( 360 / (n++));
					y = y + (150) * Math.sin( 360 / (n++));
					
					draw_circle(x,y,child.value);
					h++;
					children.push({x2:x,y2:y,height:h});	
        			}
			
        		}
		}
	recurr(node,1);
	for(i=0;i<parent.length;i++){
		for(var j=0;j<children.length;j++){
			if(parent[i].height+1===children[j].height){	
				connector(parent[i].x1,parent[i].y1,children[j].x2,children[j].y2);
			}
		}
	}
}
function draw_circle(x,y,r)

{
	if(isNaN(r))
		return;
	paper.circle(x,y,r);

	paper.text(x,y,"radius:"+r);

}
function connector(x,y,ex,ey)

{
	
	paper.path("M"+x+" "+y+"L"+ex+" "+ey).toBack();

}
bubble();	

}


