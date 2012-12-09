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
            },
			//OverLay
			{
				xtype: 'panel',
				itemId: 'Overlay',
				
				centered: true,//가운데로 둥둥 띄우기
				hidden: true,//처음엔 숨김처리상태
				modal: true,//Mask처리를 해줍니다.
				
				//width: Ext.os.deviceType == "Phone" ? '320px' : '640px',
				//height: Ext.os.deviceType == "Phone" ? '240px' : '480px',
				width : '320px', height : '240px',
				
				items: [
					{
						xtype: 'video',					
						width: '100%', 
						height: '100%',
						url: './resources/video/CAM00244.mp4',
						posterUrl: './resources/images/play.png'
					}
				],
				listeners: [
					//버튼으로 닫기넣어줄겁니다. 자동종료 지우자!
					//재생은 posterURL을 활용합시다.
					{
						fn: function( event ) {
							Ext.getCmp('Root').query('video')[0].stop();
							Ext.getCmp('Root').query('#Overlay')[0].hide();//query는 '배열'을 반환합니다.							
						},
						event: 'ended',
						delegate: 'video'//xtype으로 접근했습니다.
					}
				]
			}
        ]
    },

	
});