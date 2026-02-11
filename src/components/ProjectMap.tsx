"use client";

import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface ProjectPin {
  name: string;
  year: string;
  lat: number;
  lng: number;
  current?: boolean;
}

const projectPins: ProjectPin[] = [
  { name: "Mesela", year: "2026", lat: -23.9018, lng: 29.7635, current: true },
  { name: "Matshela DayCare", year: "2024", lat: -23.89, lng: 29.75 },
  { name: "Monang", year: "2023", lat: -24.0348, lng: 29.8034 },
  { name: "Malahlela", year: "2022", lat: -23.8842, lng: 29.7194 },
  { name: "Rise", year: "2021", lat: 52.9524, lng: -1.248 },
  { name: "Malahlela", year: "2020", lat: -23.8842, lng: 29.7194 },
  { name: "Lesedi", year: "2019", lat: -23.9433, lng: 29.9393 },
  { name: "Mothopong", year: "2018", lat: -24.0098, lng: 30.2195 },
  { name: "Rethuseng", year: "2017", lat: -23.885, lng: 29.775 },
  { name: "Rethusegile", year: "2016", lat: -23.915, lng: 29.745 },
  { name: "Robamano", year: "2015", lat: -23.92, lng: 29.785 },
  { name: "Kohmotso", year: "2012–2014", lat: -24.1314, lng: 30.3325 },
  { name: "Jouberton", year: "2009–2010", lat: -26.893, lng: 26.584 },
];

// Only South Africa pins for default view
const saPins = projectPins.filter((p) => p.name !== "Rise");

function createMarkerIcon(current?: boolean) {
  return L.divIcon({
    className: "",
    html: `<div style="
      width: ${current ? "18px" : "14px"};
      height: ${current ? "18px" : "14px"};
      background: ${current ? "#2A9D8F" : "#D4A373"};
      border: 3px solid white;
      border-radius: 50%;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    "></div>`,
    iconSize: [current ? 18 : 14, current ? 18 : 14],
    iconAnchor: [current ? 9 : 7, current ? 9 : 7],
  });
}

export default function ProjectMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const [showUK, setShowUK] = useState(false);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    // Calculate bounds for SA pins
    const bounds = L.latLngBounds(saPins.map((p) => [p.lat, p.lng]));

    const map = L.map(mapRef.current, {
      scrollWheelZoom: false,
      zoomControl: true,
    }).fitBounds(bounds, { padding: [30, 30] });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
      maxZoom: 18,
    }).addTo(map);

    // Add markers
    projectPins.forEach((pin) => {
      // Skip Rise (UK) from default view — shown separately
      if (pin.name === "Rise") return;

      const marker = L.marker([pin.lat, pin.lng], {
        icon: createMarkerIcon(pin.current),
      }).addTo(map);

      marker.bindPopup(
        `<div style="font-family: sans-serif; text-align: center; padding: 2px 0;">
          <div style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 0.5px;">${pin.year}</div>
          <div style="font-size: 14px; font-weight: 600; color: #333;">${pin.name}</div>
          ${pin.current ? '<div style="font-size: 10px; color: #2A9D8F; margin-top: 2px;">Current Project</div>' : ""}
        </div>`,
        { closeButton: false, className: "project-popup" }
      );
    });

    mapInstance.current = map;

    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, []);

  // Handle UK toggle
  useEffect(() => {
    if (!mapInstance.current) return;

    if (showUK) {
      // Show all pins including Rise
      const allBounds = L.latLngBounds(projectPins.map((p) => [p.lat, p.lng]));
      const risePin = projectPins.find((p) => p.name === "Rise")!;

      const marker = L.marker([risePin.lat, risePin.lng], {
        icon: createMarkerIcon(false),
      }).addTo(mapInstance.current);

      marker.bindPopup(
        `<div style="font-family: sans-serif; text-align: center; padding: 2px 0;">
          <div style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 0.5px;">2021</div>
          <div style="font-size: 14px; font-weight: 600; color: #333;">Rise</div>
          <div style="font-size: 10px; color: #888;">Nottingham, UK</div>
        </div>`,
        { closeButton: false }
      );

      mapInstance.current.fitBounds(allBounds, { padding: [30, 30] });
    } else {
      const bounds = L.latLngBounds(saPins.map((p) => [p.lat, p.lng]));
      mapInstance.current.fitBounds(bounds, { padding: [30, 30] });
    }
  }, [showUK]);

  return (
    <div className="relative h-full w-full flex flex-col">
      <div ref={mapRef} className="flex-1 rounded-xl overflow-hidden z-0" />
      <button
        onClick={() => setShowUK(!showUK)}
        className="mt-3 text-xs text-warm-grey hover:text-teal transition-colors self-center"
      >
        {showUK ? "Show South Africa only" : "Show UK project (Rise 2021)"}
      </button>
    </div>
  );
}
