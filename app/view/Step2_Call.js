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
						cls:'cls-submenulist',
						num : '0',
						text: '전화걸기'
					},
					{
						xtype: 'button',
						itemId: 'button_menu_pickUp',
						cls:'cls-submenulist',
						num : '1',
						text: '전화받기'
					}
				],				
				listeners: {					
					initialize: function(e) {
						this.on('activate', function() {
							//TitleBar 설정
							Ext.getCmp('Step2_Call').query('titlebar')[0].setTitle( '전화걸기&받기' );
							Ext.getCmp('Step2_Call').query('#Toolbar_Pre')[0].hide();
							Ext.getCmp('Step2_Call').query('#Toolbar_Next')[0].hide();
							
							//toolbar 설정
							Ext.getCmp('Step2_Call').query('#Toolbar_Refresh')[0].hide();
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
					{//Page1-1 : 홈화면
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
								cls: 'cls-Step2_Call-button cls-Step2_Call-button-1-1',
								pressedCls : 'cls-Step2_Call-button-pressed',
								listeners:{
									tap :{
										fn : function( event ) {
											Ext.getCmp('Step2_Call').query('#page1')[0].setActiveItem(1);
										},
										element:"element"
									}
								}
							},
						],
						listeners: {
							painted: function() {
								document.querySelector("#testAudio").src= "./resources/audio/2_1_1.mp3";
								document.querySelector("#testAudio").play();
							},							
							deactivate: function() {
								//다음으로...
								document.querySelector("#testAudio").pause();
							}
						}
					},
					{//Page1-2 : 키패널
						xtype: 'panel',
						itemId: 'page1-2',						
						style: {
							'background-image': 'url("./resources/images/Step2_Call/call_1-2.jpg")',
							'background-size': '100% 100%',
							'background-repeat': 'no-repeat'
						},
						items:[
							{
								xtype: 'button',
								cls: 'cls-Step2_Call-button cls-Step2_Call-button-1-2',
								pressedCls : 'cls-Step2_Call-button-pressed',
								listeners:{
									tap :{
										fn : function( event ) {
											Ext.getCmp('Step2_Call').query('#page1')[0].setActiveItem(2);
										},
										element:"element"
									}
								}
							},
						]
					},
					{//Page1-3 : 키패널(2)
						xtype: 'panel',
						itemId: 'page1-3',						
						style: {
							'background-image': 'url("./resources/images/Step2_Call/call_1-3.jpg")',
							'background-size': '100% 100%',
							'background-repeat': 'no-repeat'
						},
						items:[
							{
								xtype: 'button',
								cls: 'cls-Step2_Call-button cls-Step2_Call-button-1-3',
								pressedCls : 'cls-Step2_Call-button-pressed',
								listeners:{
									tap :{
										fn : function( event ) {
											Ext.getCmp('Step2_Call').query('#page1')[0].setActiveItem(3);
										},
										element:"element"
									}
								}
							},
						]
					},
					{//Page1-4 : 전화연결중
						xtype: 'panel',
						itemId: 'page1-4',						
						style: {
							'background-image': 'url("./resources/images/Step2_Call/call_1-4.jpg")',
							'background-size': '100% 100%',
							'background-repeat': 'no-repeat'
						},
						listeners: {
							painted: function() {
								document.querySelector("#testAudio").src= "./resources/audio/bellSound.mp3";
								document.querySelector("#testAudio").play();
								
								setTimeout( "Ext.getCmp('Step2_Call').query('#page1')[0].setActiveItem(4);", 7000);	
							},
							deactivate: function() {
								//다음으로...
								document.querySelector("#testAudio").pause();
							}
						}
					},
					{//Page1-5 : 통화중
						xtype: 'panel',
						itemId: 'page1-5',						
						style: {
							'background-image': 'url("./resources/images/Step2_Call/call_1-5.jpg")',
							'background-size': '100% 100%',
							'background-repeat': 'no-repeat'
						},
						items:[
							{
								xtype: 'button',
								cls: 'cls-Step2_Call-button cls-Step2_Call-button-1-5',
								pressedCls : 'cls-Step2_Call-button-pressed',
								listeners:{
									tap :{
										fn : function( event ) {
											Ext.getCmp('Step2_Call').query('#page1')[0].setActiveItem(5);
										},
										element:"element"
									}
								}
							},
						]
					},
					{//Page1-6 : 통화종료
						xtype: 'panel',
						itemId: 'page1-6',						
						style: {
							'background-image': 'url("./resources/images/Step2_Call/call_1-6.jpg")',
							'background-size': '100% 100%',
							'background-repeat': 'no-repeat'
						},
						listeners: {
							painted: function() {
								//다음으로...
								setTimeout( ""
								+	"Ext.Msg.confirm('Clear!',  '통화가 종료되었습니다.</br>다음단계로 이동하시겠습니까?', function( buttonId) {"
								+		"if( buttonId == 'yes' ){"
								+			"Ext.getCmp('Step2_Call').getLayout().setAnimation({type:'slide', direction:'left'});"
								+			"Ext.getCmp('Step2_Call').setActiveItem(2);"
								+		"}"
								+		"else{"
								+			"Ext.getCmp('Step2_Call').query('#page1')[0].setActiveItem(0);"
								+		"}"								
								+	"});", 2000);	
							}
						}
					}
				],
				listeners: {
					//진입
					show: function() {
						//TitleBar 설정
						Ext.getCmp('Step2_Call').query('titlebar')[0].setTitle( '전화걸기' );
						Ext.getCmp('Step2_Call').query('#Toolbar_Pre')[0].hide();
						Ext.getCmp('Step2_Call').query('#Toolbar_Next')[0].show();
						
						//View위치 초기화
						Ext.getCmp('Step2_Call').query('#page1')[0].setActiveItem(0);
					},
					painted: function() {
					},
					//종료
					deactivate: function() {
						//다음으로...
						//alert("단계종료");
					}
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
						}
					}
				],
				listeners: {					
					initialize: function(e) {
						this.on('activate', function() {
							//TitleBar 설정
							Ext.getCmp('Step2_Call').query('titlebar')[0].setTitle( '전화받기' );
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
		
		Ext.getCmp('Step2_Call').getLayout().setAnimation({type:'slide', direction:'left'});
		Ext.getCmp('Step2_Call').setActiveItem(index+1);
		Ext.getCmp('Step2_Call').query('titlebar')[0].setTitle( button.getText() );
		
		//toolbar 설정
		Ext.getCmp('Step2_Call').query('#Toolbar_Refresh')[0].show();
    },
	
	
	//Title Bar
	onTitle_PreTap: function(button, e, options) {		
        //1. 이동
		var rootPanel = Ext.getCmp('Step2_Call');//card속성을 가진 Step1_Basicd의 Root역할을 하는 Panel
		var num_cardSize = rootPanel.innerItems.length;
		var num_currentView = eval(rootPanel.getActiveItem().getItemId().slice(4,5));
		var num_preView = num_currentView - 1;//현재뷰에서 한칸 뒤로

		if( num_preView >= 1 ){//범위내일때만 동작
			rootPanel.getLayout().setAnimation({type:'slide', direction:'right'});
			rootPanel.setActiveItem( num_preView );
		}
		
		//음성닫기
		document.querySelector("#testAudio").pause();
    },    
	
	onTitle_NextTap: function(button, e, options) {
        //1. 이동
		var rootPanel = Ext.getCmp('Step2_Call');//card속성을 가진 RootPanel
		var num_cardSize = rootPanel.innerItems.length;
		var num_currentView = eval(rootPanel._activeItem._itemId.slice(4,5));//현재뷰에서 한칸 앞으로
		var num_nextView = num_currentView + 1;//현재뷰에서 한칸 앞으로

		if( num_nextView < num_cardSize ){//범위내일때만 동작
			rootPanel.getLayout().setAnimation({type:'slide', direction:'left'});
			rootPanel.setActiveItem( num_nextView );
		}
		
		//음성닫기
		document.querySelector("#testAudio").pause();
    },
	
	
	//Tool Bar
	onToolbar_HomeTap: function(button, e, options) {
		document.querySelector("#testAudio").pause();
		
		Ext.getCmp('Root').getLayout().setAnimation({type:'pop'});
		Ext.getCmp('Root').setActiveItem(0);
    },
	onToolbar_RefreshTap: function(button, e, options) {
		document.querySelector("#testAudio").load();
		document.querySelector("#testAudio").play();
    },
});