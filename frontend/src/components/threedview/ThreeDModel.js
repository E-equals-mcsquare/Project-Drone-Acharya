import planar from '../../images/planar.png'
import orbital from '../../images/orbital.png'
import { useEffect } from 'react'
import './ThreeDView.css'

const Potree = window.Potree
let viewer
const ThreeDModel = () => {

    useEffect(()=>{
        viewer = new Potree.Viewer(document.getElementById("threed_render_area"))

        viewer.setEDLEnabled(true)
        viewer.setFOV(60)
        viewer.setPointBudget(10_000_000)
        viewer.setMinNodeSize(50)
        viewer.loadSettingsFromURL()
        viewer.setBackground(null)
        viewer.useHQ = true

        Potree.loadPointCloud("https://threejspotree.s3.ap-south-1.amazonaws.com/potree/pointclouds/lion_takanawa_las/cloud.js", "lion", e => {
            viewer.scene.addPointCloud(e.pointcloud);
            let material = e.pointcloud.material;
            
            material.size = 1;
            material.pointSizeType = Potree.PointSizeType.ADAPTIVE;

            e.pointcloud.position.x += 3
            e.pointcloud.position.y -= 3
            e.pointcloud.position.z += 4

            viewer.fitToScreen()
        })

    }, [])

    const onOrbitControls = () => {
        viewer.setControls(viewer.orbitControls)
    }

    const onPanControls = () => {
        viewer.setControls(viewer.earthControls)
    }

    return (
        <>
            <div id="threed_render_area"></div>
            <div id="cesiumContainer" className="cesiumcontainer"></div>
            <div className="controls">
                <div className="controlButtons" onClick={onOrbitControls} tabIndex="1">
                    <img src={orbital} alt="Orbit Control" className='iconstyle' />
                    Orbit
                </div>
                <div className="controlButtons" onClick={onPanControls} tabIndex="2">
                <img src={planar} alt="Pan Control" className='iconstyle'/>
                    Pan
                </div>
            </div>
        </>
    )
}

export default ThreeDModel