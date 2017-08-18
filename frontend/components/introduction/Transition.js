import React from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';

class Transition extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.changeCamPos(2);
        squiggle();
        setTimeout(()=> this.props.changeScreen(3), 5000);
    }
    componentWillUnmount() {
        window.cancelAnimationFrame(window.animID);
    }
    render() {
        return (
            <div id="center-container">
                <div id="center-div">
                    <canvas id="canvas2" />
                    <h1 className="animated fadeIn" style={{ fontSize: '1000%' }}>Imagine</h1>
                </div>
            </div>
        );
    }
}

function squiggle() {
    setTimeout(() => {
        let ww = window.innerWidth;
        let wh = window.innerHeight;

        const renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector("#canvas2"),
            antialias: true
        });
        renderer.setSize(ww, wh);
        renderer.setClearColor(0x000000);

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(45, ww / wh, 0.1, 2000);
        camera.position.z = 200;

        const container = new THREE.Object3D();
        scene.add(container);

        const objectLines = new THREE.Object3D();
        scene.add(objectLines);

        const loader = new THREE.TextureLoader();
        loader.crossOrigin = 'Anonymous';
        const mat = new THREE.PointsMaterial({
            color: 0xffffff,
            map: loader.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/dotTexture.png'),
            transparent: true,
            alphaTest: 0.5,
            sizeAttenuation: false
        });
        const lines = [];
        // const dotsPerLine = 250;
        const amountLines = 500;

        function Line() {
            this.geometry = new THREE.Geometry();
            this.mesh = new THREE.Points(this.geometry, mat);
            this.length = Math.floor(Math.random() * 100 + 250);
            this.speed = Math.random() * 400 + 200;
            for(var i = - ( this.length * 0.5 ); i < (this.length * 0.5); i++) {
                var vector = new THREE.Vector3(i * 0.4, 0, 0);
                this.geometry.vertices.push(vector);
            }
            this.mesh.rotation.x = Math.random() * Math.PI;
            this.mesh.rotation.y = Math.random() * Math.PI;
            this.mesh.rotation.z = Math.random() * Math.PI;
        }
        Line.prototype.update = function update(a) {
            for (var i = 0; i < this.geometry.vertices.length; i++) {
                var vector = this.geometry.vertices[i];
                vector.y = Math.sin(a / this.speed + i * 0.1) * 2.2;
            }
            this.geometry.verticesNeedUpdate = true;
        };
        function init() {
            for (var i = 0; i < amountLines; i++) {
                lines.push(new Line());
                objectLines.add(lines[i].mesh);
            }
            requestAnimationFrame(render);
            window.addEventListener("resize", onResize);
        }
        function render(a) {
            window.animID = requestAnimationFrame(render);
            objectLines.rotation.y = (a * 0.0001);
            objectLines.rotation.x = (-a * 0.0001);
            for(var i = 0; i < amountLines; i++) {
                lines[i].update(a);
            }
            renderer.render(scene, camera);
        }
        function onResize() {
            ww = window.innerWidth;
            wh = window.innerHeight;
            camera.aspect = ww / wh;
            camera.updateProjectionMatrix();
            renderer.setSize(ww, wh);
        }
        init();
    }, 1500);
}

Transition.propTypes = {
    changeScreen: PropTypes.func,
    changeCamPos: PropTypes.func
};

export default Transition;
