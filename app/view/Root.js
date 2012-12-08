Ext.define('MyApp.view.Root', {
    extend: 'Ext.Container',
    cls: 'cls-content',
    config: {
    	//cls: 'cls-content',
    	id: 'Root',
        layout: {
            type: 'card',
			animation:'slide'
        },
		/**************Items**************/
        items: [
            {
                xtype: 'MenuView',
            },
			{
                xtype: 'Step1_Basic',//기본동작 View입니다.
            }            
        ]
    },

	
});