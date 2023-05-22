import { useEffect, useState } from "react";
import "../styles/CountryInfoView.scss";

export function CountryInfoView(props) {
  const [name, setName] = useState("");
  const [engName, setEngName] = useState("");
  const [iso, setIso] = useState("");
  const [flags, setFlags] = useState("");
  const [dataBoolean, setDataBoolean] = useState(false);

  useEffect(() => {
    setEngName(props.data.country_eng_nm);
    setName(props.data.country_nm);
    setIso(props.data.country_iso_alp2);
    setFlags(props.data.download_url);
    setDataBoolean(true);
  }, [props]);

  return (
    <div className="countryCard">
      <ul>
        <li className="flags">
          <img src={flags}></img>
        </li>
      </ul>

      <ul>
        <li className="name">{name ? <p>한글명: {name}</p> : null}</li>
        <li className="engName">{engName ? <p>영문명: {engName}</p> : null}</li>
        <li className="iso">{iso ? <p>ISO코드: {iso}</p> : null}</li>
      </ul>
    </div>
  );
}
