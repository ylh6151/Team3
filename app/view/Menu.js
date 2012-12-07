Ext.define('MyApp.view.Menu', { 
	extend: 'Ext.Panel',
	xtype: 'MenuView',
	id:  'MenuView',       
	
	config: {
		cls: 'cls-content',/*backgroundImg가 들어가는 class입니다*/
		
		/**************Items**************/
		items: [
			{
				xtype: 'titlebar',
				docked: 'top',
				//cls: 'cls-title',/*backgroundImg가 들어가는 class입니다*/
				
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
		],
		
		/**************Listeners**************/
		listeners: [
			{
				fn: 'onButton_BasicTap',
				event: 'tap',
				delegate: '#button_basic'
			}
		]
	},
	
	/**************Function for Listeners**************/
	onButton_BasicTap: function(button, e, options) {
		Ext.getCmp('Root').getLayout().setAnimation({type:'slide', direction:'left'});
		Ext.getCmp('Root').setActiveItem(1);
	}
});

