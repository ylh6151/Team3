/*
 * File: app/view/Root.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.Root', {
    extend: 'Ext.Container',

    config: {
        id: 'Root',
        layout: {
            type: 'card',
			animation:'slide'
        },
        items: [
            {
                xtype: 'panel',
                id: 'Menu',
                items: [
                    {
                        xtype: 'titlebar',
                        docked: 'top',
                        title: '스마트폰길라잡이'
                    },
                    {
                        xtype: 'button',
                        itemId: 'button_basic',
                        ui: 'round',
                        text: '기본동작'
                    },
					{
                        xtype: 'button',
                        itemId: 'button_phonetext',
                        ui: 'round',
                        text: '전화&문자'
                    }
                ]
            },
			{
                xtype: 'panel',
                id: 'Basic',
                items: [
                    {
                        xtype: 'titlebar',
                        docked: 'top',
                        title: '기본동작'
                    },
                    {
                        xtype: 'button',
                        itemId: 'button_tap',
                        ui: 'round',
                        text: '탭'
                    },
					{
                        xtype: 'button',
                        itemId: 'button_taphold',
                        ui: 'round',
                        text: '탭홀드'
                    },
					{
                        xtype: 'button',
                        itemId: 'button_swip',
                        ui: 'round',
                        text: '스와이프'
                    },
					{
                        xtype: 'button',
                        itemId: 'button_pinch',
                        ui: 'round',
                        text: '핀치'
                    },
					{
                        xtype: 'button',
                        itemId: 'button_drop',
                        ui: 'round',
                        text: '드롭'
                    }

                ]
            },
            {
                xtype: 'panel',
                id: 'ContentView1',
                layout: {
                    type: 'card',
					animation:'slide'
                },
                items: [
                    {
                        xtype: 'toolbar',
                        docked: 'bottom',
                        defaults: {
                            iconMask: true,
                            ui: 'plain'
                        },
                        items: [
                            {
								xtype: 'spacer'
							},
							{
                                xtype: 'button',
								itemId: 'Toolbar_Pre',
                                iconCls: 'arrow_left',
                                iconMask: true,
                                text: '이전으로'
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
                                xtype: 'button',
                                itemId: 'Toolbar_Next',
                                iconAlign: 'right',
                                iconCls: 'arrow_right',
                                iconMask: true,
                                text: '다음으로'
                            },
							{
								xtype: 'spacer'
							}
                        ]
                    },
                    {
                        xtype: 'panel',
						id: 'page0',
                        items: [
                            {
                                xtype: 'titlebar',
                                docked: 'top',
                                title: '탭'
                            },
							{
								xtype:'button',
								cls:'cls-star',
								pressedCls:'cls-star2',
								pressedDelay:2000,
							}
                        ]
                    },
                    {
                        xtype: 'panel',
                        id: 'page1',
                        items: [
                            {
                                xtype: 'titlebar',
                                docked: 'top',
                                title: '탭홀드'
                            }
                        ]
                    },
					{
                        xtype: 'panel',
                        id: 'page2',
						html: '<div class="cls-pinwheel" style = "width: 300px; height: 300px;"><img src="./app/image/pinwheel_aquay.png"></div>',
                        items: [
                            {
                                xtype: 'titlebar',
                                docked: 'top',
                                title: '스와이프'
                            }
                        ],
						listeners: {
							swipe :{
								fn : function( event ) {
									//alert('발생');
									//console.dir( document.querySelector('.cls-pinwheel') );
									document.querySelector('.cls-pinwheel').className = 'cls-pinwheel-animation';
									setTimeout( "document.querySelector('.cls-pinwheel-animation').className = 'cls-pinwheel';" , 3000);
								},
								element : "element"
								
							}
						}
                    },
                    {
                        xtype: 'panel',
                        id: 'page3',
                        items: [
                            {
                                xtype: 'titlebar',
                                docked: 'top',
                                title: '핀치'
                            }
                        ]
                    },
					{
                        xtype: 'panel',
                        id: 'page4',
                        items: [
                            {
                                xtype: 'titlebar',
                                docked: 'top',
                                html: dropHtml,
                                title: '드롭'
                            }
                        ]
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onButton_BasicTap',
                event: 'tap',
                delegate: '#button_basic'
            },
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
                fn: 'onToolbar_PreTap',
                event: 'tap',
                delegate: '#Toolbar_Pre'
            },
            {
                fn: 'onToolbar_HomeTap',
                event: 'tap',
                delegate: '#Toolbar_Home'
            },
            {
                fn: 'onToolbar_NextTap',
                event: 'tap',
                delegate: '#Toolbar_Next'
            }
        ]
    },

    onButton_BasicTap: function(button, e, options) {
        Ext.getCmp('Root').setActiveItem(1);
		 
    },

	onButton_Chapter1Tap: function(button, e, options) {
        Ext.getCmp('Root').setActiveItem(2);
    },

    onToolbar_PreTap: function(button, e, options) {
        var rootPanel = Ext.getCmp('ContentView1');//card속성을 가진 RootPanel
        var num_currentView = eval(rootPanel._activeItem.id.slice(4,5)) - 1;//현재뷰에서 한칸 위로


        if( num_currentView < 0 ){
            alert( "홈으로 : ");

            num_currentView = 0;//초기화
           	rootPanel.setActiveItem( Ext.getCmp('page' + num_currentView ) );
        }
		//첫번째 페이지일때 이전버튼 안보이기
		else if( num_currentView == 0 ){
           	Ext.getCmp('ContentView1').items.items[0].innerItems[0].disable();
			rootPanel.setActiveItem( Ext.getCmp('page' + num_currentView ) );
        }
        else{
            alert("이전으로");

			rootPanel.getLayout().setAnimation({type:'slide', direction:'right'});        
			rootPanel.setActiveItem( Ext.getCmp('page' + num_currentView ) );
        }

    },

    onToolbar_HomeTap: function(button, e, options) {
        //Ext.getCmp('Root').getLayout().setAnimation({type:'pop'});
		Ext.getCmp('Root').setActiveItem(0);
    },

    onToolbar_NextTap: function(button, e, options) {
        var rootPanel = Ext.getCmp('ContentView1');//card속성을 가진 RootPanel
        var num_currentView = eval(rootPanel._activeItem.id.slice(4,5)) + 1;//현재뷰에서 한칸 위로


        if( num_currentView >= rootPanel.innerItems.length ){
            alert( "홈으로 : ");

            num_currentView = 0;//초기화
            rootPanel.setActiveItem( Ext.getCmp('page' + num_currentView ) );
        }
		//마지막 페이지일때 다음버튼 안보이기
//		else if( num_currentView == 4 ){
//           	Ext.getCmp('ContentView1').items.items[0].innerItems[3].hide();
//			rootPanel.setActiveItem( Ext.getCmp('page' + num_currentView ) );
//        }
        else{
            alert("다음으로");

			rootPanel.getLayout().setAnimation({type:'slide', direction:'left'});         
			rootPanel.setActiveItem( Ext.getCmp('page' + num_currentView ) );
        }

    }

});