Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
	controllers: ['Main'],
    views: [
        'Root',
		'Menu',
		'Step1_Basic',
		'Main'
    ],
    name: 'MyApp',

    launch: function() {

        Ext.create('MyApp.view.Root', { fullscreen: true });
        completedOnDropDownViewLoad();
    }
});
