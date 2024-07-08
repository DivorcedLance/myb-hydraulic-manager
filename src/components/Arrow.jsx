import arrowIcon from "../assets/arrow-down.svg";

export function Arrow({ orientation = "right" }) {
  return (
    <div className={`flex items-center ${orientation === "right" ? "-rotate-90" : "rotate-90"}`}>
      <img src={arrowIcon} alt="Arrow" className="w-8 h-8" />
    </div>
  )
}
