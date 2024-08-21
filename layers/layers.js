var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TUNGURAHUA_CANT_1 = new ol.format.GeoJSON();
var features_TUNGURAHUA_CANT_1 = format_TUNGURAHUA_CANT_1.readFeatures(json_TUNGURAHUA_CANT_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TUNGURAHUA_CANT_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TUNGURAHUA_CANT_1.addFeatures(features_TUNGURAHUA_CANT_1);
var lyr_TUNGURAHUA_CANT_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TUNGURAHUA_CANT_1, 
                style: style_TUNGURAHUA_CANT_1,
                popuplayertitle: "TUNGURAHUA_CANT",
                interactive: true,
    title: 'TUNGURAHUA_CANT<br />\
    <img src="styles/legend/TUNGURAHUA_CANT_1_0.png" /> AMBATO<br />\
    <img src="styles/legend/TUNGURAHUA_CANT_1_1.png" /> BAÑOS<br />\
    <img src="styles/legend/TUNGURAHUA_CANT_1_2.png" /> CEVALLOS<br />\
    <img src="styles/legend/TUNGURAHUA_CANT_1_3.png" /> MOCHA<br />\
    <img src="styles/legend/TUNGURAHUA_CANT_1_4.png" /> PATATE<br />\
    <img src="styles/legend/TUNGURAHUA_CANT_1_5.png" /> QUERO<br />\
    <img src="styles/legend/TUNGURAHUA_CANT_1_6.png" /> PELILEO<br />\
    <img src="styles/legend/TUNGURAHUA_CANT_1_7.png" /> PILLARO<br />\
    <img src="styles/legend/TUNGURAHUA_CANT_1_8.png" /> TISALEO<br />'
        });
var format_Matriz_GPS_GEO_EC_SIFAe_2 = new ol.format.GeoJSON();
var features_Matriz_GPS_GEO_EC_SIFAe_2 = format_Matriz_GPS_GEO_EC_SIFAe_2.readFeatures(json_Matriz_GPS_GEO_EC_SIFAe_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Matriz_GPS_GEO_EC_SIFAe_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Matriz_GPS_GEO_EC_SIFAe_2.addFeatures(features_Matriz_GPS_GEO_EC_SIFAe_2);
var lyr_Matriz_GPS_GEO_EC_SIFAe_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Matriz_GPS_GEO_EC_SIFAe_2, 
                style: style_Matriz_GPS_GEO_EC_SIFAe_2,
                popuplayertitle: "Matriz_GPS_GEO_EC_SIFAe",
                interactive: true,
                title: '<img src="styles/legend/Matriz_GPS_GEO_EC_SIFAe_2.png" /> Matriz_GPS_GEO_EC_SIFAe'
            });

lyr_OSMStandard_0.setVisible(true);lyr_TUNGURAHUA_CANT_1.setVisible(true);lyr_Matriz_GPS_GEO_EC_SIFAe_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_TUNGURAHUA_CANT_1,lyr_Matriz_GPS_GEO_EC_SIFAe_2];
lyr_TUNGURAHUA_CANT_1.set('fieldAliases', {'DPA_VALOR': 'DPA_VALOR', 'DPA_ANIO': 'DPA_ANIO', 'DPA_CANTON': 'DPA_CANTON', 'DPA_DESCAN': 'DPA_DESCAN', 'DPA_PROVIN': 'DPA_PROVIN', 'DPA_DESPRO': 'DPA_DESPRO', 'UNION': 'UNION', });
lyr_Matriz_GPS_GEO_EC_SIFAe_2.set('fieldAliases', {'codigo_predio': 'codigo_predio', 'latitud': 'latitud', 'longitud': 'longitud', 'field_4': 'field_4', 'field_5': 'field_5', });
lyr_TUNGURAHUA_CANT_1.set('fieldImages', {'DPA_VALOR': 'Range', 'DPA_ANIO': 'TextEdit', 'DPA_CANTON': 'TextEdit', 'DPA_DESCAN': 'TextEdit', 'DPA_PROVIN': 'TextEdit', 'DPA_DESPRO': 'TextEdit', 'UNION': 'TextEdit', });
lyr_Matriz_GPS_GEO_EC_SIFAe_2.set('fieldImages', {'codigo_predio': '', 'latitud': '', 'longitud': '', 'field_4': '', 'field_5': '', });
lyr_TUNGURAHUA_CANT_1.set('fieldLabels', {'DPA_VALOR': 'hidden field', 'DPA_ANIO': 'hidden field', 'DPA_CANTON': 'hidden field', 'DPA_DESCAN': 'header label - visible with data', 'DPA_PROVIN': 'hidden field', 'DPA_DESPRO': 'hidden field', 'UNION': 'hidden field', });
lyr_Matriz_GPS_GEO_EC_SIFAe_2.set('fieldLabels', {'codigo_predio': 'hidden field', 'latitud': 'inline label - always visible', 'longitud': 'inline label - always visible', 'field_4': 'hidden field', 'field_5': 'hidden field', });
lyr_Matriz_GPS_GEO_EC_SIFAe_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});