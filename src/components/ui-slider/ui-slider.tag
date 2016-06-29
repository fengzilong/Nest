import '../ui-tooltip';
import styles from './ui-slider.less';

<ui-slider>
	<div class="{ styles.base }">
		<div name="handle" class="{ styles.handle }" style="left: { offsetRate + '%' };" onmousedown="{ onMouseDown }"></div>

		<div name="tracker" class="{ styles.tracker }"></div>

		<ui-tooltip title="{ tipContent }" trigger="manual" show="{ showTooltip }" placement="bottom" track="{ handle }"></ui-tooltip>
	</div>

	<script>
		this.styles = styles;
		this.offsetRate = 0;
		this.showTooltip = false;
		this.tipContent = 0;

		let trackerWidth = 0;

		this.onMouseDown = e => {
			const target = e.target;
			const initPageX = e.pageX;
			const initOffsetRate = this.offsetRate;

			this.showTooltip = true;

			const onMouseUp = () => {
				this.showTooltip = false;
				this.update();
				document.removeEventListener( 'mousemove', onMouseMove, false );
				document.removeEventListener( 'mouseup', onMouseUp, false );
			}
			document.addEventListener( 'mouseup', onMouseUp, false );

			const onMouseMove = e => {
				let offsetX = e.pageX - initPageX;
				this.offsetRate = initOffsetRate + offsetX / trackerWidth * 100;

				console.log( offsetX / trackerWidth * 100 );

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
					this.tipContent = parseInt( this.offsetRate );
				}
				this.update();
			}
			document.addEventListener( 'mousemove', onMouseMove, false );
		};

		this.one('updated', () => {
			trackerWidth = this.tracker.clientWidth;
		});
	</script>
</ui-slider>
