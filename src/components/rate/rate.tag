<ui-rate>
	<span each={ loop } class="iconfont { styles.base } { styles.zero }" style="">
		<span class="iconfont { styles.star }"></span>
	</span>

	<script>
		import '../icon';
		import styles from './rate.less';

		this.styles = styles;

		this.on('before-mount', () => {
			const value = parseInt( this.opts.value ) || 0;
			const total = parseInt( this.opts.total ) || 5;
			const v = ( value / total / .5 ).toFixed(1) * .5;

			let arr = [], i = 0;

			while( i < total ) {
				i++;
				arr.push( i );
			}

			this.loop = arr;
		});
	</script>
</ui-rate>
