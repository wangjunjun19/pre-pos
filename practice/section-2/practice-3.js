function count_same_elements(collection) {
  //在这里写入代码
	var object_b=[];
	var length=1;
	object_b.push({name:collection[0],summary:1});
	for(var i=1;i<collection.length;i++)
	{	
		if(collection[i].length===1)
		{
			for(var j=0;j<length;j++)
			{
				if( object_b[j].name===collection[i])
				{
					object_b[j].summary++;
					break;
				}
			}
			if(j===length)
			{
				length++;
				object_b.push({name:collection[i],summary:1});
			}
		}
		else
		{
			var temp=collection[i].split("");
			var str="";
			for(var k=2;k<temp.length;k++)
			{
				if(temp[k]>="0"&&temp[k]<="9")
				{
					str+=temp[k];
				}
			}
			collection[i]=temp[0];
			for(k=0;k<length;k++)
			{
				if(object_b[k].name===collection[i])
				{
					object_b[j].summary+=parseInt(str);
					break;
				}		
			}
			if(k===length)
			{
				length++;
				object_b.push({name:collection[i],summary:parseInt(str)});
			}
		}
	}
	return object_b;
}
