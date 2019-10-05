var wms_layers = [];

        var lyr_CapaBaseOSM_0 = new ol.layer.Tile({
            'title': 'Capa Base OSM',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_LimitesParroquialesCuenca_1 = new ol.format.GeoJSON();
var features_LimitesParroquialesCuenca_1 = format_LimitesParroquialesCuenca_1.readFeatures(json_LimitesParroquialesCuenca_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesParroquialesCuenca_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_LimitesParroquialesCuenca_1.addFeatures(features_LimitesParroquialesCuenca_1);var lyr_LimitesParroquialesCuenca_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimitesParroquialesCuenca_1, 
                style: style_LimitesParroquialesCuenca_1,
                title: '<img src="styles/legend/LimitesParroquialesCuenca_1.png" /> Limites Parroquiales Cuenca'
            });var format_LimiteUrbanoCuenca_2 = new ol.format.GeoJSON();
var features_LimiteUrbanoCuenca_2 = format_LimiteUrbanoCuenca_2.readFeatures(json_LimiteUrbanoCuenca_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteUrbanoCuenca_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_LimiteUrbanoCuenca_2.addFeatures(features_LimiteUrbanoCuenca_2);var lyr_LimiteUrbanoCuenca_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteUrbanoCuenca_2, 
                style: style_LimiteUrbanoCuenca_2,
                title: '<img src="styles/legend/LimiteUrbanoCuenca_2.png" /> Limite Urbano Cuenca'
            });var format_TransporteInterparroquialCob_500m_3 = new ol.format.GeoJSON();
var features_TransporteInterparroquialCob_500m_3 = format_TransporteInterparroquialCob_500m_3.readFeatures(json_TransporteInterparroquialCob_500m_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TransporteInterparroquialCob_500m_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_TransporteInterparroquialCob_500m_3.addFeatures(features_TransporteInterparroquialCob_500m_3);var lyr_TransporteInterparroquialCob_500m_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TransporteInterparroquialCob_500m_3, 
                style: style_TransporteInterparroquialCob_500m_3,
                title: '<img src="styles/legend/TransporteInterparroquialCob_500m_3.png" /> Transporte Interparroquial Cob_500m'
            });var format_TransportePublicoCob_500m_4 = new ol.format.GeoJSON();
var features_TransportePublicoCob_500m_4 = format_TransportePublicoCob_500m_4.readFeatures(json_TransportePublicoCob_500m_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TransportePublicoCob_500m_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_TransportePublicoCob_500m_4.addFeatures(features_TransportePublicoCob_500m_4);var lyr_TransportePublicoCob_500m_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TransportePublicoCob_500m_4, 
                style: style_TransportePublicoCob_500m_4,
                title: '<img src="styles/legend/TransportePublicoCob_500m_4.png" /> Transporte Publico Cob_500m'
            });var format_TransporteUrbanoCob_500m_5 = new ol.format.GeoJSON();
var features_TransporteUrbanoCob_500m_5 = format_TransporteUrbanoCob_500m_5.readFeatures(json_TransporteUrbanoCob_500m_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TransporteUrbanoCob_500m_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_TransporteUrbanoCob_500m_5.addFeatures(features_TransporteUrbanoCob_500m_5);var lyr_TransporteUrbanoCob_500m_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TransporteUrbanoCob_500m_5, 
                style: style_TransporteUrbanoCob_500m_5,
                title: '<img src="styles/legend/TransporteUrbanoCob_500m_5.png" /> Transporte Urbano Cob_500m'
            });var format_LimitesCabecerasParroquialesCuenca_6 = new ol.format.GeoJSON();
var features_LimitesCabecerasParroquialesCuenca_6 = format_LimitesCabecerasParroquialesCuenca_6.readFeatures(json_LimitesCabecerasParroquialesCuenca_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesCabecerasParroquialesCuenca_6 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_LimitesCabecerasParroquialesCuenca_6.addFeatures(features_LimitesCabecerasParroquialesCuenca_6);var lyr_LimitesCabecerasParroquialesCuenca_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimitesCabecerasParroquialesCuenca_6, 
                style: style_LimitesCabecerasParroquialesCuenca_6,
                title: '<img src="styles/legend/LimitesCabecerasParroquialesCuenca_6.png" /> Limites Cabeceras Parroquiales Cuenca'
            });

lyr_CapaBaseOSM_0.setVisible(true);lyr_LimitesParroquialesCuenca_1.setVisible(true);lyr_LimiteUrbanoCuenca_2.setVisible(true);lyr_TransporteInterparroquialCob_500m_3.setVisible(true);lyr_TransportePublicoCob_500m_4.setVisible(true);lyr_TransporteUrbanoCob_500m_5.setVisible(true);lyr_LimitesCabecerasParroquialesCuenca_6.setVisible(true);
var layersList = [lyr_CapaBaseOSM_0,lyr_LimitesParroquialesCuenca_1,lyr_LimiteUrbanoCuenca_2,lyr_TransporteInterparroquialCob_500m_3,lyr_TransportePublicoCob_500m_4,lyr_TransporteUrbanoCob_500m_5,lyr_LimitesCabecerasParroquialesCuenca_6];
lyr_LimitesParroquialesCuenca_1.set('fieldAliases', {'Parroquia': 'Parroquia', 'Area Ha.': 'Area Ha.', });
lyr_LimiteUrbanoCuenca_2.set('fieldAliases', {'Area Ha.': 'Area Ha.', 'Limite_Urb': 'Limite_Urb', });
lyr_TransporteInterparroquialCob_500m_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_TransportePublicoCob_500m_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_TransporteUrbanoCob_500m_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_LimitesCabecerasParroquialesCuenca_6.set('fieldAliases', {'Area Ha.': 'Area Ha.', 'Cabecera_P': 'Cabecera_P', });
lyr_LimitesParroquialesCuenca_1.set('fieldImages', {'Parroquia': 'TextEdit', 'Area Ha.': 'TextEdit', });
lyr_LimiteUrbanoCuenca_2.set('fieldImages', {'Area Ha.': '', 'Limite_Urb': 'TextEdit', });
lyr_TransporteInterparroquialCob_500m_3.set('fieldImages', {'OBJECTID': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_TransportePublicoCob_500m_4.set('fieldImages', {'OBJECTID': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_TransporteUrbanoCob_500m_5.set('fieldImages', {'OBJECTID': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_LimitesCabecerasParroquialesCuenca_6.set('fieldImages', {'Area Ha.': '', 'Cabecera_P': 'TextEdit', });
lyr_LimitesParroquialesCuenca_1.set('fieldLabels', {'Parroquia': 'no label', 'Area Ha.': 'no label', });
lyr_LimiteUrbanoCuenca_2.set('fieldLabels', {'Area Ha.': 'no label', 'Limite_Urb': 'no label', });
lyr_TransporteInterparroquialCob_500m_3.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Leng': 'inline label', 'Shape_Area': 'no label', });
lyr_TransportePublicoCob_500m_4.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_TransporteUrbanoCob_500m_5.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_LimitesCabecerasParroquialesCuenca_6.set('fieldLabels', {'Area Ha.': 'no label', 'Cabecera_P': 'no label', });
lyr_LimitesCabecerasParroquialesCuenca_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});