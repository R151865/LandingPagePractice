import "./index.css";
import centerImage from "../../../images/oval@3x.png";

export default function ImageComponent({ url = centerImage }) {
  return <img className="oval-image" alt="center oval" src={url} />;
}
