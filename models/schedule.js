const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    start: {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
        required: true,
    },
    guide_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "guides",
    },
    max_number_of_trivelers: {
        type: Number,
        required: true,
    }
});

const Schedule = mongoose.model("schedules", ScheduleSchema);
module.exports.Schedule = Schedule;