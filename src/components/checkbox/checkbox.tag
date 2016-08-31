<ui-checkbox>
	<span class="{ styles.base } { stateCls }"></span>
	<span>
		<yield />
	</span>

	<script>
		import classNames from 'classnames';
		import styles from './checkbox.less';

		this.styles = styles;
		this.checked = this.opts.checked || false;

		let onClick = () => {
			// half -> true
			// other -> !other
			if( this.checked === '-' ) {
				this.checked = true;
			} else {
				this.checked = !this.checked;
			}
			this.update();

			this.opts.onChange && this.opts.onChange( this.checked );
			this.trigger( 'change' );
		};

		this.on('update', () => {
			this.stateCls = classNames({
				[ styles.checked ]: this.checked === true,
				[ styles.halfchecked ]: this.checked === '-',
				[ styles.unchecked ]: this.checked === false
			});
		});

		this.on('mount', () => {
			this.root.addEventListener('click', onClick, false);
		});

		this.on('unmount', () => {
			this.root.removeEventListener('click', onClick, false);
		})

	</script>
</ui-checkbox>
