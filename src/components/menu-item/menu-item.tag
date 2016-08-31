<ui-menu-item>
	<div class="{ classnames }">
		{ opts.text }
	</div>

	<script>
		import { base, active } from './menu-item.less';
		import classNames from 'classnames';

		this.on('mount', () => {
		});

		this.on('update', () => {
			this.classnames = classNames({
				[ base ]: true
			});
		});
	</script>
</ui-menu-item>
