<ui-progress-bar>
	<div class="{ styles.outter }">
		<div class="{ styles.inner } { colorCls }" style="width: { opts.value }%;"></div>
	</div>
	<div if="{ typeof opts.label !== 'undefined' }" class="{ styles.label }">
		{ this.opts.value }%
	</div>

	<script>
		import styles from './progress-bar.less';
		import classNames from 'classnames';

		this.styles = styles;
		this.colorCls = classNames({
			[ styles.primary ]: true,
			[ styles.success ]: typeof this.opts.success !== 'undefined',
			[ styles.warning ]: typeof this.opts.warning !== 'undefined',
			[ styles.danger ]: typeof this.opts.danger !== 'undefined',
		});
	</script>
</ui-progress-bar>
