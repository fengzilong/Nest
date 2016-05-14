import styles from './ui-tree-node.less';

<ui-tree-node>
	<span class="{ styles.state }">{ this.statusIcon() }</span>
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

		this.styles = styles;
		this.STATUS = STATUS;
		this.status = STATUS.UNCHECKED;
		this.statusIcon = () => {
			let icon = '';
			switch( this.status ) {
				case STATUS.CHECKED:
					icon = 'v';
					break;
				case STATUS.UNCHECKED:
					icon = '口';
					break;
				case STATUS.HALF_CHECKED:
					icon = '曰';
					break;
			}
			return icon;
		};

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
