import React from "react";
import { useDays } from "./DaysContext";
import "./leads-itinerary.scss"


const DayForm = () => {
  const { days, activeDay, setDayContent } = useDays();
  const { content, id } = days.find((day) => day.id === activeDay) || {};
  //   const [formData, setFormData] = useState(tab ? tab.content : '');

  const handleChange = (e) => {
    // setFormData(e.target.value);
    setDayContent(id, e.target.value);
    console.log(days);
  };

  return (
    <div className="day-content">

      <div className="day-frm-hdr">{`Day ${id}`}</div>
      <form className="day-frm">
        <textarea  className="day-frm" value={content} onChange={handleChange} />
      </form>
    </div>
  );
};

export default DayForm;
