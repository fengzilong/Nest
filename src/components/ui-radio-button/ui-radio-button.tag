import styles from './ui-radio-button.less';

<ui-radio-button>
	<span class="{ styles.base }">
		<yield></yield>
	</span>

	<script>
		this.styles = styles;
	</script>
</ui-radio-button>
