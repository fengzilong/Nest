import './ui-icon.less';
import classNames from 'classnames';

<ui-icon>
	<span class="iconfont { classnames }"></span>

	<script>
		this.on('update', () => {
			const map = {
				left: 'icon-iconfontunie61e',
				right: 'icon-iconfontunie61f',
				loading: 'icon-loading',
			};

			this.classnames = classNames({
				[ map[ 'left' ] ]: this.opts.icon === 'left',
				[ map[ 'right' ] ]: this.opts.icon === 'right',
				[ map[ 'loading' ] ]: this.opts.icon === 'loading',
			});
		});
	</script>
</ui-icon>
