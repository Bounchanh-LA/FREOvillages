var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PX_distbound_1 = new ol.format.GeoJSON();
var features_PX_distbound_1 = format_PX_distbound_1.readFeatures(json_PX_distbound_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PX_distbound_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PX_distbound_1.addFeatures(features_PX_distbound_1);
var lyr_PX_distbound_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PX_distbound_1, 
                style: style_PX_distbound_1,
                popuplayertitle: 'PX_distbound',
                interactive: false,
                title: '<img src="styles/legend/PX_distbound_1.png" /> PX_distbound'
            });
var format_road_PX_2 = new ol.format.GeoJSON();
var features_road_PX_2 = format_road_PX_2.readFeatures(json_road_PX_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_road_PX_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_road_PX_2.addFeatures(features_road_PX_2);
var lyr_road_PX_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_road_PX_2, 
                style: style_road_PX_2,
                popuplayertitle: 'road_PX',
                interactive: false,
                title: '<img src="styles/legend/road_PX_2.png" /> road_PX'
            });
var format_FREOvillages_boundary_3 = new ol.format.GeoJSON();
var features_FREOvillages_boundary_3 = format_FREOvillages_boundary_3.readFeatures(json_FREOvillages_boundary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FREOvillages_boundary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FREOvillages_boundary_3.addFeatures(features_FREOvillages_boundary_3);
var lyr_FREOvillages_boundary_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FREOvillages_boundary_3, 
                style: style_FREOvillages_boundary_3,
                popuplayertitle: 'FREOvillages_boundary',
                interactive: false,
                title: '<img src="styles/legend/FREOvillages_boundary_3.png" /> FREOvillages_boundary'
            });
var format_FREOVillages_4 = new ol.format.GeoJSON();
var features_FREOVillages_4 = format_FREOVillages_4.readFeatures(json_FREOVillages_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FREOVillages_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FREOVillages_4.addFeatures(features_FREOVillages_4);
var lyr_FREOVillages_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FREOVillages_4, 
                style: style_FREOVillages_4,
                popuplayertitle: 'FREOVillages',
                interactive: true,
                title: '<img src="styles/legend/FREOVillages_4.png" /> FREOVillages'
            });

lyr_OSMStandard_0.setVisible(true);lyr_PX_distbound_1.setVisible(true);lyr_road_PX_2.setVisible(true);lyr_FREOvillages_boundary_3.setVisible(true);lyr_FREOVillages_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_PX_distbound_1,lyr_road_PX_2,lyr_FREOvillages_boundary_3,lyr_FREOVillages_4];
lyr_PX_distbound_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_LO': 'ADM2_LO', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'ADM2ALT1LO': 'ADM2ALT1LO', 'ADM2ALT2LO': 'ADM2ALT2LO', 'ADM1_EN': 'ADM1_EN', 'ADM1_LO': 'ADM1_LO', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_LO': 'ADM0_LO', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_road_PX_2.set('fieldAliases', {'name': 'name', 'name_en': 'name_en', 'highway': 'highway', 'surface': 'surface', 'smoothness': 'smoothness', 'width': 'width', 'lanes': 'lanes', 'oneway': 'oneway', 'bridge': 'bridge', 'layer': 'layer', 'source': 'source', 'name_lo': 'name_lo', 'osm_id': 'osm_id', 'osm_type': 'osm_type', });
lyr_FREOvillages_boundary_3.set('fieldAliases', {'uuid': 'uuid', 'usid': 'usid', 'urid': 'urid', 'urcne': 'urcne', 'uscne': 'uscne', 'uucne': 'uucne', 'urcnl': 'urcnl', 'uscnl': 'uscnl', 'urppoac26': 'urppoac26', });
lyr_FREOVillages_4.set('fieldAliases', {'Name': 'Name', 'ethnic': 'ethnic', 'pop': 'pop', });
lyr_PX_distbound_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_LO': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1EN': 'TextEdit', 'ADM2ALT2EN': 'TextEdit', 'ADM2ALT1LO': 'TextEdit', 'ADM2ALT2LO': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_LO': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_LO': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_road_PX_2.set('fieldImages', {'name': 'TextEdit', 'name_en': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'smoothness': 'TextEdit', 'width': 'TextEdit', 'lanes': 'TextEdit', 'oneway': 'TextEdit', 'bridge': 'TextEdit', 'layer': 'TextEdit', 'source': 'TextEdit', 'name_lo': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', });
lyr_FREOvillages_boundary_3.set('fieldImages', {'uuid': 'TextEdit', 'usid': 'TextEdit', 'urid': 'TextEdit', 'urcne': 'TextEdit', 'uscne': 'TextEdit', 'uucne': 'TextEdit', 'urcnl': 'TextEdit', 'uscnl': 'TextEdit', 'urppoac26': 'TextEdit', });
lyr_FREOVillages_4.set('fieldImages', {'Name': 'TextEdit', 'ethnic': '', 'pop': '', });
lyr_PX_distbound_1.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM2_EN': 'no label', 'ADM2_LO': 'no label', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1EN': 'no label', 'ADM2ALT2EN': 'no label', 'ADM2ALT1LO': 'no label', 'ADM2ALT2LO': 'no label', 'ADM1_EN': 'no label', 'ADM1_LO': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_LO': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_road_PX_2.set('fieldLabels', {'name': 'no label', 'name_en': 'no label', 'highway': 'no label', 'surface': 'no label', 'smoothness': 'no label', 'width': 'no label', 'lanes': 'no label', 'oneway': 'no label', 'bridge': 'no label', 'layer': 'no label', 'source': 'no label', 'name_lo': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', });
lyr_FREOvillages_boundary_3.set('fieldLabels', {'uuid': 'no label', 'usid': 'no label', 'urid': 'no label', 'urcne': 'no label', 'uscne': 'no label', 'uucne': 'no label', 'urcnl': 'no label', 'uscnl': 'no label', 'urppoac26': 'no label', });
lyr_FREOVillages_4.set('fieldLabels', {'Name': 'inline label - always visible', 'ethnic': 'inline label - always visible', 'pop': 'inline label - always visible', });
lyr_FREOVillages_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});