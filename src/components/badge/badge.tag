import styles from './badge.less';

<ui-badge>
	<span class="{ styles.base }">
		<yield></yield>
		<sup if="{ parseInt( opts.count ) > 0 }" class="{ styles.count } { !countStr || opts.dot === true ? styles.dot : '' }">{ !countStr || opts.dot === true ? '' : countStr }</sup>
	</span>

	<script>
		this.styles = styles;

		this.on('mount', () => {
			// TODO: add animation
		});

		this.on('update', () => {
			let overflowCount = this.opts.max;
			overflowCount = parseInt( overflowCount );
			if( isNaN( overflowCount ) ) {
				overflowCount = Infinity;
			}

			let count = this.opts.count;
			count = parseInt( count );
			if( !isNaN( count ) ) {
				let countStr = count;
				if( count > overflowCount ) {
					countStr = overflowCount + '+';
				}

				this.countStr = countStr;
			} else {
				// 不合法的count，替换为dot

			}


		});
	</script>
</ui-badge>
