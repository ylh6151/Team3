Ext.define('GuideApp.view.Step3_Message', { 
	extend: 'Ext.Panel',
	xtype: 'Step3_Message',
	id:  'Step3_Message', 
			
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
				docked: 'top',
				height : '3.6em',
				cls: 'cls-title',
				
				title: '문자쓰기&받기',
				
				items: [
					{
						xtype: 'button',
						itemId:'Toolbar_Pre',
						cls:'cls-pretab',
						width: '60px',
					},
					{
						xtype: 'button',
						itemId:'Toolbar_Next',								
						align: 'right',
						cls:'cls-nexttab',
						width: '60px',						
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
						iconCls: 'cls-toolbar-homeButton',
						//iconMask: true
					},
					{
						xtype: 'button',
						itemId: 'Toolbar_Refresh',
						iconAlign: 'center',
						iconCls: 'cls-toolbar-refreshButton',
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
				itemId: 'page0',		
				cls: 'cls-content',
				
				items: [
					{
						xtype: 'button',
						itemId: 'button_tap',
						cls:'cls-submenulist',
						num : '0',
						text: '문자쓰기'
					},
					{
						xtype: 'button',
						itemId: 'button_taphold',
						cls:'cls-submenulist',
						num : '1',
						text: '문자받기'
					}
				],				
				listeners: {					
					initialize: function(e) {
						this.on('activate', function() {	
							//TitleBar 설정
							Ext.getCmp('Step3_Message').query('titlebar')[0].setTitle( '문자쓰기&받기' );
							Ext.getCmp('Step3_Message').query('#Toolbar_Pre')[0].hide();
							Ext.getCmp('Step3_Message').query('#Toolbar_Next')[0].hide();		
							
							//toolbar 설정
							Ext.getCmp('Step3_Message').query('#Toolbar_Refresh')[0].hide();
						});					
					},
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
	//Menu
	onButton_Chapter2_Tap: function(button, e, options) {
		/*
		var index = parseInt(button.initialConfig.num);//0~n-1까지 입니다.
		Ext.getCmp('Step3_Message').setActiveItem(index+1);
		Ext.getCmp('Step3_Message').query('titlebar')[0].setTitle( button.getText() );
		*/
		
		//toolbar 설정
		Ext.getCmp('Step3_Message').query('#Toolbar_Refresh')[0].show();
    },
	
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