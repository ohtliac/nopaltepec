var wms_layers = [];


        var lyr_SATELITEGOOGLE_0 = new ol.layer.Tile({
            'title': 'SATELITEGOOGLE',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_SECCIONESELECTORALESOK_1 = new ol.format.GeoJSON();
var features_SECCIONESELECTORALESOK_1 = format_SECCIONESELECTORALESOK_1.readFeatures(json_SECCIONESELECTORALESOK_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SECCIONESELECTORALESOK_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SECCIONESELECTORALESOK_1.addFeatures(features_SECCIONESELECTORALESOK_1);
var lyr_SECCIONESELECTORALESOK_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SECCIONESELECTORALESOK_1, 
                style: style_SECCIONESELECTORALESOK_1,
                interactive: true,
                title: '<img src="styles/legend/SECCIONESELECTORALESOK_1.png" /> SECCIONES ELECTORALES OK'
            });
var format_NOPALTEPECOK_2 = new ol.format.GeoJSON();
var features_NOPALTEPECOK_2 = format_NOPALTEPECOK_2.readFeatures(json_NOPALTEPECOK_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NOPALTEPECOK_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NOPALTEPECOK_2.addFeatures(features_NOPALTEPECOK_2);
var lyr_NOPALTEPECOK_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NOPALTEPECOK_2, 
                style: style_NOPALTEPECOK_2,
                interactive: true,
                title: '<img src="styles/legend/NOPALTEPECOK_2.png" /> NOPALTEPEC OK'
            });

lyr_SATELITEGOOGLE_0.setVisible(true);lyr_SECCIONESELECTORALESOK_1.setVisible(true);lyr_NOPALTEPECOK_2.setVisible(true);
var layersList = [lyr_SATELITEGOOGLE_0,lyr_SECCIONESELECTORALESOK_1,lyr_NOPALTEPECOK_2];
lyr_SECCIONESELECTORALESOK_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'SECCIÓN': 'SECCIÓN', 'ID MUNICIP': 'ID MUNICIP', 'MUNICIPIO': 'MUNICIPIO', 'VOTOSPRIAN': 'VOTOSPRIAN', 'VOTOSVPTMO': 'VOTOSVPTMO', 'VOTOS MC': 'VOTOS MC', 'LISTA NOM': 'LISTA NOM', 'PARTICIPACION': 'PARTICIPACION', '% TRIUNFO': '% TRIUNFO', });
lyr_NOPALTEPECOK_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'ID MUNICIP': 'ID MUNICIP', 'MUNICIPIO': 'MUNICIPIO', 'VOTOSPRIAN': 'VOTOSPRIAN', 'VOTOSVPTMO': 'VOTOSVPTMO', 'VOTOS MC': 'VOTOS MC', 'LISTA NOM': 'LISTA NOM', 'PARTICIPACION': 'PARTICIPACION', '% TRIUNFO': '% TRIUNFO', 'VOTANTES': 'VOTANTES', });
lyr_SECCIONESELECTORALESOK_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'SECCIÓN': 'TextEdit', 'ID MUNICIP': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'VOTOSPRIAN': 'TextEdit', 'VOTOSVPTMO': 'TextEdit', 'VOTOS MC': 'TextEdit', 'LISTA NOM': '', 'PARTICIPACION': '', '% TRIUNFO': '', });
lyr_NOPALTEPECOK_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'ID MUNICIP': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'VOTOSPRIAN': 'TextEdit', 'VOTOSVPTMO': 'TextEdit', 'VOTOS MC': 'TextEdit', 'LISTA NOM': '', 'PARTICIPACION': '', '% TRIUNFO': '', 'VOTANTES': '', });
lyr_SECCIONESELECTORALESOK_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'SECCIÓN': 'inline label', 'ID MUNICIP': 'inline label', 'MUNICIPIO': 'inline label', 'VOTOSPRIAN': 'inline label', 'VOTOSVPTMO': 'inline label', 'VOTOS MC': 'inline label', 'LISTA NOM': 'inline label', 'PARTICIPACION': 'inline label', '% TRIUNFO': 'inline label', });
lyr_NOPALTEPECOK_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'ID MUNICIP': 'inline label', 'MUNICIPIO': 'inline label', 'VOTOSPRIAN': 'inline label', 'VOTOSVPTMO': 'inline label', 'VOTOS MC': 'inline label', 'LISTA NOM': 'inline label', 'PARTICIPACION': 'inline label', '% TRIUNFO': 'inline label', 'VOTANTES': 'inline label', });
lyr_NOPALTEPECOK_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});