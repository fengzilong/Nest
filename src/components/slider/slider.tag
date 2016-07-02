import styles from './slider.less';
import '../tooltip';

<ui-slider>
	<div class="{ styles.base }">
		<div name="handle" class="{ styles.handle }" style="left: { offsetRate + '%' };" onmousedown="{ onMouseDown }"></div>

		<div name="tracker" class="{ styles.tracker }"></div>

		<ui-tooltip title="{ tipContent }" trigger="manual" show="{ showTooltip }" placement="{ opts.tipPlacement || 'top' }" track="{ handle }"></ui-tooltip>
	</div>

	<script>
		this.styles = styles;
		this.offsetRate = 0;
		this.showTooltip = false;
		this.tipContent = 0;

		const min = this.opts.min || 0;
		const max = this.opts.max || 100;
		const step = this.opts.step || 1;
		const stepPercent = step / ( max - min );

		let trackerWidth = 0;

		this.onMouseDown = e => {
			const target = e.target;
			const initPageX = e.pageX;
			const initOffsetRate = this.offsetRate;

			this.showTooltip = true;

			const onMouseUp = () => {
				this.showTooltip = false;
				this.update();
				if( this.offsetRate !== initOffsetRate ) {
					this.opts.onChanged && this.opts.onChanged( this.offsetRate );
				}
				document.removeEventListener( 'mousemove', onMouseMove, false );
				document.removeEventListener( 'mouseup', onMouseUp, false );
			}

			const onMouseMove = e => {
				let offsetX = e.pageX - initPageX;
				let moved = offsetX / trackerWidth;

				// moved
				moved = Math.round( moved / stepPercent ) * stepPercent;

				this.offsetRate = initOffsetRate + moved * 100;

				// offsetRate -> min === 0 && max === 100
				if( this.offsetRate < 0 ) {
					this.offsetRate = 0;
				}
				if( this.offsetRate > 100 ) {
					this.offsetRate = 100;
				}

				if( typeof this.opts.tipFormatter === 'function' ) {
					this.tipContent = this.opts.tipFormatter( this.offsetRate );
				} else {
					this.tipContent = parseInt( this.offsetRate / 100 * ( max - min ) + min );
				}
				
				this.update();

				if( this.offsetRate !== initOffsetRate ) {
					this.opts.onChange && this.opts.onChange( this.offsetRate );
				}
			}

			document.addEventListener( 'mouseup', onMouseUp, false );
			document.addEventListener( 'mousemove', onMouseMove, false );
		};

		this.one('updated', () => {
			trackerWidth = this.tracker.clientWidth;
		});
	</script>
</ui-slider>
