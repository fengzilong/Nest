export default ( object, ...args ) => {
	for( let i = 0, source; source = args[ i ]; i++ ) {
		if( !source ) {
			continue;
		}

		for( let property in source ) {
			object[ property ] = source[ property ];
		}
	}

	return object;
};
