Ext.define('GuideApp.view.DragDrop', {
    extend: 'Ext.Panel',
    xtype: 'dragDrop',

    config: {

        items: [
            {
           
            	layout: {
                    type: 'vbox',
                    align: 'center'
                },
                
                items: [
                             
                    {
                        id: 'draggsCnt',
                        xtype: 'container',
                        
                        layout: {
                            type: 'hbox',
                            align: 'center'
                        },
                        
                        items: [
                            {
                                xtype: 'container',
                                cls: 'dmb',
                                style: 'background-color: green;',
                                padding: 5,
                                html: 'Drag me, baby',
                                draggable: true
                            },
                            {
                                xtype: 'spacer',
                                width: 5
                            },
                            {
                                xtype: 'container',
                                cls: 'dmb',
                                style: 'background-color: orange;',
                                padding: 5,
                                html: 'Drag me, baby',
                                draggable: true
                            },
                            {
                                xtype: 'spacer',
                                width: 5
                            },
                            {
                                xtype: 'container',
                                cls: 'dmb',
                                style: 'background-color: purple;',
                                padding: 5,
                                html: 'Drag me, baby',
                                draggable: true
                            },
                        ]
                    },
                    
                                       
                    {
                        xtype: 'spacer',
                      
                    },
                    {
                        id: 'spaceArea',
                        xtype: 'container',
                        
                        width: '80%',
                     
                        padding: 40,
                        layout: {
                            type: 'vbox',
                            align: 'center'
                        }
                       
                    },
                    
        
                    {
                        id: 'dropCnt',
                        xtype: 'container',
                        
                        width: '80%',
                        style: 'background-color: #1E90FF; border-radius: 7px; color: white; text-align: center',
                        padding: 60,
                        layout: {
                            type: 'vbox',
                            align: 'center'
                        },
                        html: 'Drop me here'
                    }
                ]
            }
            
            
        ]
    }
});
