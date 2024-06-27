// lib/dataFetch.js

export async function fetchVehiclePaths() {
  const res = await fetch('https://api.example.com/vehicles');
  const vehicles = await res.json();

  const paths = vehicles.map((vehicle) => ({
    params: { id: vehicle.id.toString() },
  }));

  return paths;
}

export async function fetchVehicleProps(id) {
  const res = await fetch(`https://api.example.com/vehicles/${id}`);
  const vehicle = await res.json();

  return { vehicle };
}
