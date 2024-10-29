const { readFile } = require("fs").promises;
const path = require("path");
const filePath = path.join(__dirname, "airportData.txt");

const findAirportByName = async (code) => {
    try {
        const data = await readFile(filePath)

        const airports = await JSON.parse(data)

        const airport = airports.find(airport => airport.iata === code);

        console.log(airport);
        return airport

    } catch (err) {
        console.log(err)
    }
}

findAirportByName("LHR");
