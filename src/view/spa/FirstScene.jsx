import * as THREE from "three"
import { easing } from "maath"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Sky, Bvh } from "@react-three/drei"
import { EffectComposer, Selection, Outline, N8AO, TiltShift2, ToneMapping } from "@react-three/postprocessing"
import Piano from "../../models/Piano";
import { Cabine } from "../../models/Cabine"
import { CabineV1 } from "../../models/CabineV1"

const FirstScene = () => {

    return <div id="canvas">
        <Canvas onLoad={() => console.log('rer')} flat dpr={[1, 1.5]} gl={{ antialias: false }} camera={{ position: [0, 100, 100], fov: 100, near: 1, far: 30 }}>
            <ambientLight intensity={1.5 * Math.PI} />
            <Sky />
            <Bvh firstHitOnly>
                <Selection >
                    <Effects />
                    <CabineV1 rotation={[0, 4.7, 0]} position={[-1.1, -0.2, -0.4]} />
                </Selection>
            </Bvh>
        </Canvas>
    </div>
}

/*
<Piano rotation={[0, Math.PI / 2, 0]} position={[0, 0, 0]} />
<Cabine rotation={[0, 4.7, 0]} position={[-1.1, -0.2, -0.4]} />
<CabineV1 rotation={[0, 4.7, 0]} position={[-1.1, -0.2, -0.4]} />
*/

function Effects() {
    const { size } = useThree()
    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [state.pointer.x, 1 + state.pointer.y / 2, 8 + Math.atan(state.pointer.x * 2)], 0.3, delta)
        state.camera.lookAt(state.camera.position.x * 0.9, 0, -4)
    })
    return (
        <EffectComposer stencilBuffer disableNormalPass autoClear={false} multisampling={4}>
            <N8AO halfRes aoSamples={5} aoRadius={0.4} distanceFalloff={0.75} intensity={1} />
            <Outline visibleEdgeColor="white" hiddenEdgeColor="white" blur width={size.width * 1.25} edgeStrength={10} />
            <TiltShift2 samples={5} blur={0.1} />
            <ToneMapping />
        </EffectComposer>
    )
}


export default FirstScene;