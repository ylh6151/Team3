﻿Ext.define('GuideApp.view.Step1_Basic', { 
	extend: 'Ext.Panel',
	xtype: 'Step1_Basic',
	id:  'Step1_Basic',
			
	config: {
		cls: 'cls-content',/*backgroundImg가 들어가는 class입니다*/
		layout: {
			type: 'card',
			animation: 'slide'
		},
		
		items: [			
			// TitleBar
			{
				xtype: 'titlebar',				
				docked: 'top',
				height : '3.6em',
				cls: 'cls-title',
				
				title: '기본동작',
				
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
				cls: 'cls-basicmenu',
				
				items: [
					{
						xtype: 'button',
						itemId: 'button_tap',
						cls:'cls-basicmenu-tapbutton',
						num : '0',
						//text: '탭'
					},
					{
						xtype: 'button',
						itemId: 'button_taphold',
						cls:'cls-basicmenu-tapholdbutton',
						num : '1',
						//text: '탭홀드'
					},
					{
						xtype: 'button',
						itemId: 'button_pinch',
						cls:'cls-basicmenu-pinchbutton',
						num : '3',
						//text: '핀치'
					},
					{
						xtype: 'button',
						itemId: 'button_drop',
						cls:'cls-basicmenu-dropbutton',
						num : '4',
						//text: '드롭'
					},
					{
						xtype: 'button',
						itemId: 'button_swip',
						cls:'cls-basicmenu-swipbutton',
						num : '2',
						//text: '스와이프'
					},
				],
				listeners: {
					initialize: function(e) {
						this.on('activate', function() {
							//TitleBar 설정
							Ext.getCmp('Step1_Basic').query('titlebar')[0].setTitle( '기본동작' );//타이틀명 초기화	
							Ext.getCmp('Step1_Basic').query('#Toolbar_Pre')[0].hide();
							Ext.getCmp('Step1_Basic').query('#Toolbar_Next')[0].hide();
							
							//toolbar 설정
							Ext.getCmp('Step1_Basic').query('#Toolbar_Refresh')[0].hide();
						});
					}
				}
			},
			
			//PageN : ContentView
			{
				xtype: 'panel',
				itemId: 'page1',		
				cls: 'cls-content',	
				items:[
					{
						xtype: 'button',
						cls: 'cls-greenbtn',							
						listeners:{
							initialize: function(e) {
								this.on('activate', function() {	
									this.setCls("cls-greenbtn");
								});					
							},
							tap :{
								fn : function( event ) {
									(this.getCls( ) == 'cls-greenbtn') ? this.setCls("cls-redbtn") : this.setCls("cls-greenbtn");
									
									//다음으로...
									setTimeout( ""
									+	"Ext.Msg.confirm('Clear!',  '잘하셨습니다.</br>다음단계로 이동하시겠습니까?', function( buttonId) {"
									+		"if( buttonId == 'yes' ){"
									+			"Ext.getCmp('Step1_Basic').getLayout().setAnimation({type:'slide', direction:'left'});"
									+			"Ext.getCmp('Step1_Basic').setActiveItem(2);"
									+		"}"							
									+	"});", 1000);	
								},
								element:"element"
							},
						}
					},
				],
					
				listeners: {					
					initialize: function(e) {
						this.on('activate', function() {						
							//TitleBar 설정
							Ext.getCmp('Step1_Basic').query('titlebar')[0].setTitle( "탭");
							Ext.getCmp('Step1_Basic').query('#Toolbar_Pre')[0].hide();
							Ext.getCmp('Step1_Basic').query('#Toolbar_Next')[0].show();		
							
							//Overlay 보여주기
							//Ext.getCmp('Root').query('video')[0].setUrl('./resources/video/CAM00244.mp4');
							//Ext.getCmp('Root').query('#Overlay')[0].show();
						});					
					},
				}
			},
			{
				title: '탭홀드',
				xtype: 'panel',
				cls: 'cls-content',
				
				itemId: 'page2',
				items: [
					{
						xtype:'button',
						id:'tapholdbtn',
						iconMask: true,
						cls:'cls-star',
						
						listeners:{
							touchstart :{
								fn : function( event ) {
									Ext.getCmp('tapholdbtn').setCls("cls-starhold");
									console.dir("touchstart");
									console.dir(event);
								},
								element:"element"
							},
							taphold :{
								fn : function( event ) {
									Ext.getCmp('tapholdbtn').setCls("cls-star2");
									console.dir("taphold");
									console.dir(event);
								},
								element:"element"
							},
							touchend :{
								fn : function( event ) {
									Ext.getCmp('tapholdbtn').setCls("cls-star");
									
									//다음으로...
									setTimeout( ""
									+	"Ext.Msg.confirm('Clear!',  '잘하셨습니다.</br>다음단계로 이동하시겠습니까?', function( buttonId) {"
									+		"if( buttonId == 'yes' ){"
									+			"Ext.getCmp('Step1_Basic').getLayout().setAnimation({type:'slide', direction:'left'});"
									+			"Ext.getCmp('Step1_Basic').setActiveItem(3);"
									+		"}"							
									+	"});", 1000);									
								},
								element:"element"
							}
						}
					}
				],
				
				listeners: {
					initialize: function(e) {
						this.on('activate', function() {
							//TitleBar 설정
							Ext.getCmp('Step1_Basic').query('titlebar')[0].setTitle( "탭홀드");
							Ext.getCmp('Step1_Basic').query('#Toolbar_Pre')[0].show();
							Ext.getCmp('Step1_Basic').query('#Toolbar_Next')[0].show();							
							//Overlay 보여주기
							//Ext.getCmp('Root').query('video')[0].setUrl('./resources/video/CAM00244.mp4');
							//Ext.getCmp('Root').query('#Overlay')[0].show();
						});
					},
				}
			},
			
			{
				title: '스와이프',
				xtype: 'panel',
				cls: 'cls-content',
				
				itemId: 'page3',
				
				items:[
					{
						xtype: 'button',
						cls: 'cls-pinwheel'
					},
				],
				
				listeners: {
					initialize: function(e) {
						this.on('activate', function() {
							//TitleBar 설정
							Ext.getCmp('Step1_Basic').query('titlebar')[0].setTitle( "스와이프");
							Ext.getCmp('Step1_Basic').query('#Toolbar_Pre')[0].show();
							Ext.getCmp('Step1_Basic').query('#Toolbar_Next')[0].show();		
							
							//Overlay 보여주기
							//Ext.getCmp('Root').query('video')[0].setUrl('./resources/video/CAM00244.mp4');
							//Ext.getCmp('Root').query('#Overlay')[0].show();
						});
					},
					
					swipe :{
						fn : function( event ) {
							document.querySelector('.cls-pinwheel').className = 'cls-pinwheel-animation';
							setTimeout( "document.querySelector('.cls-pinwheel-animation').className = 'cls-pinwheel';" , 3000);
							
							//다음으로...
							setTimeout( ""
							+	"Ext.Msg.confirm('Clear!',  '잘하셨습니다.</br>다음단계로 이동하시겠습니까?', function( buttonId) {"
							+		"if( buttonId == 'yes' ){"
							+			"Ext.getCmp('Step1_Basic').getLayout().setAnimation({type:'slide', direction:'left'});"
							+			"Ext.getCmp('Step1_Basic').setActiveItem(4);"
							+		"}"							
							+	"});", 4000);	
						},
						element : "element"						
					}					
				}
			},
			
			{
				title: '핀치',
				xtype: 'panel',
				cls: 'cls-content',
				
				itemId: 'page4',
				
				items:[
					{
						xtype: 'button',
						cls: 'cls-pinch',

					}
				],				
				listeners: {
					initialize: function(e) {
						this.on('activate', function() {	
							//TitleBar 설정
							Ext.getCmp('Step1_Basic').query('titlebar')[0].setTitle( "핀치");
							Ext.getCmp('Step1_Basic').query('#Toolbar_Pre')[0].show();
							Ext.getCmp('Step1_Basic').query('#Toolbar_Next')[0].show();		
							
							
							//버튼 사이즈 및 위치 초기화
							document.querySelector( '.cls-pinch' ).style.height = "300px";
							document.querySelector( '.cls-pinch' ).style.marginTop  = "-150px";
							
							document.querySelector( '.cls-pinch' ).style.width = "150px";							
							document.querySelector( '.cls-pinch' ).style.marginLeft = "-75px";

							
							//Overlay 보여주기
							//Ext.getCmp('Root').query('video')[0].setUrl('./resources/video/CAM00244.mp4');
							//Ext.getCmp('Root').query('#Overlay')[0].show();
						});
					},
					
					pinch :{
						fn : function( event ) {
							var changedScaleHeight, changedScaleWidth;
							var maxWidth = document.querySelector( '.cls-pinch' ).parentElement.parentElement.clientWidth;
							var maxHeight = document.querySelector( '.cls-pinch' ).parentElement.parentElement.clientHeight;
							
							if( event.scale > 1){//확대
								if( event.scale > 1.005 ){
									changedScaleHeight =  document.querySelector( '.cls-pinch' ).style.height.replace( "px", ""  ) * 1.05;
									changedScaleWidth =  document.querySelector( '.cls-pinch' ).style.width.replace( "px", ""  ) * 1.05;
								}
								else{
									changedScaleHeight =  document.querySelector( '.cls-pinch' ).style.height.replace( "px", ""  ) * event.scale;
									changedScaleWidth =  document.querySelector( '.cls-pinch' ).style.width.replace( "px", ""  ) * event.scale;
								}
								
								//변경된 스케일 적용
								document.querySelector( '.cls-pinch' ).style.height = changedScaleHeight + "px";
								document.querySelector( '.cls-pinch' ).style.marginTop  = eval( -(changedScaleHeight / 2 ) ) + "px";
								document.querySelector( '.cls-pinch' ).style.width = changedScaleWidth + "px";
								document.querySelector( '.cls-pinch' ).style.marginLeft  = eval( -(changedScaleWidth / 2 ) ) + "px";
							}
							else{//축소
								if( event.scale < 0.95 ){
									changedScaleHeight =  document.querySelector( '.cls-pinch' ).style.height.replace( "px", ""  ) * 0.95;
									changedScaleWidth =  document.querySelector( '.cls-pinch' ).style.width.replace( "px", ""  ) * 0.95;
								}
								else{
									changedScaleHeight =  document.querySelector( '.cls-pinch' ).style.height.replace( "px", ""  ) * event.scale;
									changedScaleWidth =  document.querySelector( '.cls-pinch' ).style.width.replace( "px", ""  ) * event.scale;
								}
								
								if( changedScaleWidth > 100){//클때만 이벤트 적용
									//변경된 스케일 적용
									document.querySelector( '.cls-pinch' ).style.height = changedScaleHeight + "px";
									document.querySelector( '.cls-pinch' ).style.marginTop  = eval( -(changedScaleHeight / 2 ) ) + "px";
									document.querySelector( '.cls-pinch' ).style.width = changedScaleWidth + "px";
									document.querySelector( '.cls-pinch' ).style.marginLeft  = eval( -(changedScaleWidth / 2 ) ) + "px";
								}
							}
							//다음으로...
							setTimeout( ""
							+	"Ext.Msg.confirm('Clear!',  '잘하셨습니다.</br>다음단계로 이동하시겠습니까?', function( buttonId) {"
							+		"if( buttonId == 'yes' ){"
							+			"Ext.getCmp('Step1_Basic').getLayout().setAnimation({type:'slide', direction:'left'});"
							+			"Ext.getCmp('Step1_Basic').setActiveItem(5);"
							+		"}"							
							+	"});", 5000);//핀치를 5초동안 해보세요~	
						},
						element : "element"								
					}
				}
			},
			
			{
				title: '드래그',
				xtype: 'dragDrop',
				itemId: 'page5',
				
				listeners: {
					initialize: function(e) {
						this.on('activate', function() {	
							//TitleBar 설정
							Ext.getCmp('Step1_Basic').query('titlebar')[0].setTitle( "드래그 앤 드랍");
							Ext.getCmp('Step1_Basic').query('#Toolbar_Pre')[0].show();
							Ext.getCmp('Step1_Basic').query('#Toolbar_Next')[0].hide();		

							//Overlay 보여주기
							//Ext.getCmp('Root').query('video')[0].setUrl('./resources/video/CAM00244.mp4');
							//Ext.getCmp('Root').query('#Overlay')[0].show();
						});
					}
				}
			}
		],
		
		/**************Listeners**************/
		listeners: [
			{
				fn: 'onButton_Chapter1Tap',
				event: 'tap',
				delegate: '#button_tap'
			},
			{
				fn: 'onButton_Chapter1Tap',
				event: 'tap',
				delegate: '#button_taphold'
			},
			{
				fn: 'onButton_Chapter1Tap',
				event: 'tap',
				delegate: '#button_swip'
			},
			{
				fn: 'onButton_Chapter1Tap',
				event: 'tap',
				delegate: '#button_pinch'
			},
			{
				fn: 'onButton_Chapter1Tap',
				event: 'tap',
				delegate: '#button_drop'
			},            
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
		]
	},
		
	/**************Function for Listeners**************/
	onButton_Chapter1Tap: function(button, e, options) {
		var index = parseInt(button.initialConfig.num);//0~n-1까지 입니다.
		Ext.getCmp('Step1_Basic').setActiveItem(index+1);
		
		//toolbar 설정
		Ext.getCmp('Step1_Basic').query('#Toolbar_Refresh')[0].show();
    },

	//Title Bar
	onTitle_PreTap: function(button, e, options) {		
        //1. 이동
		var rootPanel = Ext.getCmp('Step1_Basic');//card속성을 가진 Step1_Basicd의 Root역할을 하는 Panel
		var num_cardSize = rootPanel.innerItems.length;
		var num_currentView = eval(rootPanel.getActiveItem().getItemId().slice(4,5));
		var num_preView = num_currentView - 1;//현재뷰에서 한칸 뒤로
		
		//console.log( MaxCardSize );
		
		if( num_preView >= 1 ){//범위내일때만 동작
			rootPanel.getLayout().setAnimation({type:'slide', direction:'right'});
			rootPanel.setActiveItem( num_preView );
		}
		
    },

    
	onTitle_NextTap: function(button, e, options) {		
        //1. 이동
		var rootPanel = Ext.getCmp('Step1_Basic');//card속성을 가진 RootPanel
		var num_cardSize = rootPanel.innerItems.length;
		var num_currentView = eval(rootPanel._activeItem._itemId.slice(4,5));//현재뷰에서 한칸 앞으로
		var num_nextView = num_currentView + 1;//현재뷰에서 한칸 앞으로

		if( num_nextView < num_cardSize ){//범위내일때만 동작
			rootPanel.getLayout().setAnimation({type:'slide', direction:'left'});
			rootPanel.setActiveItem( num_nextView );
		}
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