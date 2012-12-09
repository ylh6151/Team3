Ext.define('MyApp.view.Menu', { 
	extend: 'Ext.Panel',
	xtype: 'MenuView',
	id:  'MenuView',       
	
	config: {
		cls: 'cls-main',/*backgroundImg가 들어가는 class입니다*/
		
		/**************Items**************/
		items: [
			{
				xtype: 'button',
				itemId: 'button_basic',
				cls:'cls-basicmenu',
			},
			{
				xtype: 'button',
				itemId: 'button_phone',
				cls:'cls-phonemenu',
			},
			{
				xtype: 'button',
				itemId: 'button_text',
				cls:'cls-textmenu',
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
		Ext.getCmp('Step1_Basic').setActiveItem(0);		
	}
});

