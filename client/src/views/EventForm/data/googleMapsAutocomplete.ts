import { Loader } from "@googlemaps/js-api-loader";

export async function loadGoogleMaps() {
  const loader = new Loader({
    apiKey: "process.env.GOOGLE_MAPS_API_KEY",
    version: "weekly",
    libraries: ["places"],
  });

  try {
    await loader.load();
  } catch (err) {
    console.error("Error loading Google Maps API:", err);
  }
}

export function initAutocomplete(
  input: HTMLInputElement,
  callback: (place: google.maps.places.PlaceResult) => void,
  onError: () => void
) {
  try {
    const autocomplete = new google.maps.places.Autocomplete(input, {
      fields: ["address_components", "geometry"],
    });

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      callback(place);
    });
  } catch (err) {
    console.error("Error initializing Google Maps Autocomplete:", err);
    onError();
  }
}
