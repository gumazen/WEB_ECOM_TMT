import Moment from "moment";
import "moment/locale/th";

import React from "react";
export default function ThDate({ date }) {
  var moment = Moment(date);
  moment.locale("th");

  return <>{moment.format(`DD/MMM/${moment.year() + 543}`)}</>;
}
