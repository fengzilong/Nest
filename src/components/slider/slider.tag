<ui-slider>
	<div class="{ styles.base }">
		<div
			name="handle"
			class="{ styles.handle }"
			style="left: { offsetRate + '%' };"
			onmousedown="{ onMouseDown }"
			onmouseenter="{ onMouseEnter }"
			onmouseleave="{ onMouseLeave }"
		></div>

		<div name="tracker" class="{ styles.tracker }">
			<div class="{ styles[ 'tracker-inner' ] }" style="width: { offsetRate + '%' };"></div>
		</div>

		<ui-tooltip
			title="{ tipContent }"
			trigger="manual"
			show="{ showTooltip }"
			placement="{ opts.tipPlacement || 'top' }"
			track="{ handle }"
			trackby="{ offsetRate }"
		></ui-tooltip>
	</div>

	<script>
		import styles from './slider.less';
		import '../tooltip';

		const min = this.opts.min || 0;
		const max = this.opts.max || 100;
		const step = this.opts.step || 1;
		const stepPercent = step / ( max - min ) * 100;
		const value = this.opts.value || min;

		this.styles = styles;
		this.showTooltip = false;
		this.offsetRate = value / ( max - min ) * 100;

		if( typeof this.opts.tipFormatter === 'function' ) {
			this.tipContent = this.opts.tipFormatter( this.offsetRate );
		} else {
			this.tipContent = parseInt( this.offsetRate / 100 * ( max - min ) + min );
		}

		let trackerWidth = 0;
		let isMouseDown = false;

		this.onMouseDown = e => {
			const target = e.target;
			const initPageX = e.pageX;
			const initOffsetRate = this.offsetRate;
			let lastPageX = initPageX;

			isMouseDown = true;
			this.showTooltip = true;

			const onMouseUp = () => {
				isMouseDown = false;
				this.showTooltip = false;
				this.update();
				if( this.offsetRate !== initOffsetRate ) {
					this.opts.onChanged && this.opts.onChanged( this.offsetRate );
				}
				document.removeEventListener( 'mousemove', onMouseMove, false );
				document.removeEventListener( 'mouseup', onMouseUp, false );
			}

			let moveDirection = 0;
			const onMouseMove = e => {
				moveDirection = e.pageX - lastPageX;
				lastPageX = e.pageX;

				let offsetX = e.pageX - initPageX;
				const moved = offsetX / trackerWidth * 100;
				const inferOffset = Math.round( ( initOffsetRate + moved ) / stepPercent ) * stepPercent;

				// 计算出的下一个step点需要与移动方向一致
				if(
					( moveDirection < 0 && inferOffset - this.offsetRate < 0 ) ||
					( moveDirection > 0 && inferOffset - this.offsetRate > 0 )
				) {
					this.offsetRate = inferOffset;
				}

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

		this.onMouseEnter = () => {
			this.showTooltip = true;
		};

		this.onMouseLeave = () => {
			if( !isMouseDown ) {
				this.showTooltip = false;
			}
		};

		this.one('updated', () => {
			trackerWidth = this.tracker.clientWidth;
		});
	</script>
</ui-slider>
