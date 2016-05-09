import styles from './ui-message.less';

<ui-message>
	<ui-icon type="info" class="{ styles.icon }"></ui-icon>
	<div>{ opts.content }<yield></yield></div>

	<script>
		this.styles = styles;
	</script>
</ui-message>
