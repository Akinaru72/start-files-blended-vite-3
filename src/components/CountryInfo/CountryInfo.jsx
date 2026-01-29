import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import css from './CountryInfo.module.css';
import GoBackBtn from '../GoBackBtn/GoBackBtn';

export default function CountryInfo({
  country: { flag, capital, countryName, population, languages = [] },
}) {
  const location = useLocation();
  console.log(location);
  const backLink = useRef(location.state ?? '/country');
  console.log('REF', backLink);
  return (
    <>
      <GoBackBtn backLink={backLink.current} />
      <div className={css.wrapper}>
        <div className={css.flag}>
          <img className={css.img} src={flag} alt={countryName} />
        </div>
        <div className={css.box}>
          <h3 className={css.capital}>
            Capital: <span className={css.accent}>{capital}</span>
          </h3>

          <h1 className={css.title}>
            {countryName === 'Russian Federation' ? 'MORDOR' : countryName}
          </h1>

          <p className={css.details}>
            Population: <span className={css.accent}>{population}</span>
          </p>

          <p className={css.details}>
            Languages: <span className={css.accent}>{languages}</span>
          </p>
        </div>
      </div>
    </>
  );
}
