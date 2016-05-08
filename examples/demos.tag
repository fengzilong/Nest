<demos>
	<br />
	<br />

	<!-- ui-radio-button -->

	<ui-radio-group>
		<ui-radio-button value="bj">北京</ui-radio-button><ui-radio-button value="sh">上海</ui-radio-button><ui-radio-button value="gz">广州</ui-radio-button><ui-radio-button value="hz">杭州</ui-radio-button>
	</ui-radio-group>


	<br />
	<br />

	<!-- ui-badge -->

	<ui-badge count="1000" max="999">
		<div style="width: 40px;height: 40px;background-color: #DDD;border-radius: 5px;"></div>
	</ui-badge>

	<ui-badge count="50" max="99" dot="{ true }">
		<div style="width: 40px;height: 40px;background-color: #DDD;border-radius: 5px;"></div>
	</ui-badge>

	<br />
	<br />

	<!-- ui-progress -->

	<ui-progress-bar value="50" label></ui-progress-bar>
	<br />
	<ui-progress-bar value="60" label success></ui-progress-bar>
	<br />
	<ui-progress-bar value="70" label warning></ui-progress-bar>
	<br />
	<ui-progress-bar value="80" label danger></ui-progress-bar>

	<br />

	<ui-popover content="悬浮内容" direction="top">
		鼠标移到这里
	</ui-popover>

	<br />
	<br />
	<br />
	<br />
	<br />

	<!-- ui -->
	<ui-button primary lg block>
		{ parent.text }
	</ui-button>

	<br />
	<br />

	<ui-button primary>
		{ parent.text }
	</ui-button>

	<ui-button success>
		{ parent.text }
	</ui-button>

	<ui-button warning>
		{ parent.text }
	</ui-button>

	<ui-button danger>
		{ parent.text }
	</ui-button>

	<br />
	<br />

	<ui-button primary ghost>
		{ parent.text }
	</ui-button>

	<ui-button success ghost>
		{ parent.text }
	</ui-button>

	<ui-button warning ghost>
		{ parent.text }
	</ui-button>

	<ui-button danger ghost>
		{ parent.text }
	</ui-button>

	<br />
	<br />

	<!-- size -->

	<ui-button sm>
		{ parent.text }
	</ui-button>

	<ui-button md>
		{ parent.text }
	</ui-button>

	<ui-button lg>
		{ parent.text }
	</ui-button>

	<br />
	<br />

	<!-- with icon -->

	<ui-button primary>
		<ui-icon icon="left"></ui-icon>
		{ parent.text }
	</ui-button>

	<ui-button primary>
		{ parent.text }
		<ui-icon icon="right"></ui-icon>
	</ui-button>

	<br />
	<br />

	<!-- loading -->

	<ui-button primary loading="{ true }">
		正在加载中
	</ui-button>

	<br />
	<br />

	<!-- disabled -->

	<ui-button primary disabled="{ true }">
		{ parent.text }
	</ui-button>

	<br />
	<br />

	<!-- ui-link -->

	<div style="font-size: 14px;">
		文字文字文字文字文字文字<ui-link href="#">链接文字</ui-link>文字文字文字文字文字文字
		<br />
		<br />
		文字文字文字文字文字文字<ui-link success href="#">链接文字</ui-link>文字文字文字文字文字文字
		<br />
		<br />
		文字文字文字文字文字文字<ui-link warning href="#">链接文字</ui-link>文字文字文字文字文字文字
		<br />
		<br />
		文字文字文字文字文字文字<ui-link danger href="#">链接文字</ui-link>文字文字文字文字文字文字
	</div>

	<br />
	<br />

	<!-- ui-input -->

	<ui-input value="test value" placeholder="占位符" sm></ui-input>
	<ui-input placeholder="占位符"></ui-input>
	<ui-input placeholder="占位符" lg></ui-input>

	<br />
	<br />

	<ui-input placeholder="占位符" lg disabled="{ true }"></ui-input>

	<br />
	<br />

	<!-- ui-switch -->

	<ui-switch checked="{ true }" sm></ui-switch>
	<ui-switch checked="{ true }"></ui-switch>
	<ui-switch checked="{ true }" lg></ui-switch>
	<ui-switch checked="{ true }" disabled="{ true }" lg></ui-switch>

	<br />
	<br />

	<!-- ui-radio -->

	<ui-radio-group on-change="{ onRadioChange }" value="option1">
		<ui-radio value="option1">选项一</ui-radio>
		<ui-radio value="option2">选项二</ui-radio>
	</ui-radio-group>

	<br />
	<br />

	<!-- ui-checkbox -->

	<ui-checkbox-group on-change="{ onCheckboxChange }" value="{ ['option1', 'option2'] }">
		<ui-checkbox value="option1">选项一</ui-checkbox>
		<ui-checkbox value="option2">选项二</ui-checkbox>
		<ui-checkbox value="option3">选项三</ui-checkbox>
	</ui-checkbox-group>

	<br />
	<br />

	<ui-menu horizontal>
		<ui-menu-item text="菜单一"></ui-menu-item>
		<ui-menu-item text="菜单二"></ui-menu-item>
		<ui-menu-item text="菜单三"></ui-menu-item>

		<ui-submenu text="子菜单">
			<ui-menu-item text="菜单一"></ui-menu-item>
			<ui-menu-item text="菜单二"></ui-menu-item>
			<ui-menu-item text="菜单三"></ui-menu-item>
		</ui-submenu>

		<ui-menu-item text="菜单三"></ui-menu-item>
	</ui-menu>

	<script>
		var self = this;

		this.text = '按钮';

		this.onRadioChange = ( v, k ) => {
			console.log( 'radioChanged', v, k );
		};

		this.onCheckboxChange = ( v, k ) => {
			console.log( 'checkboxChanged', v, k);
		};

		this.on('mount', function(){

		});
	</script>
</demos>
