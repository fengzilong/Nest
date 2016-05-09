import './ui-icon.less';

<ui-icon>
	<span class="iconfont">{ icon }</span>

	<script>
		const iconset = {
			'arrow-left': '&#xe600;',
			'arrow-right': '&#xe601;',
			loading: '&#xe602;',
			info: '&#xe608;',
		};

		const convert = str => {
			str = str.replace(/(\\u)(\w{4})/gi,function($0){
				return (String.fromCharCode(parseInt((escape($0).replace(/(%5Cu)(\w{4})/g,"$2")),16)));
			});
			str = str.replace(/(&#x)(\w{4});/gi,function($0){
				return String.fromCharCode(parseInt(escape($0).replace(/(%26%23x)(\w{4})(%3B)/g,"$2"),16));
			});
			return str;
		};

		this.one('update', () => {
			this.icon = this.opts.icon;
			if( !this.opts.icon && iconset[ this.opts.type ] ) {
				this.icon = convert( iconset[ this.opts.type ] );
			}
		});
	</script>
</ui-icon>
