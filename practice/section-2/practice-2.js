function count_same_elements(collection) {
	var object_b=[];
	var length=1;
	object_b.push({key:collection[0],count:1});
	for(var i=1;i<collection.length;i++)
	{	
		if(collection[i].length===1)
		{
			for(var j=0;j<length;j++)
			{
				if( object_b[j].key===collection[i])
				{
					object_b[j].count++;
					break;
				}
			}
			if(j===length)
			{
				length++;
				object_b.push({key:collection[i],count:1});
			}
		}
		else
		{
			var temp=collection[i].split("-");
			length++;
			object_b.push({key:temp[0],count:parseInt(temp[1])});
		}
	}
	return object_b;
}
