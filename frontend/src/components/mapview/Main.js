import { createRef, useEffect, useState } from "react";
import styles from "./Mapview.module.css";
import SidePanel from "./SidePanel";
import Map from "ol/Map";
import View from "ol/View";
import ImageLayer from "ol/layer/Image";
import ImageWMS from "ol/source/ImageWMS";
import WMTS from "ol/source/WMTS";
import WMSTileGrid from "ol/tilegrid/WMTS";
import VectorSource from "ol/source/Vector";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import Feature from "ol/Feature";
import Overlay from "ol/Overlay";
import LineString from "ol/geom/LineString";
import Polygon from "ol/geom/Polygon";
import { Fill, Stroke, Style } from "ol/style";
import "./Map.css";

// let map = new Map({
//     target: document.getElementById("mapContainer"),
//     layers: [
//         new TileLayer({
//             source: new OSM()
//         })
//     ],
//     view: new View({
//         center: [731226.83,5869110.01],
//         zoom: 7
//     })
// })
const Main = () => {
  const [sidepanel, setSidePanel] = useState(true);

  let myRef = createRef();

  useEffect(() => {
    let map = new Map({
      target: document.getElementById("mapContainer"),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [731728.94, 5869158.16],
        zoom: 18,
      }),
    });
  }, []);

  return (
    <div className="maindiv">
      {sidepanel && <SidePanel />}

      <div id="mapContainer"></div>
    </div>
  );
};

export default Main;
