import React, { useContext } from "react";
import PieChart from "react-native-pie-chart";
import {
  DEFAULT_DARK_GREY,
  DEFAULT_LIGTH_GREY,
  DEFAULT_YELLOW,
} from "../../utils/colors";
import { UserContext } from "../../context/UserContext";

export default function Chart() {
  const { metrics } = useContext(UserContext);
  const widthAndHeight = 100;
  const series = [
    metrics.paymentValue,
    Math.abs(metrics.paymentValue - metrics.wage),
  ];
  const sliceColor = [DEFAULT_YELLOW, DEFAULT_LIGTH_GREY];

  return (
    <PieChart
      widthAndHeight={widthAndHeight}
      series={series}
      sliceColor={sliceColor}
      coverRadius={0.65}
      coverFill={DEFAULT_DARK_GREY}
    />
  );
}
