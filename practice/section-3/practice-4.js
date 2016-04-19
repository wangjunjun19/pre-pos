function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
	var collection_c=count_same_elements(collection_a);
	return updated_collection1(collection_c, object_b)
}
function count_same_elements(collection) {
  //在这里写入代码
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
function updated_collection1(collection_a, object_b) {
  //在这里写入代码
	for(var i=0;i<collection_a.length;i++)
	{
		for(var j=0;j<object_b.value.length;j++)
		{
			if(object_b.value[j]===collection_a[i].key)
			{
				collection_a[i].count-=parseInt(collection_a[i].count/3);
			}
		}
	}
	return  collection_a;
}
