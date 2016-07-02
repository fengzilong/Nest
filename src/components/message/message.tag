import styles from './message.less';
import '../icon';

<ui-message>
	<ui-icon type="info" class="{ styles.icon }"></ui-icon>
	<div>{ opts.content }<yield></yield></div>

	<script>
		this.styles = styles;
	</script>
</ui-message>
