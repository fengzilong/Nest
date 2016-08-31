<ui-radio>
	<span class="{ styles.base } { checked ? styles.checked : '' }"></span>
	<span>
		<yield />
	</span>

	<script>
		import styles from './radio.less';
		
		this.styles = styles;
		this.checked = this.opts.__checked || false;

		let onToggle = () => {
			if( !this.checked ) {
				this.opts.onChange && this.opts.onChange( this.checked );
				this.trigger( 'change' );
			}
		};

		this.on('mount', () => {
			this.root.addEventListener('click', onToggle, false);
		});

		this.on('unmount', () => {
			this.root.removeEventListener('click', onToggle, false);
		});
	</script>
</ui-radio>
