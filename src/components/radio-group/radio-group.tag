import './radio-group.less';

<ui-radio-group>
	<yield></yield>

	<script>
		this.on('mount', () => {
			let radioElements = [];
			let radios = this.tags[ 'ui-radio' ];
			let radioButtons = this.tags[ 'ui-radio-button' ];

			if( !radios ) {
				radios = [];
			}

			if( typeof radios.length === 'undefined' ) {
				radios = [ radios ];
			}

			if( !radioButtons ) {
				radioButtons = [];
			}

			if( typeof radioButtons.length === 'undefined' ) {
				radioButtons = [ radioButtons ];
			}

			radioElements.push.apply( radioElements, radios );
			radioElements.push.apply( radioElements, radioButtons );

			let check = idx => {
				for( let i = 0, len = radioElements.length; i < len; i++ ) {
					if( idx === i ){
						radioElements[ i ].checked = true;
					} else {
						radioElements[ i ].checked = false;
					}
				}
				this.update();
			};

			let lastChecked = this.opts.value;

			let onChange = this.opts.onChange || function(){};
			for( let i = 0, len = radioElements.length; i < len; i++ ) {
				if( this.opts.value && radioElements[ i ].opts.value === this.opts.value ) {
					check( i );
				}
				radioElements[ i ].on('change', () => {
					check( i );

					if( i !== lastChecked ){
						lastChecked = i;
						onChange( radioElements[ i ].opts.value, i );
					}
				});
			}
		});
	</script>
</ui-radio-group>
