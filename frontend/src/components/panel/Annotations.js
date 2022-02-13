import styles from "../mapview/Mapview.module.css";
import polygonicon from "../../images/polygon.png";
import lineicon from "../../images/linesegment.png";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import { Fill, Stroke, Style } from "ol/style";
import CircleStyle from "ol/style/Circle";
import MultiPoint from "ol/geom/MultiPoint";
import Draw from "ol/interaction/Draw";
import { getArea, getLength } from "ol/sphere";
import { unByKey } from "ol/Observable";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Overlay from "ol/Overlay";
import Polygon from "ol/geom/Polygon";
import LineString from "ol/geom/LineString";
import { useEffect, useState } from "react";
import deleteicon from "../../images/delete.png";
const Annotations = (props) => {
  const [drawingstate, setDrawingState] = useState(false);
  const [newannotation, setNewAnnotation] = useState(false);
  const [listannotations, setListAnnotations] = useState([{}]);

  let map = props.olmap;

  /**
   * Currently drawn feature.
   * @type {import("../src/ol/Feature.js").default}
   */
  let sketch;

  /**
   * The help tooltip element.
   * @type {HTMLElement}
   */
  let helpTooltipElement;

  /**
   * Overlay to show the help messages.
   * @type {Overlay}
   */
  let helpTooltip;

  /**
   * The measure tooltip element.
   * @type {HTMLElement}
   */
  let measureTooltipElement;

  /**
   * Overlay to show the measurement.
   * @type {Overlay}
   */
  let measureTooltip;

  const pointerMoveHandler = (evt) => {
    if (evt.dragging) {
      return;
    }

    let helpMsg;

    helpMsg = "Click to start drawing";

    if (sketch) {
      helpMsg = null;
    }

    helpTooltipElement.innerHTML = helpMsg;
    helpTooltip.setPosition(evt.coordinate);

    helpTooltipElement.classList.remove("hidden");
  };

  const formatLength = function (line) {
    const length = getLength(line);
    let output;
    if (length > 100) {
      output = Math.round((length / 1000) * 100) / 100 + " " + "km";
    } else {
      output = Math.round(length * 100) / 100 + " " + "m";
    }
    return output;
  };

  const formatArea = function (polygon) {
    const area = getArea(polygon);
    let output;
    if (area > 10000) {
      output =
        Math.round((area / 1000000) * 100) / 100 + " " + "km<sup>2</sup>";
    } else {
      output = Math.round(area * 100) / 100 + " " + "m<sup>2</sup>";
    }
    return output;
  };

  const onDrawLine = () => {};

  const onDrawPolygon = (evt) => {
    map.on("pointermove", pointerMoveHandler);
    setDrawingState(true);
    let source = new VectorSource({ wrapX: false });
    let vector = new VectorLayer({
      source: source,
      styles: [
        new Style({
          stroke: new Stroke({
            color: "#0434B1",
            width: 3,
          }),
          fill: new Fill({
            color: "#0434B130",
          }),
        }),
        new Style({
          image: new CircleStyle({
            radius: 5,
            fill: new Fill({
              color: "#FFFFFF",
            }),
          }),
          geometry: function (feature) {
            let coordinates = feature.getGeometry().getCoordinates()[0];
            return new MultiPoint(coordinates);
          },
        }),
      ],
    });

    map.addLayer(vector);

    let draw = new Draw({
      source: source,
      type: "Polygon",
    });

    map.addInteraction(draw);

    createMeasureTooltip();
    createHelpTooltip();

    document.addEventListener("keyup", function (event) {
      if (event.defaultPrevented) {
        return;
      }

      let key = event.key || event.keyCode;

      if (key === "Escape" || key === "Esc" || key === 27) {
        map.removeInteraction(draw);
      }
    });

    let listener;
    draw.on("drawstart", (evt) => {
      // set sketch
      sketch = evt.feature;

      /** @type {import("../src/ol/coordinate.js").Coordinate|undefined} */
      let tooltipCoord = evt.coordinate;

      listener = sketch.getGeometry().on("change", function (evt) {
        const geom = evt.target;
        let output;
        if (geom instanceof Polygon) {
          output = formatArea(geom);
          tooltipCoord = geom.getInteriorPoint().getCoordinates();
        } else if (geom instanceof LineString) {
          output = formatLength(geom);
          tooltipCoord = geom.getLastCoordinate();
        }
        measureTooltipElement.innerHTML = output;
        measureTooltip.setPosition(tooltipCoord);
      });
    });

    draw.on("drawend", async (evt) => {
      let drawnCoordinates = evt.feature.getGeometry().getCoordinates();
      measureTooltipElement.className = "ol-tooltip ol-tooltip-static";
      measureTooltip.setOffset([0, -7]);
      // unset sketch
      sketch = null;
      // unset tooltip so that a new one can be created
      measureTooltipElement = null;
      createMeasureTooltip();
      unByKey(listener);
      map.removeInteraction(draw);

      ////Appearing of annotation form
      setNewAnnotation(true);

      //   map.removeEventListener("pointermove", pointerMoveHandler)
      helpTooltipElement.parentNode.removeChild(helpTooltipElement);
    });
  };

  function createHelpTooltip() {
    if (helpTooltipElement) {
      helpTooltipElement.parentNode.removeChild(helpTooltipElement);
    }
    helpTooltipElement = document.createElement("div");
    helpTooltipElement.className = "ol-tooltip hidden";
    helpTooltip = new Overlay({
      element: helpTooltipElement,
      offset: [15, 0],
      positioning: "center-left",
    });
    map.addOverlay(helpTooltip);
  }

  function createMeasureTooltip() {
    if (measureTooltipElement) {
      measureTooltipElement.parentNode.removeChild(measureTooltipElement);
    }
    measureTooltipElement = document.createElement("div");
    measureTooltipElement.className = "ol-tooltip ol-tooltip-measure";
    measureTooltip = new Overlay({
      element: measureTooltipElement,
      offset: [0, -15],
      positioning: "bottom-center",
      stopEvent: false,
      insertFirst: false,
    });
    map.addOverlay(measureTooltip);
  }

  const onCreateAnnotation = () => {};

  const onCancelAnnotation = () => {
    setNewAnnotation(false);
  };

  useEffect(() => {
    /** Fetch Call */

    setListAnnotations([
      {
        annotationname: "Welding Point",
        annotationcomment: "Needs to be replaced",
        annotationdate: "21-02-2022",
      },
      {
        annotationname: "Welding Point",
        annotationcomment: "Needs to be replaced",
        annotationdate: "21-02-2022",
      },
      {
        annotationname: "Welding Point",
        annotationcomment: "Needs to be replaced",
        annotationdate: "21-02-2022",
      },
      {
        annotationname: "Welding Point",
        annotationcomment: "Needs to be replaced",
        annotationdate: "21-02-2022",
      },
      {
        annotationname: "Welding Point",
        annotationcomment: "Needs to be replaced",
        annotationdate: "21-02-2022",
      },
    ]);
  }, []);

  return (
    <>

      <div className={styles.sidepanelsubheader}>Create New</div>

      <div className={styles.annotationbuttonssection}>
        <div className={styles.shapetype} onClick={onDrawLine}>
          <img alt="Line" src={lineicon} className={styles.shapeicon} />
          Line
        </div>
        <div className={styles.shapetype} onClick={onDrawPolygon}>
          <img alt="Polygon" src={polygonicon} className={styles.shapeicon} />
          Polygon
        </div>
      </div>

      {newannotation && (
        <div className={styles.annotationform}>
          <input
            className={styles.annotationforminput}
            placeholder="Annotation name"
          />
          <textarea style={{ height: "4rem" }} placeholder="Comments..." />
          <div className={styles.formbuttonssection}>
            <div
              className={styles.formbuttongreen}
              onClick={onCreateAnnotation}
            >
              Create
            </div>
            <div
              className={styles.formbuttonwhite}
              onClick={onCancelAnnotation}
            >
              Cancel
            </div>
          </div>
        </div>
      )}

      <div className={styles.annotationslist}>
        {listannotations.map((obj, i) => {
          return (
            <div key={i}
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
              }}
            >
              <div className={styles.listitem}>
                <div className={styles.listitemtitle}>
                  {obj.annotationname}
                </div>
                <div className={styles.listitemcomment}>
                  {obj.annotationcomment}
                </div>
                <div className={styles.listitemdate}>
                  {obj.annotationdate}
                </div>
              </div>
              <img
                alt="Delete"
                src={deleteicon}
                className={styles.iconstyle}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { ...state.olmap, ...state.currentpanel };
};

export default withRouter(connect(mapStateToProps)(Annotations));
