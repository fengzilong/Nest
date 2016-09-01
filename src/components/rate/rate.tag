<ui-rate onclick="{ onConfirm }" onmouseleave="{ onLeave }">
	<span
		each={ state, i in states }
		class="iconfont { styles.base } { parent.opts.__disabled ? styles.disabled : '' } { state }"
		onmousemove="{ onMouseMove(i) }"
	>
		<span class="iconfont { styles.star }"></span>
	</span>

	<script>
		import '../icon';
		import styles from './rate.less';

		this.styles = styles;

		// TODO: debounce
		this.onMouseMove = i => e => {
			if( this.opts.__disabled ) {
				return;
			}

			const item = e.item;
			const target = e.target;
			const rect = target.getBoundingClientRect();
			const width = rect.width;
			const offset = e.pageX - rect.left;
			let tmp = '';
			i = i + 1;
			if( offset < width / 3 ) {
				tmp = i - 1;
			} else if( ( offset >= width / 3 ) && ( offset <= width / 3 * 2 ) ) {
				tmp = i - .5;
			} else if( offset > width / 3 * 2 ) {
				tmp = i;
			}
			this.value = tmp;
		};

		this.onConfirm = () => {
			if( this.opts.__disabled ) {
				return;
			}

			this.v = this.value;
		};

		this.onLeave = () => {
			if( this.opts.__disabled ) {
				return;
			}

			this.value = this.v || this.opts.value;
		};

		this.on('update', () => {
			const value = this.value || parseFloat( this.opts.value ) || 0;
			const total = parseInt( this.opts.total ) || 5;
			const v = parseInt( value / .5 ) * .5;

			let states = [], i = 0;

			while( i < total ) {
				i++;
				if( i <= v ) {
					states.push( styles.full );
				} else if( i - .5 === v ) {
					states.push( styles.half );
				} else if( i > v ) {
					states.push( styles.zero );
				}
			}

			this.states = states;

			// TODO: onchange
		});
	</script>
</ui-rate>
