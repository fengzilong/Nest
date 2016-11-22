<ui-renderer>
	<script>
		import riot from 'riot';

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

		function doMount( root, content ) {
			root.innerHTML = content;
			riot.mount( root, '*' );
		}
	</script>
</ui-renderer>
