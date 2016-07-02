import styles from './collapse.less';

<ui-collapse>
	<yield></yield>

	<script>
		this.styles = styles;

		this.on('mount', () => {

		});
	</script>
</ui-collapse>
