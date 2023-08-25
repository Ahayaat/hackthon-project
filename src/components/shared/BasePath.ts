const BASE_PATH_FORAPI =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://hackathon-project-hn30eci13-ahayaat.vercel.app";

export default BASE_PATH_FORAPI;
