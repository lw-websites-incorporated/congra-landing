"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = "pk.eyJ1IjoibHVrZXZiIiwiYSI6ImNta3ZvbmsyajA1YXIzZXF2aTluazEydHAifQ.h1grl3_dyWcLfPAU4jv4zQ";

const USERS = [
  "Emma", "James", "Sophie", "Oliver", "Charlotte", "Harry", "Amelia", "Jack",
  "Isla", "George", "Mia", "Noah", "Ava", "Leo", "Grace", "Oscar", "Lily", "Charlie",
  "Freya", "Archie", "Emily", "Alfie", "Poppy", "Henry", "Jessica", "Thomas"
];

const VENUE_NAMES = [
  "Dishoom", "The Breakfast Club", "Boxpark", "Queen of Hoxton", "Cargo",
  "XOYO", "Nightjar", "The Book Club", "Strongroom Bar", "Old Street Records",
  "The Hoxton", "Barrio East", "Brick Lane Beigel", "93 Feet East",
  "The Old Blue Last", "Happiness Forgets", "Callooh Callay", "Troy Bar",
  "The Pride of Spitalfields", "Tramshed", "The Owl & Pussycat", "Ridley Road Market",
  "Birthdays", "The Ace Hotel", "Paper Dress Vintage"
];

const NEON = [
  { bg: "#ff2d95", glow: "255, 45, 149" },
  { bg: "#00f0ff", glow: "0, 240, 255" },
  { bg: "#b84dff", glow: "184, 77, 255" },
  { bg: "#ff6b2d", glow: "255, 107, 45" },
  { bg: "#00ff94", glow: "0, 255, 148" },
];

export default function MapBackground() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    const centerLng = -0.0780;
    const centerLat = 51.5255;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [centerLng, centerLat],
      zoom: 15.5,
      pitch: 60,
      bearing: 20,
      antialias: true,
      interactive: false,
    });

    map.current.on("load", () => {
      const m = map.current!;
      const layers = m.getStyle().layers;

      // Kill all labels
      layers?.forEach((layer) => {
        if (layer.type === "symbol" && layer.layout?.["text-field"]) {
          m.setLayoutProperty(layer.id, "visibility", "none");
        }
      });

      // Deep void fog
      m.setFog({
        color: "rgb(8, 4, 18)",
        "high-color": "rgb(20, 8, 40)",
        "horizon-blend": 0.2,
        "space-color": "rgb(5, 2, 12)",
        "star-intensity": 0.4
      });

      // Dark cyberpunk buildings
      m.addLayer({
        id: "3d-buildings",
        source: "composite",
        "source-layer": "building",
        filter: ["==", "extrude", "true"],
        type: "fill-extrusion",
        minzoom: 12,
        paint: {
          "fill-extrusion-color": [
            "interpolate",
            ["linear"],
            ["get", "height"],
            0, "#0c0818",
            10, "#110b22",
            25, "#16102c",
            40, "#1c1436",
            60, "#221840",
            100, "#2a1e4d"
          ],
          "fill-extrusion-height": ["get", "height"],
          "fill-extrusion-base": ["get", "min_height"],
          "fill-extrusion-opacity": 0.95,
          "fill-extrusion-vertical-gradient": true,
        },
      });

      // Inky dark water
      if (m.getLayer("water")) {
        m.setPaintProperty("water", "fill-color", "#060312");
      }

      layers?.forEach((layer) => {
        if (layer.id.includes("park") || layer.id.includes("landuse") || layer.id.includes("grass")) {
          if (layer.type === "fill") {
            m.setPaintProperty(layer.id, "fill-color", "#08100a");
          }
        }
        // Faint cyan-purple roads
        if (layer.id.includes("road") && layer.type === "line") {
          m.setPaintProperty(layer.id, "line-color", "#1a1230");
          m.setPaintProperty(layer.id, "line-opacity", 0.7);
        }
        if (layer.id.includes("background") && layer.type === "background") {
          m.setPaintProperty(layer.id, "background-color", "#050210");
        }
      });

      rotateCamera();
      setTimeout(() => spawnCheckIn(), 600);
    });

    let bearing = 20;
    const rotateCamera = () => {
      if (!map.current) return;
      bearing -= 10;
      map.current.easeTo({
        bearing,
        duration: 12000,
        easing: (t) => t,
      });
      setTimeout(rotateCamera, 12000);
    };

    const spawnCheckIn = () => {
      if (!map.current) {
        setTimeout(spawnCheckIn, 1500);
        return;
      }

      const bounds = map.current.getBounds();
      if (!bounds) return;
      const sw = bounds.getSouthWest();
      const ne = bounds.getNorthEast();
      const pad = 0.1;
      const lngR = ne.lng - sw.lng;
      const latR = ne.lat - sw.lat;
      const lng = sw.lng + lngR * (pad + Math.random() * (1 - 2 * pad));
      const lat = sw.lat + latR * (pad + Math.random() * (1 - 2 * pad));

      const venue = VENUE_NAMES[Math.floor(Math.random() * VENUE_NAMES.length)];
      const user = USERS[Math.floor(Math.random() * USERS.length)];
      const c = NEON[Math.floor(Math.random() * NEON.length)];
      const isHot = Math.random() > 0.6;

      const el = document.createElement("div");
      el.className = "marker-container";

      if (isHot) {
        el.innerHTML = `
          <div class="cb-checkin" style="--c:${c.bg};--g:${c.glow}">
            <div class="cb-flame">
              <svg viewBox="0 0 24 24" fill="${c.bg}">
                <path d="M12 23c-4.97 0-9-2.69-9-6 0-4 5-11 9-14 4 3 9 10 9 14 0 3.31-4.03 6-9 6z"/>
              </svg>
              <div class="cb-ring"></div>
            </div>
            <div class="cb-tag">
              <span class="cb-name">${user}</span>
              <span class="cb-place">${venue}</span>
            </div>
          </div>
        `;
      } else {
        el.innerHTML = `
          <div class="cb-checkin" style="--c:${c.bg};--g:${c.glow}">
            <div class="cb-dot">
              <span>${user[0]}</span>
              <div class="cb-ring"></div>
            </div>
            <div class="cb-tag">
              <span class="cb-name">${user}</span>
              <span class="cb-place">${venue}</span>
            </div>
          </div>
        `;
      }

      const marker = new mapboxgl.Marker({ element: el, anchor: "bottom" })
        .setLngLat([lng, lat])
        .addTo(map.current);

      markersRef.current.push(marker);

      setTimeout(() => {
        el.querySelector(".cb-checkin")?.classList.add("out");
        setTimeout(() => {
          marker.remove();
          markersRef.current = markersRef.current.filter(m => m !== marker);
        }, 700);
      }, 4500);

      setTimeout(spawnCheckIn, 900 + Math.random() * 1400);
    };

    return () => {
      markersRef.current.forEach(m => m.remove());
      map.current?.remove();
      map.current = null;
    };
  }, []);

  return (
    <>
      <div ref={mapContainer} className="map-container" />
      <div className="cb-overlay" />
      <style jsx global>{`
        .map-container {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .cb-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(ellipse at 25% 25%, rgba(255, 45, 149, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 75% 75%, rgba(0, 240, 255, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(100, 30, 180, 0.08) 0%, transparent 60%);
          mix-blend-mode: screen;
        }

        .mapboxgl-ctrl-logo,
        .mapboxgl-ctrl-attrib {
          display: none !important;
        }

        .marker-container {
          pointer-events: none;
        }

        /* Check-in wrapper */
        .cb-checkin {
          display: flex;
          flex-direction: column;
          align-items: center;
          pointer-events: none;
          opacity: 0;
          animation: cbIn 0.6s ease-out forwards;
        }
        .cb-checkin.out {
          animation: cbOut 0.6s ease-in forwards !important;
        }
        @keyframes cbIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes cbOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }

        /* Flame icon */
        .cb-flame {
          position: relative;
          width: 34px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cb-flame svg {
          width: 34px;
          height: 42px;
          filter:
            drop-shadow(0 0 6px rgba(var(--g), 0.9))
            drop-shadow(0 0 18px rgba(var(--g), 0.5))
            drop-shadow(0 0 40px rgba(var(--g), 0.3));
          animation: flicker 2.5s ease-in-out infinite;
        }

        /* Pulsing ring beneath icon */
        .cb-ring {
          position: absolute;
          bottom: -4px;
          left: 50%;
          width: 50px;
          height: 50px;
          transform: translateX(-50%);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(var(--g), 0.35) 0%, transparent 65%);
          animation: ringPulse 2.5s ease-in-out infinite;
        }

        @keyframes flicker {
          0%, 100% {
            filter:
              drop-shadow(0 0 6px rgba(var(--g), 0.9))
              drop-shadow(0 0 18px rgba(var(--g), 0.5))
              drop-shadow(0 0 40px rgba(var(--g), 0.3));
          }
          50% {
            filter:
              drop-shadow(0 0 10px rgba(var(--g), 1))
              drop-shadow(0 0 28px rgba(var(--g), 0.7))
              drop-shadow(0 0 56px rgba(var(--g), 0.4));
          }
        }

        @keyframes ringPulse {
          0%, 100% { opacity: 0.5; transform: translateX(-50%) scale(0.9); }
          50% { opacity: 0.8; transform: translateX(-50%) scale(1.15); }
        }

        /* Avatar dot */
        .cb-dot {
          position: relative;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(8, 4, 18, 0.85);
          border: 2px solid var(--c);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            0 0 8px rgba(var(--g), 0.7),
            0 0 24px rgba(var(--g), 0.35),
            inset 0 0 12px rgba(var(--g), 0.15);
          animation: dotGlow 3s ease-in-out infinite;
        }
        .cb-dot .cb-ring {
          bottom: -8px;
          width: 46px;
          height: 46px;
        }

        @keyframes dotGlow {
          0%, 100% {
            box-shadow:
              0 0 8px rgba(var(--g), 0.7),
              0 0 24px rgba(var(--g), 0.35),
              inset 0 0 12px rgba(var(--g), 0.15);
          }
          50% {
            box-shadow:
              0 0 14px rgba(var(--g), 0.9),
              0 0 40px rgba(var(--g), 0.5),
              inset 0 0 18px rgba(var(--g), 0.25);
          }
        }

        .cb-dot span {
          color: var(--c);
          font-size: 13px;
          font-weight: 700;
          text-shadow: 0 0 8px rgba(var(--g), 0.8);
        }

        /* Label tag */
        .cb-tag {
          margin-top: 8px;
          background: rgba(8, 4, 18, 0.8);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 6px 12px;
          border-radius: 8px;
          border: 1px solid rgba(var(--g), 0.3);
          box-shadow:
            0 0 12px rgba(var(--g), 0.15),
            inset 0 0 8px rgba(var(--g), 0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1px;
        }

        .cb-name {
          font-size: 11px;
          font-weight: 600;
          color: var(--c);
          line-height: 1.4;
          letter-spacing: 0.03em;
          text-shadow: 0 0 8px rgba(var(--g), 0.6);
        }

        .cb-place {
          font-size: 9px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.3;
          letter-spacing: 0.02em;
        }
      `}</style>
    </>
  );
}
