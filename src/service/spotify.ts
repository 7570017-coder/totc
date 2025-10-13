import axios from "axios";

const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

let accessToken: string | null = null;

async function getAccessToken() {
  if (accessToken) return accessToken;

  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    new URLSearchParams({ grant_type: "client_credentials" }),
    {
      headers: {
        Authorization: "Basic " + btoa(`${clientId}:${clientSecret}`),
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  accessToken = response.data.access_token;
  return accessToken;
}

export async function searchSpotify(query: string) {
  const token = await getAccessToken();
  const res = await axios.get("https://api.spotify.com/v1/search", {
    headers: { Authorization: `Bearer ${token}` },
    params: { q: query, type: "track", limit: 5 },
  });
  return res.data.tracks.items;
}
