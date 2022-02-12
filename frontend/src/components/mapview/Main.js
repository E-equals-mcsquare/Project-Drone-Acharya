import { createRef, useEffect, useState } from "react";
import styles from "./Mapview.module.css";
import SidePanel from "./SidePanel";
import Map from "ol/Map";
import View from "ol/View";

import { OSM, Vector as VectorSource } from "ol/source";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";

import Feature from "ol/Feature";
import Overlay from "ol/Overlay";
import LineString from "ol/geom/LineString";
import Polygon from "ol/geom/Polygon";
import { Fill, Stroke, Style } from "ol/style";
import "./Map.css";
import ImageLayer from "ol/layer/Image";
import Static from "ol/source/ImageStatic";
import Projection from "ol/proj/Projection";

import sampleimages from '../../images/drone.png';
import Breadcrumb from "./Breadcrumb";

import { connect } from "react-redux"
import { withRouter } from "react-router"

const Main = (props) => {
  const [sidepanel, setSidePanel] = useState(true);
  const [olmap, setOlMap] = useState(new Map({
    target: document.getElementById("mapContainer"),
    view: new View({
      center: [731748.94, 5869050.16],
      zoom: 17,
    }),
  }))

  let myRef = createRef();

  useEffect(() => {
    renderStockyardBoundaries();
  }, []);

  const renderStockyardBoundaries = async () => {
    let map = new Map({
      target: document.getElementById("mapContainer"),
      view: new View({
        center: [731748.94, 5869050.16],
        zoom: 17,
      }),
    });

    let response = await fetch(process.env.REACT_APP_SERVER_URL + "/getStockyards");
    let json = await response.json();
    let stockyards = json.data;

    map.addLayer(
      new TileLayer({
        source: new OSM(),
      })
    );

    // map.addLayer(
    //   new ImageLayer({
    //     source: new Static({
    //       url: 'https://imgs.xkcd.com/comics/online_communities.png',
    //       imageExtent: [0,0,1024,968],
    //       projection: new Projection({
    //         code: 'xkcd-image',
    //         units: 'pixels',
    //         extent: [0,0,1024,968]
    //       })
    //     })
    //   })
    // )

    const sampleimage = new Overlay({
      position: [731748.94, 5869050.16],
      element: document.getElementById("sampleimage")
    })

    map.addOverlay(sampleimage)

    for (let i = 0; i < stockyards.length; i++) {
      let stockyardCoordinate = stockyards[i].stockyardcoord;
      stockyardCoordinate = JSON.parse(
        stockyardCoordinate.replaceAll("(", "[").replaceAll(")", "]")
      );

      let tooltipCoordinates =
        stockyardCoordinate[stockyardCoordinate.length - 1];
      let stockyardTooltipElement;
      let stockyardTooltip;

      stockyardTooltipElement = document.createElement("div");
      stockyardTooltipElement.className =
        "ol-tooltip ol-tooltip-measure stockyard-labels";
      stockyardTooltipElement.id = i;

      stockyardTooltip = new Overlay({
        element: stockyardTooltipElement,
        offset: [0, -15],
        positioning: "bottom-center",
      });

      map.addOverlay(stockyardTooltip);

      stockyardTooltipElement.innerHTML = stockyards[i].stockyardname;
      stockyardTooltip.setPosition(tooltipCoordinates);
      stockyardTooltipElement.className = "ol-tooltip ol-tooltip-static";
      stockyardTooltip.setOffset([0, -7]);

      let polygon = new Polygon([stockyardCoordinate]);

      let feature = new Feature({
        geometry: polygon,
      });

      let source = new VectorSource();
      source.addFeature(feature);

      let vector = new VectorLayer({
        source,
        style: new Style({
          stroke: new Stroke({
            color: "green",
            width: 4,
          }),
          fill: new Fill({
            color: "#2B364850",
          }),
        }),
      });
      map.addLayer(vector);
    }
    props.dispatch({
      type: 'olmap',
      olmap: map
    })
  };

  return (
    <div className="maindiv">
      {sidepanel && <SidePanel />}

      <div id="mapContainer"></div>

      {/* <img src={sampleimages} id="sampleimage"/> */}
      <Breadcrumb />

    </div>
  );
};

const mapStateToProps = (state) => {
  return { ...state.olmap }
}

export default withRouter(connect(mapStateToProps)(Main));
