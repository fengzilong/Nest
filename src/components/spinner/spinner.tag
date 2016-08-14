import styles from './spinner.less';

<ui-spinner>
	<div class="{ styles.rect } { styles.rect1 }"></div>
	<div class="{ styles.rect } { styles.rect2 }"></div>
	<div class="{ styles.rect } { styles.rect3 }"></div>

	<script>
		this.styles = styles;
	</script>
</ui-spinner>
