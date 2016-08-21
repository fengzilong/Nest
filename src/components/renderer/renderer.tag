import riot from 'riot';

<ui-renderer>
	<script>
		function doMount( root, content ) {
			root.innerHTML = content;
			riot.mount( root, '*' );
		}

		this.on('mount', () => {
			const root = this.root;

			// if alive passed in
			if(
				typeof this.opts.alive !== 'undefined' &&
				this.opts.alive !== false
			) {
				this.on('updated', () => {
					doMount.call( this, root, this.opts.content );
				});
			}

			doMount.call( this, root, this.opts.content );
		});
	</script>
</ui-renderer>
