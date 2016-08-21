<ui-tree>
	<yield></yield>

	<script>
		const STATUS = {
			CHECKED: 0,
			UNCHECKED: 1,
			HALF_CHECKED: 2
		};

		this.nodes = {};
		this.one('update', () => {
			let treeNodes = this.tags[ 'ui-tree-node' ];
			if( !treeNodes ) {
				treeNodes = [];
			} else if( typeof treeNodes.length === 'undefined' ) {
				treeNodes = [ treeNodes ];
			}

			// first level tree node in tree
			for( let i = 0, len = treeNodes.length; i < len; i++ ) {
				treeNodes[ i ].treeNodeId = i + '';
			}
		});

		this.on( 'tree-node-change', id => {
			let nodes = this.nodes;

			// 修改当前节点

			if( nodes[ id ].status !== STATUS.CHECKED ) {
				nodes[ id ].status = STATUS.CHECKED;
			} else {
				nodes[ id ].status = STATUS.UNCHECKED;
			}

			// 修改子孙节点

			if( nodes[ id ].status === STATUS.CHECKED ) {
				for( let i in nodes ) {
					if( i !== id && i.startsWith( id ) ) {
						nodes[ i ].status = STATUS.CHECKED;
						nodes[ i ].update();
					}
				}
			} else {
				for( let i in nodes ) {
					if( i !== id && i.startsWith( id ) ) {
						nodes[ i ].status = STATUS.UNCHECKED;
						nodes[ i ].update();
					}
				}
			}

			// 修改祖先节点

			if( nodes[ id ].status === STATUS.CHECKED ) {
				let parentId = id.slice( 0, -1 );
				let hasChildNotChecked = false;
				// 非根节点
				while( parentId.length > 0 ) {
					// 父节点的子孙节点中存在半选或者未选，则父节点是半选(当前节点选中了)
					if( !hasChildNotChecked ) {
						for( let i in nodes ) {
							if( i !== parentId && i.startsWith( parentId ) ) {
								if( nodes[ i ].status !== STATUS.CHECKED ) {
									hasChildNotChecked = true;
									break;
								}
							}
						}
					}

					if( hasChildNotChecked ) {
						nodes[ parentId ].status = STATUS.HALF_CHECKED;
					} else {
						nodes[ parentId ].status = STATUS.CHECKED;
					}
					nodes[ parentId ].update();

					parentId = parentId.slice( 0, -1 );
				}
			} else {
				let parentId = id.slice( 0, -1 );
				let hasChildChecked = false;
				// 非根节点
				while( parentId.length > 0 ) {
					// 父节点的子孙节点中存在选中状态，则父节点是半选(或者全未选)
					if( !hasChildChecked ) {
						for( let i in nodes ) {
							if( i !== parentId && i.startsWith( parentId ) ) {
								if( nodes[ i ].status === STATUS.CHECKED ) {
									hasChildChecked = true;
									break;
								}
							}
						}
					}

					if( hasChildChecked ) {
						nodes[ parentId ].status = STATUS.HALF_CHECKED;
					} else {
						nodes[ parentId ].status = STATUS.UNCHECKED;
					}
					nodes[ parentId ].update();

					parentId = parentId.slice( 0, -1 );
				}
			}
		} );
	</script>
</ui-tree>
