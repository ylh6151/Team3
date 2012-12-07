Ext.define('MyApp.view.Step1_Basic', { 
	extend: 'Ext.Panel',
	xtype: 'Step1_Basic',
	id:  'Step1_Basic', 
			
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
				
				title: '기본동작',
				
				items: [
					{
						xtype: 'button',
						id:'Toolbar_Pre',
						//itemId: 'Toolbar_Pre',
						//iconCls: 'arrow_left',
						ui: 'back',								 
						text: '이전으로'
					},
					{
						xtype: 'button',
						id:'Toolbar_Next',								
						align: 'right',
						//iconAlign: 'right',
						//iconCls: 'arrow_right',
						ui: 'forward',								 
						text: '다음으로'
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
					iconMask: true,
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
						iconCls: 'home',
						iconMask: true
					},
					{
						xtype: 'button',
						itemId: 'Toolbar_Refresh',
						iconAlign: 'center',
						iconCls: 'refresh',
						iconMask: true
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
						ui: 'round',
						num : '0',
						text: '탭'
					},
					{
						xtype: 'button',
						itemId: 'button_taphold',
						ui: 'round',
						num : '1',
						text: '탭홀드'
					},
					{
						xtype: 'button',
						itemId: 'button_swip',
						ui: 'round',
						num : '2',
						text: '스와이프'
					},
					{
						xtype: 'button',
						itemId: 'button_pinch',
						ui: 'round',
						num : '3',
						text: '핀치'
					},
					{
						xtype: 'button',
						itemId: 'button_drop',
						ui: 'round',
						num : '4',
						text: '드롭'
					}
				]
			},
			
			//PageN : ContentView
			{
				xtype: 'panel',
				id: 'page1',		
				cls: 'cls-content',			
				html: '<center><div style = "width: 300px; height: 300px;"><img id="imgGreen" src="./app/image/button_green.png" style="width:100%;"></div></center>',
				
				items: [
					{//Overlay
						xtype: 'panel',
						id: 'page0_overlay',
						centered: true,  hidden: true, modal: true,
						height: '240px', width: '320px',
						items: [
							{
								xtype: 'video',
								id: 'myvideo',
								height: '100%',
								width: '100%',
								url: './app/video/CAM00244.mp4',
								posterUrl: './app/video/CAM00244.jpg'
							}
						],
						listeners: [
							{
								fn: function( event ) {
									var overlayCmp = Ext.getCmp('page0_overlay');
									overlayCmp.setCentered(false);
									overlayCmp.hide();
								},
								event: 'pause',
								delegate: '#myvideo'
							}
						]													
					}
				],
				listeners: {
					initialize: function(e) {
						this.on('activate', function() {
							//Overlay
							var overlayCmp = Ext.getCmp('page0_overlay');
							overlayCmp.setCentered(true);
							overlayCmp.show();
							
								
							//버튼 초기화
							if (document.getElementById('imgGreen')){
								document.getElementById('imgGreen').src = "./app/image/button_green.png";
							}
						});
					},
					tap :{
						fn : function( event ) {
							if( event.target.nodeName == 'IMG'){
								if( (document.getElementById('imgGreen').src).lastIndexOf("red.png") < 0){
									document.getElementById('imgGreen').src = "./app/image/button_red.png";
								}
								else{
									document.getElementById('imgGreen').src = "./app/image/button_green.png";
								}
							}									
						},
						element : "element"
					}
				}
			},
			
			{
				title: '탭홀드',
				xtype: 'panel',
				cls: 'cls-content',
				
				id: 'page2',
				items: [
					{
						xtype:'button',
						iconMask: true,
						cls:'cls-star',
						pressedCls:'cls-star2',
						pressedDelay: 200,
					}
				]
			},
			
			{
				title: '스와이프',
				xtype: 'panel',
				cls: 'cls-content',
				
				id: 'page3',
				html: '<div class="cls-pinwheel" style = "width: 300px; height: 300px;"><img src="./app/image/pinwheel_aquay.png" width: "300px" height: "300px"></div>',
				listeners: {
					swipe :{
						fn : function( event ) {
							document.querySelector('.cls-pinwheel').className = 'cls-pinwheel-animation';
							setTimeout( "document.querySelector('.cls-pinwheel-animation').className = 'cls-pinwheel';" , 3000);
						},
						element : "element"
						
					}
				}
			},
			
			{
				title: '핀치',
				xtype: 'panel',
				cls: 'cls-content',
				
				id: 'page4',
				html: '<center><div class="cls-pinch" style="width: 319px; height: 631px;"></div></center>',
				
				listeners: {
					//tap :{
					pinch :{
						fn : function( event ) {	
							var changedScale;
							var maxWidth = document.body.clientWidth;
							var maxHeight = document.body.clientHeight;
							//alert( maxWidth );
							
							
							if( event.scale > 1){//확대
								if( event.scale > 1.005 ){
									changedScaleHeight =  document.querySelector( '.cls-pinch' ).style.height.replace( "px", ""  ) * 1.05;
									changedScaleWidth =  document.querySelector( '.cls-pinch' ).style.width.replace( "px", ""  ) * 1.05;
								}
								else{
									changedScaleHeight =  document.querySelector( '.cls-pinch' ).style.height.replace( "px", ""  ) * event.scale;
									changedScaleWidth =  document.querySelector( '.cls-pinch' ).style.width.replace( "px", ""  ) * event.scale;
								}
								
								document.querySelector( '.cls-pinch' ).style.width = changedScaleWidth + "px";
								document.querySelector( '.cls-pinch' ).style.height = changedScaleHeight + "px";
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
									document.querySelector( '.cls-pinch' ).style.width = changedScaleWidth + "px";
									document.querySelector( '.cls-pinch' ).style.height = changedScaleHeight + "px";
								}
							}
						},
						element : "element"								
					}
				}
			},
			
			{
				title: '드래그',
				xtype: 'panel',
				cls: 'cls-content',
				
				id: 'page5',
				items: [
					{
						xtype: 'panel',
						itemId : 'panelHtml',
						html: "<div id='dragpanel' style='background?color:#00ff00'>드래그<br/>하셔요</div>",
						draggable:true,
						left:0,
						right:0,
						top:0,
						bottom:0,
						width:70,
						height:55,
						listeners:{
							dragstart:{
								fn:function(event){
								},
								element:"element"
							},
							drag:{
								fn:function(event){
								},
								element:"element"
							},
							dragend:{
								fn:function(event){
								},
								element:"element"
							}

						}                             
					}
				]
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
			}
		]
	},
		
	/**************Function for Listeners**************/
	onButton_Chapter1Tap: function(button, e, options) {
		var index = parseInt(button.initialConfig.num);//0~n-1까지 입니다.
		var titleBar = Ext.getCmp('ContentView1-titlebar');//RootPanel의 TitleBar
		
		Ext.getCmp('Step1_Basic').setActiveItem(index+1);
		titleBar.setTitle( button.getText() );
		
		
		
		//console.log( index );
		//console.log( titleBar );
		/*
		var index = parseInt(button.initialConfig.num);
		var titleBar = Ext.getCmp('ContentView1-titlebar');//RootPanel의 TitleBar
        
		Ext.getCmp('Toolbar_Pre').setDisabled(false);
		Ext.getCmp('Toolbar_Next').setDisabled(false);
		if (index == '0')
        {
			Ext.getCmp('Toolbar_Pre').hide();
			Ext.getCmp('Toolbar_Next').show();
        }
		else if (index == '4')
		{
			Ext.getCmp('Toolbar_Pre').show();
			Ext.getCmp('Toolbar_Next').hide();
		}
		else{
			Ext.getCmp('Toolbar_Pre').show();
			Ext.getCmp('Toolbar_Next').show();
		}

		Ext.getCmp('Root').setActiveItem(2);
        Ext.getCmp('Step1_Basic').setActiveItem(index);
		titleBar.setTitle( button.getText() );
		*/
		
		//각 View의 page0은 Menu로 사용. 1~N까지 각 페이지
		
    },

	//Title Bar
	onTitle_PreTap: function(button, e, options) {		
        //1. 이동
		var rootPanel = Ext.getCmp('Step1_Basic');//card속성을 가진 Step1_Basicd의 Root역할을 하는 Panel
		var titleBar = Ext.getCmp('ContentView1-titlebar');//RootPanel의 TitleBar
		var table = Ext.getCmp('page0');//RootPannel에 접근하는 목차에 접근합니다. text를 Title에 적어주기 위해서입니다.

		var num_cardSize = rootPanel.innerItems.length;
		var num_currentView = eval(rootPanel.getActiveItem().getItemId().slice(4,5));
		var num_preView = num_currentView - 1;//현재뷰에서 한칸 뒤로
		
		//console.log( MaxCardSize );
		if( num_preView >= 1 ){//범위내일때만 동작
			rootPanel.getLayout().setAnimation({type:'slide', direction:'right'});
			rootPanel.setActiveItem( Ext.getCmp('page' + num_preView ) );			
			titleBar.setTitle( table.items.items[num_preView-1].getText() );//왜 items를 두번 접근해야되는지 모르겠다.-_-
			
			//console.dir( table.items.items[0].getTitle() );
			
			if( num_preView == 1 ){//맨끝일때
				Ext.getCmp('Toolbar_Pre').hide();
				Ext.getCmp('Toolbar_Next').show();
			}
			else{
				Ext.getCmp('Toolbar_Pre').show();
				Ext.getCmp('Toolbar_Next').show();
			}
		}
    },

    
	onTitle_NextTap: function(button, e, options) {		
        //1. 이동
		var rootPanel = Ext.getCmp('Step1_Basic');//card속성을 가진 RootPanel
		var titleBar = Ext.getCmp('ContentView1-titlebar');//RootPanel의 TitleBar
		var table = Ext.getCmp('page0');//RootPannel에 접근하는 목차에 접근합니다. text를 Title에 적어주기 위해서입니다.

		var num_cardSize = rootPanel.innerItems.length;
		alert( 'num_cardSize : ' + num_cardSize);
		console.dir( rootPanel.innerItems );
		
		var num_currentView = eval(rootPanel._activeItem.id.slice(4,5));//현재뷰에서 한칸 앞으로
		var num_nextView = num_currentView + 1;//현재뷰에서 한칸 앞으로
		
		alert("지금 : " + num_currentView + "다음 : " + num_nextView );
		//console.log( MaxCardSize );
		if( num_nextView < num_cardSize ){//범위내일때만 동작
			rootPanel.getLayout().setAnimation({type:'slide', direction:'left'});
			rootPanel.setActiveItem( Ext.getCmp('page' + num_nextView ) );			
			titleBar.setTitle( table.items.items[num_nextView-1].getText() );//왜 items를 두번 접근해야되는지 모르겠다.-_-
			
			if( num_nextView == (num_cardSize-1) ){//맨끝일때
				Ext.getCmp('Toolbar_Pre').show();
				Ext.getCmp('Toolbar_Next').hide();
			}
			else{
				Ext.getCmp('Toolbar_Pre').show();
				Ext.getCmp('Toolbar_Next').show();
			}
		}
    },
	
	//Tool Bar
	onToolbar_HomeTap: function(button, e, options) {
        console.log("Home");
		Ext.getCmp('Root').getLayout().setAnimation({type:'pop'});
		Ext.getCmp('Root').setActiveItem(0);
    },
});