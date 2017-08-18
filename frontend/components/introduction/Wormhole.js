import React from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import {TweenMax, Power0, Power1} from "gsap";

class Wormhole extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        WORM.wormhole( ()=> this.props.connectCamera(WORM.camera) );
    }
    componentWillUnmount() {
        console.log('ddfd');
        window.cancelAnimationFrame(window.animID);
    }
    render() {
        WORM.camPosition(this.props.wormholeCameraPosition);
        return (
            <canvas id="canvas1" />
        );
    }
}

Wormhole.propTypes = {
    connectCamera: PropTypes.func,
    wormholeCameraPosition: PropTypes.number
};

const WORM = {};

WORM.wormhole = (cb) => {
    setTimeout(() => {
        let ww = window.innerWidth;
        let wh = window.innerHeight;

        const canv = document.querySelector("#canvas1");
        // canv.className += 'animated fadeIn';
        const renderer = new THREE.WebGLRenderer({
            canvas: canv,
            antialias: true
        });
        renderer.setSize(ww, wh);
        renderer.setClearColor(0x000000);

        const scene = new THREE.Scene();
        scene.fog = new THREE.Fog(0x000000, 0, 100);

        WORM.camera = new THREE.PerspectiveCamera(45, ww / wh, 0.1, 1000);
        const camera = WORM.camera;
        camera.position.y = 40;
        camera.position.z = 100;

        const container = new THREE.Object3D();
        scene.add(container);

        TweenMax.to(container.rotation, 96, {
            y: Math.PI * 4,
            ease: Power0.easeInOut
        });

        const loader = new THREE.TextureLoader();
        loader.crossOrigin = 'Anonymous';
        /* Options */
        let dots;
        let plane;
        const width = 150;
        const height = 150;
        const center = new THREE.Vector3(0, 0, 0);
        const maxDistance = new THREE.Vector3(width * 0.5, height * 0.5).distanceTo(center);

        function createDots() {
            const geom = new THREE.Geometry();

            const planeGeom = new THREE.PlaneGeometry( width * 2, height * 2, width, height );
            const m = new THREE.Matrix4();
            m.makeRotationX(-Math.PI * 0.5);
            planeGeom.applyMatrix(m);
            for(let i = 0; i < planeGeom.vertices.length; i++) {
                const vector = planeGeom.vertices[i];
                vector.dist = vector.distanceTo(center);
                vector.ratio = (maxDistance - vector.dist) / (maxDistance * 0.9);
            }
            const planeMat = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
            plane = new THREE.Mesh( planeGeom, planeMat );
            container.add( plane );

            for(let x = (-width * 0.5); x < width * 0.5; x++) {
                for(let z = (-height * 0.5); z < height * 0.5; z++) {
                    const vector = new THREE.Vector3(x * 1.2, 0, z * 1.2);
                    vector.dist = vector.distanceTo(center);
                    vector.ratio = (maxDistance - vector.dist) / (maxDistance * 0.9);
                    geom.vertices.push(vector);
                }
            }
            const mat = new THREE.PointsMaterial({
                color: 0xffffff,
                map: loader.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/dotTexture.png'),
                transparent: true,
                alphaTest: 0.4
            });
            dots = new THREE.Points(geom, mat);
            container.add(dots);
        }

        const ease = {
            hole: 0,
            depth: 0
        };
        TweenMax.to(ease, 6, {
            hole: 2,
            depth: 1.5,
            yoyo: true,
            ease: Power1.easeInOut,
            repeatDelay: 0.5,
            repeat: -1
        });
        function render(a) {
            window.animID = requestAnimationFrame(render);

            for(let i = 0; i < dots.geometry.vertices.length; i++) {
                const vector = dots.geometry.vertices[i];
                let ratioA = (vector.ratio * ease.depth) + ease.hole;
                ratioA *= vector.ratio * vector.ratio * vector.ratio * vector.ratio;
                vector.y = ratioA * -150;
                vector.y = Math.max(vector.y, -100);
                vector.y += Math.sin(-(vector.dist * 0.4) + (a * 0.004));
            }
            for(let i = 0; i < plane.geometry.vertices.length; i++) {
                const vector = plane.geometry.vertices[i];
                let ratioA = (vector.ratio * ease.depth) + ease.hole;
                ratioA *= vector.ratio * vector.ratio * vector.ratio * vector.ratio;
                vector.y = ratioA * -150;
                vector.y = Math.max(vector.y, -100);
                vector.y += Math.sin(-(vector.dist * 0.4) + (a * 0.004));
            }

            dots.geometry.verticesNeedUpdate = true;
            plane.geometry.verticesNeedUpdate = true;

            camera.lookAt(new THREE.Vector3(0, -20, 0));

            renderer.render(scene, camera);
        }
        createDots();
        requestAnimationFrame(render);

        window.addEventListener("resize", onResize);

        function onResize() {
            ww = window.innerWidth;
            wh = window.innerHeight;
            camera.aspect = ww / wh;
            camera.updateProjectionMatrix();
            renderer.setSize(ww, wh);
        }
        cb();
    }, 1000);
};

WORM.camPosition = (wormholeCameraPosition) => {
    switch (wormholeCameraPosition) {
        case 2:
            WORM.goOut();
            return;
        case 1:
            WORM.goIn();
            return;
        default:
            return;
    }
};

WORM.goIn = () => {
    TweenMax.to(WORM.camera.position, 1, {
        z: 1,
        // y: 100,
        yoyo: true,
        ease: Power1.easeInOut,
        repeatDelay: 0.5,
        repeat: 0
    });
};

WORM.goOut = () => {
    TweenMax.to(WORM.camera.position, 1, {
        z: 500,
        // y: 100,
        yoyo: true,
        ease: Power1.easeInOut,
        repeatDelay: 0.5,
        repeat: 0
    });
};

export default Wormhole;
