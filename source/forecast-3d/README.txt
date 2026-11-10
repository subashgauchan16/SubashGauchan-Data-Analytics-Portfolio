assets/forecast-3d.js = three.js r162 + OrbitControls + GLTFLoader + entry.js, bundled.
Rebuild: npm i three@0.162.0 esbuild && npx esbuild entry.js --bundle --minify --format=iife --outfile=../../assets/forecast-3d.js
