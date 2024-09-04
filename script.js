// Mock data for hospitals and doctors
const hospitals = [
    { name: "City Hospital", location: "New York", distance: "2 km" },
    { name: "Green Valley Clinic", location: "New York", distance: "5 km" }
];

const doctors = {
    general: [
        { name: "Dr. Smith", available: true },
        { name: "Dr. John", available: false }
    ],
    cardiologist: [
        { name: "Dr. Jane", available: true },
        { name: "Dr. Roberts", available: true }
    ],
    dentist: [
        { name: "Dr. Brown", available: true },
        { name: "Dr. Clark", available: false }
    ]
};

function findHospital() {
    const location = document.getElementById('location').value;
    const hospitalList = document.getElementById('hospital-list');
    hospitalList.innerHTML = '';

    if (location) {
        const nearbyHospitals = hospitals.filter(hospital => hospital.location.toLowerCase() === location.toLowerCase());
        if (nearbyHospitals.length > 0) {
            nearbyHospitals.forEach(hospital => {
                hospitalList.innerHTML += `<p>${hospital.name} - ${hospital.distance} away</p>`;
            });
        } else {
            hospitalList.innerHTML = `<p>No hospitals found in this location.</p>`;
        }
    } else {
        hospitalList.innerHTML = `<p>Please enter a location.</p>`;
    }
