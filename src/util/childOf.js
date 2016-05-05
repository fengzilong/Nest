export default ( child, parent ) => {
	let tmp = child;
	let isChild = false;

	while( tmp = tmp.parentNode ) {
		if( tmp === parent ) {
			isChild = true;
			break;
		}
	}

	return isChild;
};
