import React, {Component} from 'react';
function setTable(){
    var j = 0;
    var array = [];
    for(var i =1; i<=13; i++)
    {
	    document.write("<tr>");
	    for(var k=1; k<=4; k++)
		{
            if(j==50){
                break;
            }
            document.write("<td>");
            document.write("<ProductCard pTitle={arrayProd["+j+"].title} pDescription={arrayProd["+j+"].description} />");
            document.write("</td");	
            j++;
		}
	    document.write("</tr>"); 
    }	
}