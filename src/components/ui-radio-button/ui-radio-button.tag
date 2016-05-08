import styles from './ui-radio-button.less';

<ui-radio-button>
	<span class="{ styles.base } { checked ? styles.checked : '' }">
		<yield></yield>
	</span>

	<script>
		this.styles = styles;
		this.checked = false;

		let onClick = () => {
			if( !this.checked ) {
				this.opts.onChange && this.opts.onChange();
				this.trigger( 'change' );
			}
		};
		this.on('mount', () => {
			this.root.addEventListener('click', onClick, false);
		});
		this.on('unmount', () => {
			this.root.removeEventListener('click', onClick, false);
		});
	</script>
</ui-radio-button>
