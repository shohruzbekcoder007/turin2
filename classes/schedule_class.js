const { Schedule } = require('./../models/schedule');
const { MainClass } =require('./main_class');

class ScheduleClass extends MainClass{
    constructor(){
        let Schema = Schedule;
        super(Schema);
    }
}

module.exports.ScheduleClass = ScheduleClass;