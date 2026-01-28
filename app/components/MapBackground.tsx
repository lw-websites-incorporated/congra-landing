"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = "pk.eyJ1IjoibHVrZXZiIiwiYSI6ImNta3ZvbmsyajA1YXIzZXF2aTluazEydHAifQ.h1grl3_dyWcLfPAU4jv4zQ";

// Sample venue locations around London
const VENUES = [
  { name: "The Ivy", lng: -0.1337, lat: 51.5117, type: "restaurant" },
  { name: "Fabric", lng: -0.1024, lat: 51.5201, type: "club" },
  { name: "The Shard", lng: -0.0865, lat: 51.5045, type: "bar" },
  { name: "Sky Garden", lng: -0.0838, lat: 51.5113, type: "bar" },
  { name: "Dishoom", lng: -0.1256, lat: 51.5147, type: "restaurant" },
  { name: "Soho House", lng: -0.1324, lat: 51.5138, type: "club" },
  { name: "Duck & Waffle", lng: -0.0823, lat: 51.5154, type: "restaurant" },
  { name: "Nightjar", lng: -0.0878, lat: 51.5265, type: "bar" },
  { name: "The Ned", lng: -0.0879, lat: 51.5133, type: "hotel" },
  { name: "Hawksmoor", lng: -0.0772, lat: 51.5194, type: "restaurant" },
  { name: "Chiltern Firehouse", lng: -0.1528, lat: 51.5186, type: "restaurant" },
  { name: "Sketch", lng: -0.1418, lat: 51.5126, type: "restaurant" },
  { name: "Ministry of Sound", lng: -0.1003, lat: 51.4947, type: "club" },
  { name: "XOYO", lng: -0.0823, lat: 51.5258, type: "club" },
  { name: "Cargo", lng: -0.0772, lat: 51.5273, type: "club" },
];

// Sample user names for check-ins
const USERS = [
  "Emma", "James", "Sophie", "Oliver", "Charlotte", "Harry", "Amelia", "Jack",
  "Isla", "George", "Mia", "Noah", "Ava", "Leo", "Grace", "Oscar", "Lily", "Charlie"
];

interface CheckIn {
  id: string;
  venue: typeof VENUES[0];
  user: string;
  marker?: mapboxgl.Marker;
}

export default function MapBackground() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [checkIns, setCheckIns] = useState<CheckIn[]>([]);
  const markersRef = useRef<Map<string, mapboxgl.Marker>>(new Map());

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [-0.1078, 51.5154], // London center
      zoom: 14,
      pitch: 60,
      bearing: -20,
      antialias: true,
      interactive: false, // Disable interaction for background effect
    });

    map.current.on("load", () => {
      // Add 3D buildings
      const layers = map.current!.getStyle().layers;
      const labelLayerId = layers?.find(
        (layer) => layer.type === "symbol" && layer.layout?.["text-field"]
      )?.id;

      map.current!.addLayer(
        {
          id: "3d-buildings",
          source: "composite",
          "source-layer": "building",
          filter: ["==", "extrude", "true"],
          type: "fill-extrusion",
          minzoom: 12,
          paint: {
            "fill-extrusion-color": "#1a1a2e",
            "fill-extrusion-height": ["get", "height"],
            "fill-extrusion-base": ["get", "min_height"],
            "fill-extrusion-opacity": 0.8,
          },
        },
        labelLayerId
      );

      // Start the slow rotation
      rotateCamera();

      // Start adding check-ins
      addRandomCheckIn();
    });

    const rotateCamera = () => {
      if (!map.current) return;
      map.current.easeTo({
        bearing: map.current.getBearing() - 0.1,
        duration: 100,
        easing: (t) => t,
      });
      requestAnimationFrame(rotateCamera);
    };

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, []);

  const addRandomCheckIn = () => {
    if (!map.current) {
      setTimeout(addRandomCheckIn, 2000);
      return;
    }

    const venue = VENUES[Math.floor(Math.random() * VENUES.length)];
    const user = USERS[Math.floor(Math.random() * USERS.length)];
    const id = `${Date.now()}-${Math.random()}`;

    // Create marker element
    const el = document.createElement("div");
    el.className = "checkin-marker";
    el.innerHTML = `
      <div class="checkin-popup">
        <div class="checkin-avatar">${user[0]}</div>
        <div class="checkin-info">
          <span class="checkin-user">${user}</span>
          <span class="checkin-venue">${venue.name}</span>
        </div>
      </div>
      <div class="checkin-pulse"></div>
    `;

    const marker = new mapboxgl.Marker({ element: el, anchor: "bottom" })
      .setLngLat([venue.lng, venue.lat])
      .addTo(map.current);

    markersRef.current.set(id, marker);

    // Remove marker after animation
    setTimeout(() => {
      marker.remove();
      markersRef.current.delete(id);
    }, 4000);

    // Schedule next check-in
    const delay = 1500 + Math.random() * 2000;
    setTimeout(addRandomCheckIn, delay);
  };

  return (
    <>
      <div ref={mapContainer} className="map-container" />
      <style jsx global>{`
        .map-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .checkin-marker {
          position: relative;
          animation: markerAppear 0.4s ease-out forwards;
        }

        @keyframes markerAppear {
          0% {
            opacity: 0;
            transform: scale(0) translateY(20px);
          }
          50% {
            transform: scale(1.1) translateY(-5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .checkin-popup {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 8px 12px;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          animation: popupFloat 4s ease-in-out forwards;
          white-space: nowrap;
        }

        @keyframes popupFloat {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          70% {
            opacity: 1;
            transform: translateY(-10px);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px);
          }
        }

        .checkin-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0D9488, #14b8a6);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 600;
        }

        .checkin-info {
          display: flex;
          flex-direction: column;
        }

        .checkin-user {
          font-size: 12px;
          font-weight: 600;
          color: #1a1a1a;
          line-height: 1.2;
        }

        .checkin-venue {
          font-size: 10px;
          color: #666;
          line-height: 1.2;
        }

        .checkin-pulse {
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          width: 12px;
          height: 12px;
          background: #0D9488;
          border-radius: 50%;
          animation: pulse 1.5s ease-out infinite;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(13, 148, 136, 0.6);
          }
          100% {
            box-shadow: 0 0 0 20px rgba(13, 148, 136, 0);
          }
        }

        .mapboxgl-ctrl-logo,
        .mapboxgl-ctrl-attrib {
          display: none !important;
        }
      `}</style>
    </>
  );
}
