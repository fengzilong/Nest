import extend from './extend';

export default ({ target, styles, beforeMount, unmount, $ }) => {
	if( !target ) {
		return;
	}

	target.on( 'before-mount', () => {
		beforeMount.call( target );
	} );

	target.on( 'unmount', () => {
		unmount.call( target );
	} );

	target.styles = styles;

	extend( target, { styles }, $ );
};
