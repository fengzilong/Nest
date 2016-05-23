import classNames from 'classnames';
import styles from './ui-input.less';

<ui-input>
	<input
		class="{ uiCls } { stateCls }"
		type="{ opts.type || 'text' }"
		placeholder="{ opts.placeholder }"
		onchange="{ onChange }"
		oninput="{ onInput }"
		onfocus="{ onFocus }"
		onblur="{ onBlur }"
		disabled="{ opts.__disabled === true }"
		value="{ opts.value }"
	/>

	<script>
		const isUndefined = v => typeof v === 'undefined';

		this.uiCls = classNames({
			[ styles.base ]: true,
			[ styles.sm ]: !isUndefined( this.opts.sm ),
			[ styles.lg ]: !isUndefined( this.opts.lg ),
		});

		this.on('update', () => {
			this.stateCls = classNames({
				[ styles.disabled ]: opts.__disabled === true
			});
		});

		this.onChange = () => {
			this.opts.onChange && this.opts.onChange();
		};

		this.onInput = () => {
			this.opts.onInput && this.opts.onInput();
		};

		this.onFocus = () => {
			this.opts.onFocus && this.opts.onFocus();
		};

		this.onBlur = () => {
			this.opts.onBlur && this.opts.onBlur();
		};
	</script>
</ui-input>
