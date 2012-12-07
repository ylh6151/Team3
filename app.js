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
        completedOnDropDownViewLoad(); // ��� �ٿ� �̺�Ʈ ���� �ڹٽ�ũ��Ʈ dropDownEvents.js ���� �Ǿ� ����
    }
});
