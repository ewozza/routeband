# Routeband

A small, dependency-free airport distance and JetCard leg-band calculator.

Enter two ICAO, IATA or local airport codes. The app shows rounded great-circle distance and a suggested Min / Max Leg NM band of distance minus / plus 1 NM. Ambiguous codes require choosing an airport.

## Use

Public site: https://ewozza.github.io/routeband/

No build, API key, account or backend is needed. Serve this folder with any static HTTP server. Modern browsers with DecompressionStream support are required. Airport lookup downloads only the compressed code-prefix files needed.

## Data and accuracy

86,387 airport records from the public-domain [OurAirports dataset](https://ourairports.com/data/), downloaded 23 November 2026, with a 2,000-airport JetCard v1.1.12 coordinate snapshot inspected 21 November 2026. Airports outside that snapshot are clearly marked as unconfirmed for JetCard. Closed and JetCard-disabled airports are labelled.

Distance uses the haversine formula with a 3440.065 NM Earth radius and rounds to a whole nautical mile, matching the inspected JetCard client. EGTK–OMDW returns 3012 NM, Min 3011 / Max 3013.

Bands narrow distance eligibility, but cannot guarantee a generated route: other airports can share a distance band and JetCard applies additional aircraft, airport and trip rules. This app does not modify accounts or call JetCard services. It is unofficial and not for navigation.

Each compressed airport tuple contains: identifier, name, country, latitude, longitude, aliases, JetCard status (0 unknown / 1 present / 2 disabled), closed flag. Data is split by the first character of every searchable alias; duplicate tuples across shards are intentional.

Thanks Codex <3
