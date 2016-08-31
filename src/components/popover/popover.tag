<ui-popover>
	<yield></yield>

	<div class="{ styles.popover }">
		hover
	</div>

	<script>
		import styles from './popover.less';
		
		this.styles = styles;

		this.on('mount', () => {
			this.root.addEventListener('mouseenter', () => {
				console.log( 'enter' );
			}, false)
		});
	</script>
</ui-popover>
