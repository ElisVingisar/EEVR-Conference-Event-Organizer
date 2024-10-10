// @ts-nocheck

'use client'

import * as THREE from 'three'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Plane, useAspect, useTexture } from '@react-three/drei'
import { EffectComposer, DepthOfField, Vignette, TiltShift2 } from '@react-three/postprocessing'
// import { MaskFunction, NormalPass } from 'postprocessing'
import bgUrl from '../resources/BG.png'
import starsUrl from '../resources/stars.png'
import groundUrl from '../resources/Wave.png'
import bearUrl from '../resources/Squirrel.png'
import leaves1Url from '../resources/leaves1.png'
import leaves2Url from '../resources/leaves2.png'

function Scene() {
  const scaleN = useAspect(1600, 1000, 1.15)
  const scaleW = useAspect(2200, 1000, 1.15)
  const textures = useTexture([
    bgUrl.src,
    starsUrl.src,
    groundUrl.src,
    bearUrl.src,
    leaves1Url.src,
    leaves2Url.src,
  ])
  const group = useRef()
  const layersRef = useRef([])
  const [movement] = useState(() => new THREE.Vector3())
  const [temp] = useState(() => new THREE.Vector3())
  const layers = [
    { texture: textures[0], z: 0, factor: 0.005, scale: scaleW },
    { texture: textures[1], z: 10, factor: 0.005, scale: scaleW },
    { texture: textures[2], z: 20, scaleFactor: 1, scale: scaleW },
    { texture: textures[3], z: 30, scaleFactor: 1, scale: scaleN },
    { texture: textures[4], factor: 0.03, scaleFactor: 1, z: 40, wiggle: 0.6, scale: scaleW },
    { texture: textures[5], factor: 0.04, scaleFactor: 1.3, z: 49, wiggle: 1, scale: scaleW },
  ]

  useFrame((state, delta) => {
    movement.lerp(temp.set(state.mouse.x, state.mouse.y * 0.2, 0), 0.2)
    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      state.mouse.x * 20,
      0.2,
    )
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      state.mouse.y / 10,
      0.2,
    )
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      -state.mouse.x / 2,
      0.2,
    )
    // layersRef.current[4].uniforms.time.value = layersRef.current[5].uniforms.time.value += delta
  }, 1)

  return (
    <group ref={group}>
      {/* <Fireflies count={20} radius={80} colors={['orange']} /> */}
      {layers.map(({ scale, texture, ref, factor = 0, scaleFactor = 1, wiggle = 0, z }, i) => (
        <Plane
          scale={[scale[0] * scaleFactor, scale[1] * scaleFactor, 1]}
          args={[1, 1, wiggle ? 10 : 1, wiggle ? 10 : 1]}
          position-z={z}
          key={i}
          ref={ref}
        >
          {/* inlude map transparency */}

          <meshStandardMaterial map={texture} transparent alphaTest={0.1} />
          {/* <layerMaterial
            ref={(ref) => (layersRef.current[i] = ref)}
            textr={texture}
            movement={movement}
            factor={factor}
            scale={scaleFactor}
            wiggle={wiggle}
          /> */}
        </Plane>
      ))}
      <Environment preset="sunset" />
    </group>
  )
}

function Effects() {
  const ref = useRef()
  /*useLayoutEffect(() => {
    const maskMaterial = ref.current.maskPass.getFullscreenMaterial()
    maskMaterial.maskFunction = MaskFunction.MULTIPLY_RGB_SET_ALPHA
  }, [])*/
  return (
    <EffectComposer enableNormalPass={false} multisampling={1}>
      {/* <DepthOfField ref={ref} target={[30, 0, 30]} bokehScale={8} focalLength={0.1} width={1024} /> */}
      {/* <TiltShift2 blur={0.25} samples={10} /> */}
    </EffectComposer>
  )
}

export function ZustandApp() {
  return (
    <Canvas orthographic camera={{ zoom: 5, position: [0, 0, 200], far: 300, near: 50 }}>
      <Scene />
      <Environment preset="sunset" />
      <color attach="background" args={['#000']} />
      <Effects />
    </Canvas>
  )
}
