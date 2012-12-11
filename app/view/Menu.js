Ext.define('GuideApp.view.Menu', { 
	extend: 'Ext.Panel',
	xtype: 'MenuView',
	id:  'MenuView',       
	
	config: {
		cls: 'cls-menu',/*backgroundImg가 들어가는 class입니다*/
		
		/**************Items**************/
		items: [
			//화면비율을 위한 Titlebar와 Toolbar
			// TitleBar
			{
				xtype: 'titlebar',				
				docked: 'top',
				height : '3.6em',
				cls: 'cls-title',
				
				title: '길라잡이',
			},
			//ToolBar
			{
				xtype: 'toolbar',
				docked: 'bottom',
				cls: 'cls-toolbar',
			},
			{
				xtype: 'button',
				itemId: 'button_basic',
				cls:'cls-menu-basicButton',
			},
			{
				xtype: 'button',
				itemId: 'button_call',
				cls:'cls-menu-callButton',
			},
			{
				xtype: 'button',
				itemId: 'button_message',
				cls:'cls-menu-messageButton',
			}
		],
		
		/**************Listeners**************/
		listeners: [
			{
				fn: 'onButton_Basic_Tap',
				event: 'tap',
				delegate: '#button_basic'
			},
			{
				fn: 'onButton_Call_Tap',
				event: 'tap',
				delegate: '#button_call'
			},
			{
				fn: 'onButton_Message_Tap',
				event: 'tap',
				delegate: '#button_message'
			}
		]
	},
	
	/**************Function for Listeners**************/
	onButton_Basic_Tap: function(button, e, options) {
		Ext.getCmp('Root').getLayout().setAnimation({type:'slide', direction:'left'});
		Ext.getCmp('Root').setActiveItem(1);
		Ext.getCmp('Step1_Basic').setActiveItem(0);
	},
	onButton_Call_Tap: function(button, e, options) {
		Ext.getCmp('Root').getLayout().setAnimation({type:'slide', direction:'left'});
		Ext.getCmp('Root').setActiveItem(2);
		Ext.getCmp('Step2_Call').setActiveItem(0);		
	},
	onButton_Message_Tap: function(button, e, options) {
		Ext.getCmp('Root').getLayout().setAnimation({type:'slide', direction:'left'});
		Ext.getCmp('Root').setActiveItem(3);
		Ext.getCmp('Step3_Message').setActiveItem(0);		
	}
	
});

