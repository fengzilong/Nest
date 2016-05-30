import styles from './ui-breadcrumb-item.less';

<ui-breadcrumb-item>
	<yield></yield>
	<span class="{ styles.sep }">{ sep }</span>

	<script>
		this.styles = styles;
		this.sep = '/';

	</script>
</ui-breadcrumb-item>
