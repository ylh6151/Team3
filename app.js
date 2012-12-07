Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    views: [
        'Root',
		'Menu',
		'Step1_Basic',
    ],
    name: 'MyApp',

    launch: function() {

        Ext.create('MyApp.view.Root', { fullscreen: true });
        completedOnDropDownViewLoad(); // 드랍 다운 이벤트 관련 자바스크립트 dropDownEvents.js 정의 되어 있음
    }
});
