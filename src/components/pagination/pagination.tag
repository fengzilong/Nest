import styles from './pagination.less';

<ui-pagination>
	<ui-button disabled="{ current === min }" sm on-click="{ onChangeFactory( current - 1 ) }">
		{ parent.opts.prevText || 'prev' }
	</ui-button>

	<ui-button if="{ isBeforeHidden }" on-click="{ onChangeFactory( min ) }" sm>
		{ parent.min }
	</ui-button>
	<span if="{ isBeforeHidden }" class="{ styles.more }">...</span>
	<ui-button if="{ isBeforeHidden }" on-click="{ onChangeFactory( current - 2 ) }" sm>
		{ parent.current - 2 }
	</ui-button>
	<ui-button if="{ isBeforeHidden }" on-click="{ onChangeFactory( current - 1 ) }" sm>
		{ parent.current - 1 }
	</ui-button>

	<virtual each="{ v in min2current }" no-reorder>
		<ui-button if="{ !isBeforeHidden }" on-click="{ onChangeFactory( v ) }" sm>
			{ v }
		</ui-button>
	</virtual>

	<ui-button primary sm>{ parent.current || parent.min }</ui-button>

	<virtual each="{ v in current2max }" no-reorder>
		<ui-button if="{ !isAfterHidden }" on-click="{ onChangeFactory( v ) }" sm>
			{ v }
		</ui-button>
	</virtual>

	<ui-button if="{ isAfterHidden }" sm on-click="{ onChangeFactory( current + 1 ) }">
		{ parent.current + 1 }
	</ui-button>
	<ui-button if="{ isAfterHidden }" on-click="{ onChangeFactory( current + 2 ) }" sm>
		{ parent.current + 2 }
	</ui-button>
	<span if="{ isAfterHidden }" class="{ styles.more }">...</span>
	<ui-button if="{ isAfterHidden }" on-click="{ onChangeFactory( max ) }" sm>
		{ parent.max }
	</ui-button>

	<ui-button disabled="{ current === max }" on-click="{ onChangeFactory( current + 1 ) }" sm>
		{ parent.opts.nextText || 'next' }
	</ui-button>

	<script>
		this.styles = styles;
		this.min2current = [];
		this.current2max = [];

		this.onChangeFactory = v => () => {
			this.opts.onChange && this.opts.onChange( v )
			this.update();
		};

		this.on('update', () => {
			const min = parseInt( this.opts.min ) || 1;
			const max = parseInt( this.opts.max ) || 1;
			const current = parseInt( this.opts.current ) || min;

			this.min = min;
			this.max = max;
			this.current = current;

			let isBeforeHidden = false;
			if( current - min > 3 ) {
				isBeforeHidden = true;
			}

			let isAfterHidden = false;
			if( max - current > 3 ) {
				isAfterHidden = true;
			}

			this.isBeforeHidden = isBeforeHidden;
			this.isAfterHidden = isAfterHidden;

			if( !isBeforeHidden ) {
				let min2current = [];
				for( let i = min; i < current; i++ ) {
					min2current.push( i );
				}
				this.min2current = min2current;
			}

			if( !isAfterHidden ) {
				let current2max = [];
				for( let i = current + 1; i <= max; i++ ) {
					current2max.push( i );
				}
				this.current2max = current2max;
			}
		});
	</script>
</ui-pagination>
