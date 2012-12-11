Ext.define('GuideApp.view.Step2_Call', { 
	extend: 'Ext.Panel',
	xtype: 'Step2_Call',
	id:  'Step2_Call', 
			
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
				
				title: '전화걸기&받기',
				
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
						itemId: 'button_menu_call',
						cls:'cls-basicmenulist',
						num : '0',
						text: '전화걸기'
					},
					{
						xtype: 'button',
						itemId: 'button_menu_pickUp',
						cls:'cls-basicmenulist',
						num : '1',
						text: '전화받기'
					}
				],				
				listeners: {					
					initialize: function(e) {
						this.on('activate', function() {
							//Title 설정
							Ext.getCmp('Step2_Call').query('titlebar')[0].setTitle( '전화걸기&받기' );
							
							//TitleBar 설정
							Ext.getCmp('Step2_Call').query('#Toolbar_Pre')[0].hide();
							Ext.getCmp('Step2_Call').query('#Toolbar_Next')[0].hide();		
							
							//Overlay 보여주기
							//Ext.getCmp('Root').query('video')[0].setUrl('./resources/video/CAM00244.mp4');
							//Ext.getCmp('Root').query('#Overlay')[0].show();
						});					
					},
				}
			},
			//PageN : ContentView			
			//Page1 : 전화걸기
			{
				xtype : 'container',
				itemId: 'page1',
				layout: {
					type: 'card',
					//animation:'slide'
				},
				items: [
					{//Page1-1
						xtype: 'panel',
						itemId: 'page1-1',
						style: {
							'background-image': 'url("./resources/images/phoneRoot.jpg")',
							'background-size': '100% 100%',
							'background-repeat': 'no-repeat'
						},
						items:[
							{
								xtype: 'button',
								cls: 'cls-Step2_Call-Page1Button',
								pressedCls : 'cls-Step2_Call-Page1Button_pressed',
								listeners:{
									tap :{
										fn : function( event ) {
											alert("잘하셨습니다.");
											Ext.getCmp('Step2_Call').query('#page1')[0].setActiveItem(1);
											//Ext.getCmp('Step2_Call').query('page1')[0].setTitle( button.getText() );
										},
										element:"element"
									}
								}
							},
						]
					},
					{//Page1-2
						xtype: 'panel',
						itemId: 'page1-2',
						style: {
							'background-image': 'url("./resources/images/Step2_Call/call_1-1.jpg")',
							'background-size': '100% 100%',
							'background-repeat': 'no-repeat'
						}
						/*,
						items:[
							{
								xtype: 'button',
								cls: 'cls-Step2_Call-Page1Button',
								pressedCls : 'cls-Step2_Call-Page1Button_pressed',
								listeners:{
									tap :{
										fn : function( event ) {
											alert("잘하셨습니다.");
										},
										element:"element"
									}
								}
							},
						]
						*/
					}
				],
				listeners: {					
					initialize: function(e) {
						this.on('activate', function() {
							//Title 설정
							Ext.getCmp('Step2_Call').query('titlebar')[0].setTitle( '전화걸기' );
							
							//TitleBar 설정
							Ext.getCmp('Step2_Call').query('#Toolbar_Pre')[0].hide();
							Ext.getCmp('Step2_Call').query('#Toolbar_Next')[0].show();		
							
							//Overlay 보여주기
							//Ext.getCmp('Root').query('video')[0].setUrl('./resources/video/CAM00244.mp4');
							//Ext.getCmp('Root').query('#Overlay')[0].show();
						});					
					},
				}
			},
			
			//Page2 : 전화받기
			{
				xtype : 'container',
				itemId: 'page2',
				layout: {
					type: 'card',
					//animation:'slide'
				},
				items: [
					{//Page2-1
						xtype: 'panel',
						itemId: 'page1-1',
						style: {
							'background-image': 'url("./resources/images/phoneRoot.jpg")',
							'background-size': '100% 100%',
							'background-repeat': 'no-repeat'
						},
						items:[
						]
					}
				],
				listeners: {					
					initialize: function(e) {
						this.on('activate', function() {
							//Title 설정
							Ext.getCmp('Step2_Call').query('titlebar')[0].setTitle( '전화받기' );
							
							//TitleBar 설정
							Ext.getCmp('Step2_Call').query('#Toolbar_Pre')[0].show();
							Ext.getCmp('Step2_Call').query('#Toolbar_Next')[0].hide();
							
							//Overlay 보여주기
							//Ext.getCmp('Root').query('video')[0].setUrl('./resources/video/CAM00244.mp4');
							//Ext.getCmp('Root').query('#Overlay')[0].show();
						});					
					},
				}
			}
			
			
		],
		
		/**************Listeners**************/
		listeners: [
			//TitleBar Button
			{
				fn: 'onTitle_PreTap',
				event: 'tap',
				delegate: '#Toolbar_Pre'
			},
			{
				fn: 'onTitle_NextTap',
				event: 'tap',
				delegate: '#Toolbar_Next'
			},			
			//Toolbar
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
			//Menu
			{
				fn: 'onButton_Chapter2_Tap',
				event: 'tap',
				delegate: '#button_menu_call'
			},
			{
				fn: 'onButton_Chapter2_Tap',
				event: 'tap',
				delegate: '#button_menu_pickUp'
			},
		],
	},
	
	/**************Function for Listeners**************/
	//Menu
	onButton_Chapter2_Tap: function(button, e, options) {
		var index = parseInt(button.initialConfig.num);//0~n-1까지 입니다.
		Ext.getCmp('Step2_Call').setActiveItem(index+1);
		Ext.getCmp('Step2_Call').query('titlebar')[0].setTitle( button.getText() );
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