
function bubble()
   {
	var x = document.getElementById("aaa").value;
	if(x<10)
		{
		alert("small");
		}
	else
		{
		alert("big");
		}
	
	
	}

function sortBubble()
{
	var listNumber= new Array(1,3,9,7,5,4,3);
	for(var i=0;i<listNumber.length;i++)
	{
		
		for(var j=0;j<listNumber.length-i-1;j++)
		{
			if(listNumber[j]>listNumber[j+1])
			{
				  var temp =listNumber[j];
				  listNumber[j]= listNumber[j+1];
				  listNumber[j+1]= temp;

				}
			
		}
		
	}
	alert(listNumber);

}

function swap(x,y)
{
  var temp = x;
  x = y;
  y = temp;

}





