import Airline from "./Airline";
import AirlineFlight from "./AirlineFlight";
import Arrival from "./Arrival";
import Departure from "./Departure";
import { FlightId } from "./FlightSubmission";
import LiveFlight from "./LiveFlight";

type Flight = {
    number: string,
    iata: string,
    icao: string

}

export default interface FlightData {    
    flightDate: string,
    flightStatus: string,
    departure: Departure,
    id: FlightId,
    flight: Flight,
    arrival: Arrival,
    airline: AirlineFlight,
    cityName: string,
    liveFlight: LiveFlight
}