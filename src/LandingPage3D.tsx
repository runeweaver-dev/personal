import React, {useEffect, useState} from 'react';
import * as THREE from 'three';
import { PerspectiveCamera } from 'three';

interface ThreeConfig {
    scene: THREE.Scene,
    camera: THREE.Camera,
    renderer: THREE.WebGLRenderer
}

interface Props {
    contents: ThreeConfig | null
}

function SceneContainer(props: Props){
    if(!props.contents) return (<>{"Loading..."}</>);

    const config = props.contents as ThreeConfig;

    return (<>{config.renderer.domElement}</>);
}

function LandingPage3D(){

    const [props, setProps] =
        useState<Props>({
            contents: null
        });

    (async() => {
        const myScene = new THREE.Scene();
        const myCamera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        const myRenderer = new THREE.WebGLRenderer();
        myRenderer.setSize(window.innerWidth, window.innerHeight);
        setProps(
            {
            contents: {
                scene : myScene,
                camera : myCamera,
                renderer : myRenderer
            }
        } as Props)
    })()

    return (
        <div className="LandingPage3D">
            <SceneContainer {...props} />
        </div>
    )
}

export default LandingPage3D