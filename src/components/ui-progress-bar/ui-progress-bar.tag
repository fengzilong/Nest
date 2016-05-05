import styles from './ui-progress-bar.less';
import classNames from 'classnames';

<ui-progress-bar>
	<div class="{ styles.outter } { sizeCls }">
		<div class="{ styles.inner } { colorCls }" style="width: { opts.value }%;"></div>
	</div>
	<div if="{ typeof opts.label !== 'undefined' }" class="{ styles.label }">
		{ this.opts.value }%
	</div>

	<script>
		this.styles = styles;
		this.sizeCls = classNames({
			[ styles.sm ]: typeof this.opts.sm !== 'undefined',
			[ styles.lg ]: typeof this.opts.lg !== 'undefined',
		});
		this.colorCls = classNames({
			[ styles.primary ]: true,
			[ styles.success ]: typeof this.opts.success !== 'undefined',
			[ styles.warning ]: typeof this.opts.warning !== 'undefined',
			[ styles.danger ]: typeof this.opts.danger !== 'undefined',
		});
	</script>
</ui-progress-bar>
