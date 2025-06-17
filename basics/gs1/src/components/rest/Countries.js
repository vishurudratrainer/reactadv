import { useEffect, useState } from "react";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/samayo/country-json/refs/heads/master/src/country-by-name.json"
    )
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
        <select>
            {countries.map(country=>(<option value={country.country}>{country.country}</option>))}
        </select>
    </div>
  );
};

export default Countries;
