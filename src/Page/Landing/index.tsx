import About from "../../Components/Pages/Landing/About";
import Features from "../../Components/Pages/Landing/Features";
import HeroSection from "../../Components/Pages/Landing/HeroSection";
import CloudSoftware from "../../Components/Pages/Landing/CloudSoftware";
import TOTC from "../../Components/Pages/Landing/TOTC";
import TOTC2 from "../../Components/Pages/Landing/TOTC2";
import Course from "../../Components/Pages/Landing/Course";
import Testimonial from "../../Components/Pages/Landing/Testimonial";
import News from "../../Components/Pages/Landing/News";
import React, { useEffect, useState } from "react";
import { instance } from "../../service";
import { searchSpotify } from "../../service/spotify";

const Landing: React.FC = () => {
  const [query, setQuery] = useState("");
  const [songs, setSongs] = useState<any[]>([]);

  const handleSearch = async () => {
    const results = await searchSpotify(query);
    setSongs(results);
  };

  return (
    <div>
      <HeroSection />
      <div
        style={{
          padding: "80px 140px",
          background: "#fff",
          fontFamily: "avenir next lt pro bold, sans-serif",
        }}
      >
        <h2>Spotify Song Search</h2>

        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Search for a song..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              padding: "10px",
              flex: 1,
              borderRadius: "6px",
              fontFamily: "avenir next lt pro bold, sans-serif",
            }}
          />
          <button
            onClick={handleSearch}
            style={{
              background: "#49bbbd",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              padding: "20px",
              cursor: "pointer",
              fontFamily: "avenir next lt pro bold, sans-serif",
            }}
          >
            Search
          </button>
        </div>

        {songs.map((track) => (
          <div
            key={track.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              marginBottom: "10px",
              background: "#fff",
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img
              src={track.album.images[0]?.url}
              alt={track.name}
              width="80"
              height="80"
              style={{ borderRadius: "10px" }}
            />
            <div style={{ flex: 1 }}>
              <h3
                style={{
                  margin: 0,
                  fontFamily: "avenir next lt pro bold, sans-serif",
                }}
              >
                {track.name}
              </h3>
              <p
                style={{
                  margin: "5px 0",
                  color: "#666",
                  fontFamily: "avenir next lt pro bold, sans-serif",
                }}
              >
                {track.artists.map((a: any) => a.name).join(", ")}
              </p>
            </div>
            <a
              href={track.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#49bbbd",
                fontWeight: "600",
                textDecoration: "none",
                fontFamily: "avenir next lt pro bold, sans-serif",
              }}
            >
              ▶ Open on Spotify
            </a>
          </div>
        ))}
      </div>
      <About />
      <CloudSoftware />
      <TOTC />
      <TOTC2 />
      <Features />
      <Course />
      <Testimonial />
      <News />
    </div>
  );
};

export default Landing;
