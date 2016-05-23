import classNames from 'classnames';
import styles from './ui-button.less';
import '../ui-icon';

<ui-button>
	<button onclick="{ onClick }" class="{ uiCls } { opts.disabled ? styles.disabled : '' }">
		<ui-icon type="loading" if="{ opts.loading }" class="{ styles.loading }"></ui-icon>
		<yield></yield>
	</button>

	<script>
		this.styles = styles;

		const isUndefined = v => typeof v === 'undefined';

		this.uiCls = classNames({
			[ styles.base ]: true,
			[ styles.primary ]: !isUndefined( this.opts.primary ),
			[ styles.success ]: !isUndefined( this.opts.success ),
			[ styles.warning ]: !isUndefined( this.opts.warning ),
			[ styles.danger ]: !isUndefined( this.opts.danger ),
			[ styles.ghost ]: !isUndefined( this.opts.ghost ),
			[ styles.lg ]: !isUndefined( this.opts.lg ),
			[ styles.md ]: isUndefined( this.opts.lg ) && isUndefined( this.opts.sm ),
			[ styles.sm ]: !isUndefined( this.opts.sm ),
		});

		this.onClick = () => {
			if( this.opts.__disabled ) {
				return;
			}

			this.opts.onClick && this.opts.onClick();
		};
	</script>
</ui-button>
