Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
	controllers: ['DragDrop'],
    views: [
        'Root',//Card���̾ƿ��� ���� Root Panel		
		'Menu',//���θ޴�
		'Step1_Basic',//ù��° ������ �׷�
		'Step2_Call',//�ι�° ������ �׷�
		'Step3_Message',//����° ������ �׷�
		
	
		'DragDrop'//�巡�׾ص��
		
    ],
    name: 'GuideApp',

    launch: function() {

        Ext.create('GuideApp.view.Root', { fullscreen: true });
        completedOnDropDownViewLoad();
    }
});
