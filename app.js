Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
	controllers: ['Main'],
    views: [
        'Root',//Card레이아웃을 위한 Root Panel		
		'Menu',//메인메뉴
		'Step1_Basic',//첫번째 콘텐츠 그룹
		'Step2_Call',//두번째 콘텐츠 그룹
		'Step3_Message',//세번째 콘텐츠 그룹
		
		'Main'//드래그앤드랍
		
    ],
    name: 'GuideApp',

    launch: function() {

        Ext.create('GuideApp.view.Root', { fullscreen: true });
        completedOnDropDownViewLoad();
    }
});
