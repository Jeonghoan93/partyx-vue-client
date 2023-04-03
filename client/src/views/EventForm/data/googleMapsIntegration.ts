import { loadGoogleMaps, initAutocomplete } from "./googleMapsAutocomplete";

export async function setupGoogleMapsAutocomplete(
  addressInput: HTMLInputElement,
  onAddressChange: (address: google.maps.places.PlaceResult) => void,
  onError: () => void
) {
  try {
    await loadGoogleMaps();
    initAutocomplete(addressInput, onAddressChange, onError);
  } catch (error) {
    console.error("Error setting up Google Maps Autocomplete:", error);
    onError();
  }
}
