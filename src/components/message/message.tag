<ui-message>
	<ui-icon type="info" class="{ styles.icon }"></ui-icon>
	<div>{ opts.content }<yield></yield></div>

	<script>
		import styles from './message.less';
		import '../icon';
		
		this.styles = styles;
	</script>
</ui-message>
