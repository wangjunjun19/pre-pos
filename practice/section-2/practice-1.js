function count_same_elements(collection) {
  var object_b=[{key:collection[0],count:1}];
  var length=1;
	for(var i=1;i<collection.length;i++) {
		for(var j=0;j<length;j++) {
				if( object_b[j].key===collection[i]) {
					object_b[j].count++;
					break;
				}
			}
    if(j===length) {
				length++;
				object_b.push({key:collection[i],count:1});
    }
	}
	return object_b;
}
