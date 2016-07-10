import styles from './tooltip.less';
import domAlign from 'dom-align';

<ui-tooltip>
	<div name="t" class="{ styles.target }">
		<yield></yield>
	</div>

	<div show="{ ( !manual && triggered ) || ( manual && opts.show ) }" name="s" class="{ styles.base } { styles[ opts.placement || defaultPlaceholder ] }">
		<div class="{ styles.arrow }"></div>
		<div class="{ styles.content }">
			{ opts.title }
		</div>
	</div>

	<script>
		this.styles = styles;
		this.manual = false;
		this.triggered = false;
		this.defaultPlaceholder = 'top';

		let points = [ 'tc', 'bc' ];
		let offset = [ 0, 0 ];
		switch( this.opts.placement || this.defaultPlaceholder ) {
			case 'top':
				points = [ 'bc', 'tc' ];
				offset = [ 0, -2 ];
				break;
			case 'bottom':
				points = [ 'tc', 'bc' ];
				offset = [ 0, 2 ];
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

		const checkClickOutSide = e => {
			if( !this.root.contains( e.target ) ) {
				hide();
			}
		}

		let lastTrackBy;

		this.on('updated', () => {
			const shallShowTooltip = ( !this.manual && this.triggered ) ||
				( this.manual && this.opts.show );
			const isTrackValid = this.opts.track &&
			( this.opts.track instanceof HTMLElement );

			if( !shallShowTooltip || !isTrackValid || typeof this.opts.trackby === 'undefined' ) {
				return;
			}

			// TODO: trackby support array
			// if trackby changed, trigger align
			if( this.opts.trackby !== lastTrackBy ) {
				lastTrackBy = this.opts.trackby;
				domAlign( this.s, this.opts.track, {
					points,
					offset
				} );
			}
		});

		this.on('before-mount', () => {
			const trigger = this.opts.trigger || 'hover';

			// TODO: track first child element by default if track is not specificed

			switch( trigger ) {
				case 'hover':
					this.t.addEventListener('mouseenter', show, false);
					this.t.addEventListener('mouseleave', hide, false);
					break;
				case 'click':
					this.t.addEventListener('click', show, false);
					document.addEventListener('click', checkClickOutSide, false);
					break;
				case 'manual':
					// control tooltip visibility on your own
					this.manual = true;
					break;
			}
		});

		this.on('unmount', () => {
			const trigger = this.opts.trigger || 'hover';

			switch( trigger ) {
				case 'hover':
					this.t.removeEventListener('mouseenter', show, false);
					this.t.removeEventListener('mouseleave', hide, false);
					break;
				case 'click':
					this.t.removeEventListener('click', show, false);
					document.removeEventListener('click', checkClickOutSide, false);
					break;
				case 'manual':
					break;
			}
		});
	</script>
</ui-tooltip>
