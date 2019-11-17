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
            });var format_TransportePublicoCob_500m_3 = new ol.format.GeoJSON();
var features_TransportePublicoCob_500m_3 = format_TransportePublicoCob_500m_3.readFeatures(json_TransportePublicoCob_500m_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TransportePublicoCob_500m_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_TransportePublicoCob_500m_3.addFeatures(features_TransportePublicoCob_500m_3);var lyr_TransportePublicoCob_500m_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TransportePublicoCob_500m_3, 
                style: style_TransportePublicoCob_500m_3,
                title: '<img src="styles/legend/TransportePublicoCob_500m_3.png" /> Transporte Publico Cob_500m'
            });

lyr_CapaBaseOSM_0.setVisible(true);lyr_LimitesParroquialesCuenca_1.setVisible(true);lyr_LimiteUrbanoCuenca_2.setVisible(true);lyr_TransportePublicoCob_500m_3.setVisible(true);
var layersList = [lyr_CapaBaseOSM_0,lyr_LimitesParroquialesCuenca_1,lyr_LimiteUrbanoCuenca_2,lyr_TransportePublicoCob_500m_3];
lyr_LimitesParroquialesCuenca_1.set('fieldAliases', {'Parroquia': 'Parroquia', 'Area Ha.': 'Area Ha.', });
lyr_LimiteUrbanoCuenca_2.set('fieldAliases', {'Area Ha.': 'Area Ha.', 'Limite_Urb': 'Limite_Urb', });
lyr_TransportePublicoCob_500m_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_LimitesParroquialesCuenca_1.set('fieldImages', {'Parroquia': 'TextEdit', 'Area Ha.': 'TextEdit', });
lyr_LimiteUrbanoCuenca_2.set('fieldImages', {'Area Ha.': '', 'Limite_Urb': 'TextEdit', });
lyr_TransportePublicoCob_500m_3.set('fieldImages', {'OBJECTID': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_LimitesParroquialesCuenca_1.set('fieldLabels', {'Parroquia': 'no label', 'Area Ha.': 'no label', });
lyr_LimiteUrbanoCuenca_2.set('fieldLabels', {'Area Ha.': 'no label', 'Limite_Urb': 'no label', });
lyr_TransportePublicoCob_500m_3.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_TransportePublicoCob_500m_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});