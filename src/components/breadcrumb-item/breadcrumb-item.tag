<ui-breadcrumb-item>
	<yield></yield>
	<span class="{ styles.sep }">{ sep }</span>

	<script>
		import styles from './breadcrumb-item.less';

		this.styles = styles;
		this.sep = '/';
	</script>
</ui-breadcrumb-item>
