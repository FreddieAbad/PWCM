var wms_layers = [];

        var lyr_CapaBaseOSM_0 = new ol.layer.Tile({
            'title': 'Capa Base OSM',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_LIMITES_PARROQUIAL_RURAL_CUENCA_1 = new ol.format.GeoJSON();
var features_LIMITES_PARROQUIAL_RURAL_CUENCA_1 = format_LIMITES_PARROQUIAL_RURAL_CUENCA_1.readFeatures(json_LIMITES_PARROQUIAL_RURAL_CUENCA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITES_PARROQUIAL_RURAL_CUENCA_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_LIMITES_PARROQUIAL_RURAL_CUENCA_1.addFeatures(features_LIMITES_PARROQUIAL_RURAL_CUENCA_1);var lyr_LIMITES_PARROQUIAL_RURAL_CUENCA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIMITES_PARROQUIAL_RURAL_CUENCA_1, 
                style: style_LIMITES_PARROQUIAL_RURAL_CUENCA_1,
                title: '<img src="styles/legend/LIMITES_PARROQUIAL_RURAL_CUENCA_1.png" /> LIMITES_PARROQUIAL_RURAL_CUENCA'
            });var format_LIMITES_PARROQUIAL_CUENCA_2 = new ol.format.GeoJSON();
var features_LIMITES_PARROQUIAL_CUENCA_2 = format_LIMITES_PARROQUIAL_CUENCA_2.readFeatures(json_LIMITES_PARROQUIAL_CUENCA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITES_PARROQUIAL_CUENCA_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_LIMITES_PARROQUIAL_CUENCA_2.addFeatures(features_LIMITES_PARROQUIAL_CUENCA_2);var lyr_LIMITES_PARROQUIAL_CUENCA_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIMITES_PARROQUIAL_CUENCA_2, 
                style: style_LIMITES_PARROQUIAL_CUENCA_2,
                title: '<img src="styles/legend/LIMITES_PARROQUIAL_CUENCA_2.png" /> LIMITES_PARROQUIAL_CUENCA'
            });var format_LIMITE_URBANO_CUENCA_3 = new ol.format.GeoJSON();
var features_LIMITE_URBANO_CUENCA_3 = format_LIMITE_URBANO_CUENCA_3.readFeatures(json_LIMITE_URBANO_CUENCA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITE_URBANO_CUENCA_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_LIMITE_URBANO_CUENCA_3.addFeatures(features_LIMITE_URBANO_CUENCA_3);var lyr_LIMITE_URBANO_CUENCA_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIMITE_URBANO_CUENCA_3, 
                style: style_LIMITE_URBANO_CUENCA_3,
                title: '<img src="styles/legend/LIMITE_URBANO_CUENCA_3.png" /> LIMITE_URBANO_CUENCA'
            });var format_transporte_publico_cobertura_500m_4 = new ol.format.GeoJSON();
var features_transporte_publico_cobertura_500m_4 = format_transporte_publico_cobertura_500m_4.readFeatures(json_transporte_publico_cobertura_500m_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_transporte_publico_cobertura_500m_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_transporte_publico_cobertura_500m_4.addFeatures(features_transporte_publico_cobertura_500m_4);var lyr_transporte_publico_cobertura_500m_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_transporte_publico_cobertura_500m_4, 
                style: style_transporte_publico_cobertura_500m_4,
                title: '<img src="styles/legend/transporte_publico_cobertura_500m_4.png" /> transporte_publico_cobertura_500m'
            });var format_transporte_urbano_cobertura_500m_5 = new ol.format.GeoJSON();
var features_transporte_urbano_cobertura_500m_5 = format_transporte_urbano_cobertura_500m_5.readFeatures(json_transporte_urbano_cobertura_500m_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_transporte_urbano_cobertura_500m_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_transporte_urbano_cobertura_500m_5.addFeatures(features_transporte_urbano_cobertura_500m_5);var lyr_transporte_urbano_cobertura_500m_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_transporte_urbano_cobertura_500m_5, 
                style: style_transporte_urbano_cobertura_500m_5,
                title: '<img src="styles/legend/transporte_urbano_cobertura_500m_5.png" /> transporte_urbano_cobertura_500m'
            });var format_transporte_interparroquial_cobertura_500m_6 = new ol.format.GeoJSON();
var features_transporte_interparroquial_cobertura_500m_6 = format_transporte_interparroquial_cobertura_500m_6.readFeatures(json_transporte_interparroquial_cobertura_500m_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_transporte_interparroquial_cobertura_500m_6 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_transporte_interparroquial_cobertura_500m_6.addFeatures(features_transporte_interparroquial_cobertura_500m_6);var lyr_transporte_interparroquial_cobertura_500m_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_transporte_interparroquial_cobertura_500m_6, 
                style: style_transporte_interparroquial_cobertura_500m_6,
                title: '<img src="styles/legend/transporte_interparroquial_cobertura_500m_6.png" /> transporte_interparroquial_cobertura_500m'
            });var format_LIMITES_CABECERAS_PARROQUIALES_CUENCA_7 = new ol.format.GeoJSON();
var features_LIMITES_CABECERAS_PARROQUIALES_CUENCA_7 = format_LIMITES_CABECERAS_PARROQUIALES_CUENCA_7.readFeatures(json_LIMITES_CABECERAS_PARROQUIALES_CUENCA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITES_CABECERAS_PARROQUIALES_CUENCA_7 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_LIMITES_CABECERAS_PARROQUIALES_CUENCA_7.addFeatures(features_LIMITES_CABECERAS_PARROQUIALES_CUENCA_7);var lyr_LIMITES_CABECERAS_PARROQUIALES_CUENCA_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIMITES_CABECERAS_PARROQUIALES_CUENCA_7, 
                style: style_LIMITES_CABECERAS_PARROQUIALES_CUENCA_7,
                title: '<img src="styles/legend/LIMITES_CABECERAS_PARROQUIALES_CUENCA_7.png" /> LIMITES_CABECERAS_PARROQUIALES_CUENCA'
            });
var group_Movilidad1 = new ol.layer.Group({
                                layers: [lyr_CapaBaseOSM_0,lyr_LIMITES_PARROQUIAL_RURAL_CUENCA_1,lyr_LIMITES_PARROQUIAL_CUENCA_2,lyr_LIMITE_URBANO_CUENCA_3,lyr_transporte_publico_cobertura_500m_4,lyr_transporte_urbano_cobertura_500m_5,lyr_transporte_interparroquial_cobertura_500m_6,lyr_LIMITES_CABECERAS_PARROQUIALES_CUENCA_7,],
                                title: "Movilidad1 "});

lyr_CapaBaseOSM_0.setVisible(true);lyr_LIMITES_PARROQUIAL_RURAL_CUENCA_1.setVisible(true);lyr_LIMITES_PARROQUIAL_CUENCA_2.setVisible(true);lyr_LIMITE_URBANO_CUENCA_3.setVisible(true);lyr_transporte_publico_cobertura_500m_4.setVisible(true);lyr_transporte_urbano_cobertura_500m_5.setVisible(true);lyr_transporte_interparroquial_cobertura_500m_6.setVisible(true);lyr_LIMITES_CABECERAS_PARROQUIALES_CUENCA_7.setVisible(true);
var layersList = [group_Movilidad1];
lyr_LIMITES_PARROQUIAL_RURAL_CUENCA_1.set('fieldAliases', {});
lyr_LIMITES_PARROQUIAL_CUENCA_2.set('fieldAliases', {'Parroquia': 'Parroquia', 'Ãrea__Ha_': 'Ãrea__Ha_', });
lyr_LIMITE_URBANO_CUENCA_3.set('fieldAliases', {'Ãrea__Ha_': 'Ãrea__Ha_', 'Limite_Urb': 'Limite_Urb', });
lyr_transporte_publico_cobertura_500m_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_transporte_urbano_cobertura_500m_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_transporte_interparroquial_cobertura_500m_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_LIMITES_CABECERAS_PARROQUIALES_CUENCA_7.set('fieldAliases', {'Ãrea__Ha_': 'Ãrea__Ha_', 'Cabecera_P': 'Cabecera_P', });
lyr_LIMITES_PARROQUIAL_RURAL_CUENCA_1.set('fieldImages', {});
lyr_LIMITES_PARROQUIAL_CUENCA_2.set('fieldImages', {'Parroquia': '', 'Ãrea__Ha_': '', });
lyr_LIMITE_URBANO_CUENCA_3.set('fieldImages', {'Ãrea__Ha_': '', 'Limite_Urb': '', });
lyr_transporte_publico_cobertura_500m_4.set('fieldImages', {'OBJECTID': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_transporte_urbano_cobertura_500m_5.set('fieldImages', {'OBJECTID': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_transporte_interparroquial_cobertura_500m_6.set('fieldImages', {'OBJECTID': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_LIMITES_CABECERAS_PARROQUIALES_CUENCA_7.set('fieldImages', {'Ãrea__Ha_': '', 'Cabecera_P': '', });
lyr_LIMITES_PARROQUIAL_RURAL_CUENCA_1.set('fieldLabels', {});
lyr_LIMITES_PARROQUIAL_CUENCA_2.set('fieldLabels', {});
lyr_LIMITE_URBANO_CUENCA_3.set('fieldLabels', {});
lyr_transporte_publico_cobertura_500m_4.set('fieldLabels', {});
lyr_transporte_urbano_cobertura_500m_5.set('fieldLabels', {});
lyr_transporte_interparroquial_cobertura_500m_6.set('fieldLabels', {});
lyr_LIMITES_CABECERAS_PARROQUIALES_CUENCA_7.set('fieldLabels', {});
lyr_LIMITES_CABECERAS_PARROQUIALES_CUENCA_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});