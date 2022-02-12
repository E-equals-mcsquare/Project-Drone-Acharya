import styles from "./Homepage.module.css";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import dronelogo from "../../images/dronepointer.svg";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
  { markerOffset: 15, name: "Switzerland", coordinates: [7.4474, 46.948] },
  //   { markerOffset: 15, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
  //   { markerOffset: 15, name: "Santiago", coordinates: [-70.6693, -33.4489] },
  //   { markerOffset: 15, name: "Bogota", coordinates: [-74.0721, 4.711] },
  //   { markerOffset: 15, name: "Quito", coordinates: [-78.4678, -0.1807] },
  //   { markerOffset: -30, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
  //   { markerOffset: -30, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
  //   { markerOffset: 15, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
  //   { markerOffset: 15, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
  //   { markerOffset: 15, name: "Caracas", coordinates: [-66.9036, 10.4806] },
  //   { markerOffset: 15, name: "Lima", coordinates: [-77.0428, -12.0464] },
];
const OverviewByLocation = () => {
  return (
    <div className={styles.tablecard}>
      <div className={styles.tabletitle}>
        <div className={styles.greenlinestarter}></div>
        Overview By Location
      </div>
      <ComposableMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [-8.0, -47.0, 0],
          scale: 700,
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies
              //   .filter((d) => d.properties.NAME === "Switzerland")
              .map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#4053fb70"
                  stroke="#D6D6DA"
                />
              ))
          }
        </Geographies>
        {markers.map(({ name, coordinates, markerOffset }) => (
          <Marker key={name} coordinates={coordinates}>
            <svg viewBox="0 0 800 400">
              <circle fill="#185613" stroke="none" cx="60" cy="60" r="16">
                <animate
                  attributeType="XML"
                  attributeName="fill"
                  values="#25f96c;#185613;#25f96c;#25f96c"
                  dur="0.8s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
            <text
              textAnchor="middle"
              y={markerOffset}
              style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default OverviewByLocation;
