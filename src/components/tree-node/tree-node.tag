import styles from './tree-node.less';

<ui-tree-node>
	<ui-checkbox checked="{ false }" on-change="{ onCheckChange }"></ui-checkbox>
	<span class="{ styles.title }" onclick="{ onCheckChange }">{ opts.title }</span>
	<div class="{ styles.children }">
		<yield></yield>
	</div>

	<script>
		const STATUS = {
			CHECKED: 0,
			UNCHECKED: 1,
			HALF_CHECKED: 2
		};
		const checkedStatus = status => {
			let tmp = '';
			switch( status ) {
				case STATUS.CHECKED:
					tmp = true;
					break;
				case STATUS.UNCHECKED:
					tmp = false;
					break;
				case STATUS.HALF_CHECKED:
					tmp = '-';
					break;
			}
			return tmp;
		};
		const checkbox = this.tags[ 'ui-checkbox' ];

		this.styles = styles;
		this.status = STATUS.UNCHECKED;

		let lastChecked = checkedStatus( this.status );
		this.on('updated', () => {
			checkbox.checked = checkedStatus( this.status );
			if( checkbox.checked !== lastChecked ) {
				checkbox.update();

				// trigger on tree node
				this.trigger( 'change', this.opts.key, checkbox.checked, lastChecked );
				this.opts.onChange && this.opts.onChange( this.opts.key, checkbox.checked, lastChecked );

				// trigger on root tree
				this.tree.trigger( 'change', this.opts.key, checkbox.checked, lastChecked );
				this.tree.opts.onChange && this.tree.opts.onChange( this.opts.key, checkbox.checked, lastChecked );

				lastChecked = checkbox.checked;
			}
		});

		this.on('mount', () => {
			let parent = this.parent;
			if( parent.root.tagName === 'UI-TREE' ) {
				this.tree = parent;
			} else if( parent.tree ) {
				this.tree = parent.tree;
			}

			this.tree.nodes[ this.treeNodeId ] = this;

			let currentTreeNodeId = this.treeNodeId || '';

			let treeNodes = this.tags[ 'ui-tree-node' ];
			if( !treeNodes ) {
				treeNodes = [];
			} else if( typeof treeNodes.length === 'undefined' ) {
				treeNodes = [ treeNodes ];
			}

			for( let i = 0, len = treeNodes.length; i < len; i++ ) {
				treeNodes[ i ].treeNodeId = currentTreeNodeId + i + '';
			}
		});

		this.onCheckChange = () => {
			this.tree.trigger( 'tree-node-change', this.treeNodeId );
		};
	</script>
</ui-tree-node>
