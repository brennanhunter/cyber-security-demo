// shaders.js

export const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const fluidShader = `
  uniform float iTime;
  uniform vec2 iResolution;
  uniform vec4 iMouse;
  uniform int iFrame;
  uniform sampler2D iPreviousFrame;
  uniform float uBrushSize;
  uniform float uBrushStrength;
  uniform float uFluidDecay;
  uniform float uTrailLength;
  uniform float uStopDecay;
  varying vec2 vUv;

  void main() {
    vec2 U = vUv * iResolution;
    
    if (iFrame < 1) {
      // Initialize with original positions
      gl_FragColor = vec4(U, 0.0, 1.0);
    } else {
      // Sample previous frame to get current stretched positions
      vec4 prev = texture2D(iPreviousFrame, vUv);
      vec2 stretchedPos = prev.xy;
      
      // Apply viscous restoration toward original position
      vec2 restoreForce = (U - stretchedPos) * 0.015; // Slow restoration like thick slime
      stretchedPos += restoreForce;
      
      // Mouse interaction - create stretchy, viscous pulling
      if (iMouse.z > 0.0) {
        vec2 mousePos = iMouse.xy;
        vec2 mousePrev = iMouse.zw;
        vec2 mouseVel = mousePos - mousePrev;
        
        float distToMouse = distance(stretchedPos, mousePos);
        float brushRadius = uBrushSize;
        
        if (distToMouse < brushRadius) {
          float influence = 1.0 - (distToMouse / brushRadius);
          influence = smoothstep(0.0, 1.0, influence);
          
          // Strong direct pull toward mouse
          vec2 pullDirection = mousePos - stretchedPos;
          float pullStrength = influence * uBrushStrength * 0.08; // Much smaller pull
          stretchedPos += pullDirection * pullStrength;
          
          // Add velocity-based stretching for trailing effect
          float velMagnitude = length(mouseVel);
          if (velMagnitude > 1.0) {
            vec2 stretchDirection = normalize(mouseVel);
            float stretchAmount = influence * velMagnitude * 0.2; // Much smaller stretch
            stretchedPos += stretchDirection * stretchAmount;
          }
        }
        
        // Secondary influence zone for more trailing effect
        float secondaryRadius = brushRadius * 1.5; // Smaller secondary zone
        if (distToMouse < secondaryRadius && distToMouse > brushRadius) {
          float secondaryInfluence = 1.0 - ((distToMouse - brushRadius) / brushRadius);
          secondaryInfluence = smoothstep(0.0, 1.0, secondaryInfluence) * 0.15; // Weaker influence
          
          vec2 pullDirection = mousePos - stretchedPos;
          stretchedPos += pullDirection * secondaryInfluence * uBrushStrength * 0.05; // Much smaller pull
        }
      }
      
      gl_FragColor = vec4(stretchedPos, 0.0, 1.0);
    }
  }
`;

export const displayShader = `
  uniform float iTime;
  uniform vec2 iResolution;
  uniform sampler2D iFluid;
  uniform float uDistortionAmount;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;
  uniform vec3 uColor4;
  uniform float uColorIntensity;
  uniform float uSoftness;
  varying vec2 vUv;

  void main() {
    vec2 fragCoord = vUv * iResolution;
    vec4 fluid = texture2D(iFluid, vUv);
    vec2 draggedPos = fluid.xy;
    
    float mr = min(iResolution.x, iResolution.y);
    
    // Use the dragged position instead of the current position
    vec2 uv = (draggedPos * 2.0 - iResolution.xy) / mr;

    // Create the base animated pattern using the dragged coordinates
    float d = -iTime * 0.3;
    float a = 0.0;
    for (float i = 0.0; i < 8.0; ++i) {
      a += cos(i - d - a * uv.x);
      d += sin(uv.y * i + a);
    }
    d += iTime * 0.3;

    float mixer1 = cos(uv.x * d) * 0.5 + 0.5;
    float mixer2 = cos(uv.y * a) * 0.5 + 0.5;
    float mixer3 = sin(d + a) * 0.5 + 0.5;

    float smoothAmount = clamp(uSoftness * 0.1, 0.0, 0.9);
    mixer1 = mix(mixer1, 0.5, smoothAmount);
    mixer2 = mix(mixer2, 0.5, smoothAmount);
    mixer3 = mix(mixer3, 0.5, smoothAmount);

    vec3 col = mix(uColor1, uColor2, mixer1);
    col = mix(col, uColor3, mixer2);
    col = mix(col, uColor4, mixer3 * 0.4);

    // Add more visible highlight where dragging is happening
    vec2 originalPos = fragCoord;
    float dragDistance = length(draggedPos - originalPos);
    float highlight = exp(-dragDistance * 0.008) * 0.25; // More visible highlight
    col *= (1.0 + highlight);

    col *= uColorIntensity;
    gl_FragColor = vec4(col, 1.0);
  }
`;
