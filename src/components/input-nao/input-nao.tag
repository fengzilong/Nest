import './input-nao.less';

<ui-input-nao>
	<span class="input input--nao { input--filled : hasValue }" name="container">
		<input class="input__field input__field--nao" type="text" onchange="{ onChange }" />
		<label class="input__label input__label--nao">
			<span class="input__label-content input__label-content--nao">{ opts.placeholder }</span>
		</label>
		<svg class="graphic graphic--nao" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
			<path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"/>
		</svg>
	</span>

	<script>
		let v = this.opts.value;
		this.hasValue = !( typeof v === 'undefined' || v === '' );

		this.onChange = ( e ) => {
			let v = e.target.value;
			this.hasValue = !( typeof v === 'undefined' || v === '' );
		};
	</script>
</ui-input-nao>
