function collect_same_elements(collection_a, collection_b) {
	var collection_c=[];
	for(var i=0;i<collection_a.length;i++)
	{
		for(var j=0;j<collection_b.length;j++)
		{
			if(collection_a[i]===collection_b[j])
			{
				collection_c.push(collection_a[i]);
			}
		}
	}
	return collection_c;
}

