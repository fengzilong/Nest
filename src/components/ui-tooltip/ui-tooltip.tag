import styles from './ui-tooltip.less';
import domAlign from 'dom-align';

<ui-tooltip>
	<div name="t" class="{ styles.target }">
		<yield></yield>
	</div>

	<div if="{ triggered }" name="s" class="{ styles.base } { styles[ opts.placement ] }">
		<div class="{ styles.arrow }"></div>
		<div class="{ styles.content }">
			{ opts.title }
		</div>
	</div>

	<script>
		this.styles = styles;
		this.placement = this.opts.placement;
		this.triggered = false;

		const show = () => {
			this.triggered = true;
			this.update();
			domAlign( this.s, this.t, {
				points,
				offset
			} );
		};

		const hide = () => {
			this.triggered = false;
			this.update();
		};

		this.on('mount', () => {
			let points = [ 'tc', 'bc' ];
			let offset = [ 0, 0 ];
			switch( this.placement ) {
				case 'top':
					points = [ 'bc', 'tc' ];
					offset = [ 0, -1 ];
					break;
				case 'bottom':
					points = [ 'tc', 'bc' ];
					offset = [ 0, 1 ];
					break;
				case 'left':
					points = [ 'cr', 'cl' ];
					offset = [ -2, 0 ];
					break;
				case 'right':
					points = [ 'cl', 'cr' ];
					offset = [ 2, 0 ];
					break;
			}

			this.t.addEventListener('mouseenter', show, false);
			this.t.addEventListener('mouseleave', hide, false);
		});

		this.on('unmount', () => {
			this.t.removeEventListener('mouseenter', show, false);
			this.t.removeEventListener('mouseleave', hide, false);
		});
	</script>
</ui-tooltip>
