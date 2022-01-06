import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";

const TableDatePicker = () => {
    const [dateRange, setDateRange] = useState([new Date(), new Date()]);
    const [startDate, endDate] = dateRange;
    return (
        <ReactDatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
                setDateRange(update);
            }}
            withPortal
        />
    );
};

export default TableDatePicker;
