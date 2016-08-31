<ui-json-tree>
	<script>
		import styles from './json-tree.less';
		
		const hasOwn = Object.hasOwnProperty;
		const each = ( obj, fn ) => {
			if( Array.isArray( obj ) ) {
				for( let i = 0, len = obj.length; i < len; i++ ) {
					fn( obj[ i ], i );
				}
			} else {
				for( let i in obj ) {
					if( hasOwn.call( obj, i ) ) {
						fn( obj[ i ], i );
					}
				}
			}
		};
		const buildStart = () => {
			return `
			<div class="node">
			`;
		};
		const buildEnd = () => {
			return `
			</div>
			`;
		};
		const build = ( k, v ) => {
			let hasCaret = false;
			let type = typeof v;
			if( typeof v === 'string' ) {
				v = `"${v}"`;
			} else if( Array.isArray( v ) ) {
				v = `Array[${v.length}]`;
				hasCaret = true;
			} else if( type === 'object' ) {
				v = `Object`;
				hasCaret = true;
			}
			return `
			<div class="title">` +
			( hasCaret ? `<div class="iconfont caret caret-right">&#xe603;</div><div class="iconfont caret caret-down">&#xe604;</div>` : `<div class="iconfont caret"></div>` ) +
			`
				<div>
					<span class="key">${k}:</span>
					<span class="${type}">${v}</span>
				</div>
			</div>`;
		};
		const buildChildrenStart = () => {
			return `
			<div class="children">
			`;
		};
		const buildChildrenEnd = () => {
			return `
			</div>
			`;
		};
		const buildJsonTree = json => {
			let tmp = '';
			each(json, ( v, k ) => {
				tmp += buildStart();
				if( typeof v === 'number' ) {
					// console.log( k, '->', v );
					tmp = tmp + build( k, v );
				} else if ( typeof v === 'string' ) {
					// console.log( k, '->', v );
					tmp = tmp + build( k, v );
				} else if( typeof v === 'boolean' ) {
					// console.log( k, '->', v );
					tmp = tmp + build( k, v );
				} else if( Array.isArray( v ) ) {
					// console.log( k, '->' );
					tmp += build( k, v );
					tmp += buildChildrenStart();
					tmp += buildJsonTree( v );
					tmp += buildChildrenEnd();
				} else if( typeof v === 'object' ) {
					// console.log( k, '->' );
					tmp += build( k, v );
					tmp += buildChildrenStart();
					tmp += buildJsonTree( v );
					tmp += buildChildrenEnd();
				}
				tmp += buildEnd();
			})
			return tmp;
		};

		let last;
		this.on('updated', () => {
			if( this.opts.json !== last ) {
				let result = buildJsonTree( this.opts.json );
				this.root.innerHTML = result;
				// bind
				let nodes = this.root.querySelectorAll( '.title' );
				nodes && Array.prototype.slice.call( nodes ).forEach(node => {
					node.addEventListener('click', () => {
						if( !node.nextElementSibling ) {
							return;
						}

						let parent = node.parentNode;
						if( parent.classList.contains( 'open' ) ) {
							parent.classList.remove( 'open' );
						} else {
							parent.classList.add( 'open' );
						}
					}, false);
				});
				last = this.opts.json;
			}
		});

		this.on('mount', () => {

		});
	</script>
</ui-json-tree>
