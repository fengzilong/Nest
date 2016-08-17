import styles from './collapse-pane.less';

<ui-collapse-pane>
	<div class="{ styles.title }">
		<div class="{ styles[ 'title-inner' ] }">
			<ui-icon type="caret-right"></ui-icon>
			{ opts.title }
		</div>
	</div>
	<div class="{ styles.content } { expand ? styles[ 'content-active' ] : styles[ 'content-inactive' ] }">
		<div class="{ styles[ 'content-box' ] }">
			<yield></yield>
		</div>
	</div>

	<script>
		this.styles = styles;
		this.expand = false;

		let onToggle = () => {
			this.expand = !this.expand;
			this.update();
		};
		this.on('mount', () => {
			this.root.addEventListener('click', onToggle, false);
		});
		this.on('unmount', () => {
			this.root.removeEventListener('click', onToggle, false);
		});
	</script>
</ui-collapse-pane>
