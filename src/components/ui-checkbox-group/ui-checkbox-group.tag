import './ui-checkbox-group.less';

<ui-checkbox-group>
	<yield></yield>

	<script>
	this.on('mount', () => {
		let checkboxes = this.tags[ 'ui-checkbox' ];

		if( !checkboxes ){
			return;
		}

		if( !checkboxes.length ){
			checkboxes = [ checkboxes ];
		}

		let getChecked = () => {
			let tmp = {
				keys: [],
				values: []
			};

			for (let i = 0; i < checkboxes.length; i++) {
				if( checkboxes[ i ].checked ){
					tmp.keys.push( i );
					tmp.values.push( checkboxes[ i ].opts.value );
				}
			}

			return tmp;
		};

		let onChange = this.opts.onChange || function(){};
		for ( let i = 0, len = checkboxes.length; i < len; i++ ) {
			checkboxes[ i ].on('change', () => {
				let checked = getChecked();
				onChange( checked.values, checked.keys );
			});
		}
	});
	</script>
</ui-checkbox-group>
