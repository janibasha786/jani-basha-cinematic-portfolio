import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import portraitImage from '../assets/JaniWireframe.png'

function Background() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    )

    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 1.5)
    )

    renderer.setSize(
      window.innerWidth,
      window.innerHeight
    )

    renderer.setClearColor(0x000000, 0)

    mount.appendChild(renderer.domElement)

    renderer.domElement.className =
      'background-webgl'

    // =========================================================
    // RESPONSIVE HERO SETTINGS
    // =========================================================

    const getHeroSettings = () => {
      if (window.innerWidth <= 480) {
        return {
          x: 0,
          y: -1.45,
          z: -0.8,
          scale: 0.52,
        }
      }

      if (window.innerWidth <= 768) {
        return {
          x: 1.65,
          y: 0.05,
          z: -1.0,
          scale: 0.58,
        }
      }

      return {
        x: 2.65,
        y: -0.15,
        z: -1.05,
        scale: 1,
      }
    }

    const heroSettings = getHeroSettings()

    // =========================================================
    // MAIN GROUP
    // =========================================================

    const mainGroup = new THREE.Group()

    mainGroup.position.set(
      heroSettings.x,
      heroSettings.y,
      heroSettings.z
    )

    mainGroup.scale.set(
      heroSettings.scale,
      heroSettings.scale,
      heroSettings.scale
    )

    scene.add(mainGroup)

    // =========================================================
    // PORTRAIT TEXTURE
    // Vite-imported asset for production deployment
    // =========================================================

    const textureLoader =
      new THREE.TextureLoader()

    const portraitTexture =
      textureLoader.load(
        portraitImage
      )

    portraitTexture.colorSpace =
      THREE.SRGBColorSpace

    portraitTexture.minFilter =
      THREE.LinearFilter

    portraitTexture.magFilter =
      THREE.LinearFilter

    portraitTexture.wrapS =
      THREE.ClampToEdgeWrapping

    portraitTexture.wrapT =
      THREE.ClampToEdgeWrapping

    // =========================================================
    // PORTRAIT SHADER
    // =========================================================

    const portraitMaterial =
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        depthTest: false,
        side: THREE.DoubleSide,

        uniforms: {
          map: {
            value: portraitTexture,
          },

          uTime: {
            value: 0,
          },

          uMouse: {
            value: new THREE.Vector2(0, 0),
          },
        },

        vertexShader: `
          uniform float uTime;
          uniform vec2 uMouse;

          varying vec2 vUv;

          void main() {

            vUv = uv;

            vec3 pos = position;

            float center =
              1.0 -
              abs(uv.x - 0.5) * 2.0;

            pos.z += center * 0.08;

            pos.z +=
              sin(
                uv.y * 4.0 +
                uTime * 0.55
              ) * 0.008;

            pos.z +=
              uMouse.x *
              center *
              0.025;

            gl_Position =
              projectionMatrix *
              modelViewMatrix *
              vec4(pos, 1.0);
          }
        `,

        fragmentShader: `
          uniform sampler2D map;

          varying vec2 vUv;

          void main() {

            vec4 tex =
              texture2D(
                map,
                vUv
              );

            float brightness =
              dot(
                tex.rgb,
                vec3(
                  0.299,
                  0.587,
                  0.114
                )
              );

            float primary =
              smoothstep(
                0.010,
                0.070,
                brightness
              );

            float facialDetail =
              smoothstep(
                0.025,
                0.115,
                brightness
              );

            float secondary =
              smoothstep(
                0.008,
                0.045,
                brightness
              );

            float lineStrength =
              primary * 0.82 +
              facialDetail * 0.24 +
              secondary * 0.10;

            lineStrength =
              clamp(
                lineStrength,
                0.0,
                1.0
              );

            vec3 green =
              vec3(
                0.153,
                0.788,
                0.545
              );

            if (lineStrength < 0.008) {
              discard;
            }

            float intensity =
              pow(
                brightness,
                0.82
              );

            intensity =
              clamp(
                intensity * 1.18,
                0.0,
                1.0
              );

            gl_FragColor =
              vec4(
                green * intensity,
                lineStrength * 0.94
              );
          }
        `,
      })

    // =========================================================
    // PORTRAIT
    // =========================================================

    const portraitGeometry =
      new THREE.PlaneGeometry(
        2.85,
        3.95,
        48,
        48
      )

    const portrait =
      new THREE.Mesh(
        portraitGeometry,
        portraitMaterial
      )

    portrait.position.set(
      0.075,
      0,
      0
    )

    mainGroup.add(portrait)

    // =========================================================
    // SPHERE
    // =========================================================

    const sphereGeometry =
      new THREE.SphereGeometry(
        2.0,
        32,
        24
      )

    const sphereMaterial =
      new THREE.MeshBasicMaterial({
        color: 0x27c98b,
        wireframe: true,
        transparent: true,
        opacity: 0.13,
        depthWrite: false,
        depthTest: false,
      })

    const sphere =
      new THREE.Mesh(
        sphereGeometry,
        sphereMaterial
      )

    sphere.position.set(
      0,
      0,
      0.04
    )

    sphere.scale.set(
      0.82,
      0.82,
      0.82
    )

    mainGroup.add(sphere)

    // =========================================================
    // PARTICLES
    // =========================================================

    const particleCount = 100

    const particlePositions =
      new Float32Array(
        particleCount * 3
      )

    for (
      let i = 0;
      i < particleCount;
      i++
    ) {
      particlePositions[i * 3] =
        (Math.random() - 0.5) * 7

      particlePositions[i * 3 + 1] =
        (Math.random() - 0.5) * 5

      particlePositions[i * 3 + 2] =
        (Math.random() - 0.5) * 3
    }

    const particleGeometry =
      new THREE.BufferGeometry()

    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(
        particlePositions,
        3
      )
    )

    const particleMaterial =
      new THREE.PointsMaterial({
        color: 0x2acb91,
        size: 0.012,
        transparent: true,
        opacity: 0.11,
        depthWrite: false,
      })

    const particles =
      new THREE.Points(
        particleGeometry,
        particleMaterial
      )

    scene.add(particles)

    // =========================================================
    // GLOW
    // =========================================================

    const glowGeometry =
      new THREE.CircleGeometry(
        2.15,
        32
      )

    const glowMaterial =
      new THREE.MeshBasicMaterial({
        color: 0x18352c,
        transparent: true,
        opacity: 0.025,
        depthWrite: false,
        depthTest: false,
      })

    const glow =
      new THREE.Mesh(
        glowGeometry,
        glowMaterial
      )

    glow.position.set(
      heroSettings.x,
      heroSettings.y,
      -2
    )

    glow.scale.set(
      heroSettings.scale,
      heroSettings.scale,
      heroSettings.scale
    )

    scene.add(glow)

    // =========================================================
    // MOUSE
    // =========================================================

    const targetMouse =
      new THREE.Vector2(0, 0)

    const mouse =
      new THREE.Vector2(0, 0)

    const handleMouseMove = (event) => {
      targetMouse.x =
        (event.clientX /
          window.innerWidth -
          0.5) * 2

      targetMouse.y =
        (event.clientY /
          window.innerHeight -
          0.5) * -2
    }

    window.addEventListener(
      'mousemove',
      handleMouseMove
    )

    // =========================================================
    // SCROLL
    // =========================================================

    let scrollY = 0

    const handleScroll = () => {
      scrollY = window.scrollY
    }

    window.addEventListener(
      'scroll',
      handleScroll,
      { passive: true }
    )

    // =========================================================
    // RESIZE
    // =========================================================

    const handleResize = () => {
      camera.aspect =
        window.innerWidth /
        window.innerHeight

      camera.updateProjectionMatrix()

      renderer.setSize(
        window.innerWidth,
        window.innerHeight
      )

      const settings =
        getHeroSettings()

      mainGroup.position.set(
        settings.x,
        settings.y,
        settings.z
      )

      mainGroup.scale.set(
        settings.scale,
        settings.scale,
        settings.scale
      )

      glow.position.set(
        settings.x,
        settings.y,
        -2
      )

      glow.scale.set(
        settings.scale,
        settings.scale,
        settings.scale
      )
    }

    window.addEventListener(
      'resize',
      handleResize
    )

    // =========================================================
    // ANIMATION
    // =========================================================

    let animationFrame

    const animate = () => {
      animationFrame =
        requestAnimationFrame(
          animate
        )

      const elapsed =
        performance.now() / 1000

      mouse.lerp(
        targetMouse,
        0.035
      )

      const settings =
        getHeroSettings()

      mainGroup.position.x =
        settings.x +
        mouse.x * 0.04

      mainGroup.position.y =
        settings.y -
        mouse.y * 0.025

      mainGroup.position.z =
        settings.z +
        mouse.x * 0.02

      mainGroup.rotation.x =
        mouse.y * 0.025

      mainGroup.rotation.y =
        mouse.x * 0.035

      sphere.rotation.x =
        elapsed * 0.045 +
        scrollY * 0.000035

      sphere.rotation.y =
        elapsed * 0.065 +
        scrollY * 0.00005

      portrait.rotation.z =
        Math.sin(
          elapsed * 0.4
        ) * 0.003

      portrait.position.z =
        Math.sin(
          elapsed * 0.45
        ) * 0.012

      portraitMaterial.uniforms.uTime.value =
        elapsed

      portraitMaterial.uniforms.uMouse.value.set(
        mouse.x,
        mouse.y
      )

      particles.rotation.y =
        elapsed * 0.01

      particles.rotation.x =
        elapsed * 0.004

      glow.position.x =
        settings.x +
        mouse.x * 0.35

      glow.position.y =
        settings.y -
        mouse.y * 0.2

      renderer.render(
        scene,
        camera
      )
    }

    animate()

    // =========================================================
    // CLEANUP
    // =========================================================

    return () => {
      cancelAnimationFrame(
        animationFrame
      )

      window.removeEventListener(
        'mousemove',
        handleMouseMove
      )

      window.removeEventListener(
        'scroll',
        handleScroll
      )

      window.removeEventListener(
        'resize',
        handleResize
      )

      portraitGeometry.dispose()
      portraitMaterial.dispose()
      portraitTexture.dispose()

      sphereGeometry.dispose()
      sphereMaterial.dispose()

      particleGeometry.dispose()
      particleMaterial.dispose()

      glowGeometry.dispose()
      glowMaterial.dispose()

      renderer.dispose()

      if (
        renderer.domElement.parentNode ===
        mount
      ) {
        mount.removeChild(
          renderer.domElement
        )
      }
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="background-webgl"
    />
  )
}

export default Background