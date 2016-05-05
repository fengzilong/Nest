import classNames from 'classnames';
import styles from './ui-switch.less';

<ui-switch>
	<div class="{ uiCls } { stateCls }" onclick="{ root.$toggle }"></div>

	<script>
		this.disabled = this.opts.__disabled || false;
		let isOn = !!this.opts.__checked;

		this.styles = styles;
		this.uiCls = classNames({
			[ styles.base ]: true,
			[ styles.sm ]: typeof this.opts.sm !== 'undefined',
			[ styles.lg ]: typeof this.opts.lg !== 'undefined',
		});

		this.root.$toggle = e => {
			if( this.disabled ) {
				return;
			}
			isOn = !isOn;
			if( !e ) {
				this.update();
			}
			this.onChange && this.onChange( isOn );
		};

		this.root.$check = () => {
			isOn = true;
			this.update();
			this.onChange && this.onChange( isOn );
		};

		this.root.$uncheck = () => {
			isOn = false;
			this.update();
			this.onChange && this.onChange( isOn );
		};

		this.root.$enable = () => {
			this.disabled = false;
			this.update();
		};

		this.root.$disable = () => {
			this.disabled = true;
			this.update();
		};

		this.on('update', () => {
			this.stateCls = classNames({
				[ styles.on ]: isOn,
				[ styles.off ]: !isOn,
				[ styles.disabled ]: this.disabled,
			});
		});
	</script>
</ui-switch>
