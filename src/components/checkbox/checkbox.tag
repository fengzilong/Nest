import styles from './checkbox.less';

<ui-checkbox>
	<span class="{ styles.base } { checked ? styles.checked : '' }"></span>
	<span>
		<yield />
	</span>

	<script>
		this.styles = styles;
		this.checked = this.opts.checked || false;

		let onClick = () => {
			this.checked = !this.checked;
			this.update();
			this.opts.onChange && this.opts.onChange( this.checked );
			this.trigger( 'change' );
		};

		this.on('mount', () => {
			this.root.addEventListener('click', onClick, false);
		});

		this.on('unmount', () => {
			this.root.removeEventListener('click', onClick, false);
		})

	</script>
</ui-checkbox>
