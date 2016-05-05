import './ui-radio-group.less';

<ui-radio-group>
	<yield></yield>

	<script>
		this.on('mount', () => {
			let radios = this.tags[ 'ui-radio' ];

			if( !radios ){
				return;
			}

			if( !radios.length ){
				radios = [ radios ];
			}

			let check = idx => {
				for( let i = 0, len = radios.length; i < len; i++ ) {
					if( idx === i ){
						radios[ i ].checked = true;
					} else {
						radios[ i ].checked = false;
					}
				}
				this.update();
			};

			let lastChecked = null;

			let onChange = this.opts.onChange || function(){};
			for( let i = 0, len = radios.length; i < len; i++ ) {
				radios[ i ].on('change', () => {
					check( i );

					if( i !== lastChecked ){
						lastChecked = i;
						onChange( radios[ i ].opts.value, i );
					}
				});
			}
		});
	</script>
</ui-radio-group>
