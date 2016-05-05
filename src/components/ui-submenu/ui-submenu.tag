import {
	items
} from './ui-submenu.less';

<ui-submenu>
	{ opts.text }

	<div class="{ styles.items }">
		<yield></yield>
	</div>

	<script>
		this.styles = {
			items: items
		}
	</script>
</ui-submenu>
