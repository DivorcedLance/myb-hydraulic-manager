import { useState, useRef, useEffect } from "react";
import { Circle } from "./Circle";

export function FlowStage({ status, label, labelPosition = "top" }) {
  const [labelHeight, setLabelHeight] = useState(0);
  const labelRef = useRef(null);

  useEffect(() => {
    if (labelRef.current) {
      setLabelHeight(labelRef.current.clientHeight);
    }
  }, [label]);

  return (
    <div className={`flex ${labelPosition === "top" ? "flex-col" : "flex-col-reverse"} items-center gap-2`}>
      <div style={{ height: `${labelHeight}px` }}></div>
      <Circle color={status == 1 ? "black" : status == 0 ? "white" : "lightgray"} />
      <div ref={labelRef} className={`text-center text-base  ${status ? "font-semibold" : ""}`}>{label}</div>
    </div>
  );
}
