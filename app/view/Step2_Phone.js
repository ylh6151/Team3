Ext.define('MyApp.view.Step2_Phone', { 
	extend: 'Ext.Panel',
	xtype: 'Step2_Phone',
	id:  'Step2_Phone', 
			
	config: {
		cls: 'cls-content',/*backgroundImg가 들어가는 class입니다*/
		layout: {
			type: 'card',
			animation:'slide'
		},
		
		items: [			
			// TitleBar
			{
				xtype: 'titlebar',
				id: 'ContentView1-titlebar',
				
				docked: 'top',
				cls: 'cls-title',
				
				title: '전화걸기&받기',
				
				items: [
					{
						xtype: 'button',
						id:'Toolbar_Pre',
						cls:'cls-pretab',
						width: '60px'
					},
					{
						xtype: 'button',
						id:'Toolbar_Next',								
						align: 'right',
						cls:'cls-nexttab',
						width: '60px'
					}
				]
			},
			//ToolBar
			{
				xtype: 'toolbar',
				docked: 'bottom',
				cls: 'cls-toolbar',
				
				defaults: {
					aligh: 'center',
					//iconMask: true,
					ui: 'plain'
				},
				items: [
					{
						xtype: 'spacer'
					},							
					{
						xtype: 'button',
						itemId: 'Toolbar_Home',
						iconAlign: 'center',
						iconCls: 'cls-home',
						//iconMask: true
					},
					{
						xtype: 'button',
						itemId: 'Toolbar_Refresh',
						iconAlign: 'center',
						iconCls: 'cls-refresh',
						//iconMask: true
					},
					{
						xtype: 'spacer'
					},	
				]
			},
			//Page0 : Menu
			{
				xtype: 'panel',
				id: 'page0',		
				cls: 'cls-content',
				
				items: [
					{
						xtype: 'button',
						itemId: 'button_tap',
						cls:'cls-basicmenulist',
						num : '0',
						text: '전화걸기'
					},
					{
						xtype: 'button',
						itemId: 'button_taphold',
						cls:'cls-basicmenulist',
						num : '1',
						text: '전화받기'
					}
				],
				
				listeners: {
					initialize: function(e) {
						this.on('activate', function() {
							//TitleBar 설정
							Ext.getCmp('Toolbar_Pre').hide();
							Ext.getCmp('Toolbar_Next').hide();
						});
					}
				}
			}
		],
		
		/**************Listeners**************/
		listeners: [
		
			{
				fn: 'onToolbar_HomeTap',
				event: 'tap',
				delegate: '#Toolbar_Home'
			},
			{
				fn: 'onToolbar_RefreshTap',
				event: 'tap',
				delegate: '#Toolbar_Refresh'
			},
		],
	},
	
	/**************Function for Listeners**************/
	//Tool Bar
	onToolbar_HomeTap: function(button, e, options) {
        console.log("Home");
		Ext.getCmp('Root').getLayout().setAnimation({type:'pop'});
		Ext.getCmp('Root').setActiveItem(0);
    },
	onToolbar_RefreshTap: function(button, e, options) {
        console.log("refresh");
		Ext.getCmp('Root').query('#Overlay')[0].show();
    },
});