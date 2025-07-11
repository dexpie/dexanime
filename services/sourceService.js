import ky from "ky";

export const SOURCES = {
  OTAKUDESU: "otakudesu",
  SAMEHADAKU: "samehadaku",
};

export const DEFAULT_SOURCE = SOURCES.OTAKUDESU;

export const getCurrentSource = (req) =>
  (req.cookies && req.cookies.animeSource) || DEFAULT_SOURCE;

export const makeApiRequest = async (req, endpoint, params = {}) => {
  const source = getCurrentSource(req);
  const url = `${process.env.API_URL}/${source}${endpoint}`;

  try {
    return await ky.get(url, {
      searchParams: params,
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; DEXANIME/1.0; +https://dexanime.local)",
      },
    }).json();
  } catch (error) {
    // Log the specific endpoint and error
    console.error(`Error fetching from ${url}:`, error.message);
    // Return a consistent structure on error
    return { data: null, pagination: {} };
  }
};
