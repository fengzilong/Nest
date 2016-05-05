import styles from './ui-popover.less';

<ui-popover>
	<yield></yield>

	<div class="{ styles.popover }">
		悬浮
	</div>

	<script>
		this.styles = styles;

		this.on('mount', () => {
			this.root.addEventListener('mouseenter', () => {
				console.log( 'enter' );
			}, false)
		});
	</script>
</ui-popover>
