<ui-submenu>
	{ opts.text }

	<div class="{ styles.items }">
		<yield></yield>
	</div>

	<script>
		import { items } from './submenu.less';
		
		this.styles = {
			items: items
		}
	</script>
</ui-submenu>
