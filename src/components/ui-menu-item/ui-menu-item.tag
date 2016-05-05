import {
	base,
	active
} from './ui-menu-item.less';
import classNames from 'classnames';

<ui-menu-item>
	<div class="{ classnames }">
		{ opts.text }
	</div>

	<script>
		this.on('mount', () => {
		});

		this.on('update', () => {
			this.classnames = classNames({
				[ base ]: true
			});
		});
	</script>
</ui-menu-item>
