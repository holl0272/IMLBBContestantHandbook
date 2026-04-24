/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║  SECTION: VENUE & NEARBY SPOTS                           ║
 * ║  Owner:   IMLBB Operations / Venue team                   ║
 * ║  Update:  When the host hotel or city changes            ║
 * ╚══════════════════════════════════════════════════════════╝
 *
 *  Map coordinates:
 *    mapBbox   — OpenStreetMap bounding box [west,south,east,north]
 *    mapMarker — [lat,lon] for the red pin
 *
 *  To get coordinates for a new venue:
 *    1. Go to openstreetmap.org and find the hotel
 *    2. Right-click → "Show address" → note lat/lon
 *    3. Adjust mapBbox to frame the hotel
 */

const VENUE = {
  name:    'The Congress Plaza Hotel',
  address: '520 S Michigan Ave',
  city:    'Chicago',
  state:   'Illinois',
  zip:     '60605',
  country: 'United States',

  // OpenStreetMap embed: bbox [west, south, east, north] and marker [lat, lon]
  mapBbox:   '-87.6260,41.8700,-87.6215,41.8740',
  mapMarker: '41.8719,-87.6237',
  googleMapsUrl: 'https://maps.google.com/?q=Congress+Plaza+Hotel+520+S+Michigan+Ave+Chicago',

  // Short paragraphs shown in the venue section
  airportNote:    'You can travel via the subway Blue Line or via taxi. The subway route could take an hour and a taxi around 30 minutes.',
  amenitiesNote:  'The hotel has several amenities including a barbershop and restaurant. The hotel is situated next to several shops, cafes, restaurants and fast food outlets. There are several gyms nearby.',
  northTowerTip:  true,   // show "request North Tower room" tip?
};

// Nearby points of interest shown in the Nearby Spots section
// Update if the venue moves to a different neighbourhood
const NEARBY_SPOTS = [
  { type: 'Museum',     name: 'Leather Archives & Museum' },
  { type: 'Bar',        name: 'Touché' },
  { type: 'Bar',        name: 'Jackhammer' },
  { type: 'Park',       name: 'Millennium Park' },
  { type: 'Museum',     name: 'Art Institute of Chicago' },
  { type: 'Aquarium',   name: 'Shedd Aquarium' },
  { type: 'Pier',       name: 'Navy Pier' },
  { type: 'Coffee',     name: 'Intelligentsia Coffee' },
];

if (typeof module !== 'undefined') module.exports = { VENUE, NEARBY_SPOTS };
