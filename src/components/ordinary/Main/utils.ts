import { Measurement } from "../../../core/interface/User";


const execTemperatureFromMeasurements = (measurements: Measurement[]) => {
   const tempWaterWithDate = [];
   const tempRoomWithDate = []; 

    for (let { tempWater, tempRoom, date } of measurements) {
        tempWaterWithDate.push({ value: tempWater, date });
        tempRoomWithDate.push({ value: tempRoom, date });
    }

    return {
        tempWater: tempWaterWithDate,
        tempRoom: tempRoomWithDate
    }
};

export {
    execTemperatureFromMeasurements
}