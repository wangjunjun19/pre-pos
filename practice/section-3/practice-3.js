function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
	var collection_c=count_same_elements(collection_a);
	return updated_collection(collection_c, object_b);
}
function count_same_elements(collection)
 {
	var object=[];
	var length=1;
	object.push({key:collection[0],count:1});
	for(var i=1;i<collection.length;i++)
	{
		for(var j=0;j<length;j++)
		{
			if( object[j].key===collection[i])
			{
				object[j].count++;
				break;
			}
		}
		if(j===length)
		{
			length++;
			object.push({key:collection[i],count:1});
		}
	}
	return object;
}
function updated_collection(collection_c, objectb) 
{
	for(var i=0;i<collection_c.length;i++)
	{
		for(var j=0;j<objectb.value.length;j++)
		{
			if(objectb.value[j]===collection_c[i].key)
			{
				collection_c[i].count-=parseInt(collection_c[i].count/3);
			}
		}
	}
	return  collection_c;
}
