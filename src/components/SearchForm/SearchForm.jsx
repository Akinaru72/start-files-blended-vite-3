import { FiSearch } from 'react-icons/fi';
import css from './SearchForm.module.css';

const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

export default function SearchForm({ onSubmit }) {
  const changeSearchRegion = event => {
    event.preventDefault();

    const region = event.target.value;

    onSubmit(region);
    event.currentTarget.form.reset();
  };

  return (
    <div>
      <form
        onSubmit={() => {
          changeSearchRegion;
        }}
        className={css.form}
      >
        <button className={css.button} type="submit">
          <FiSearch size="16px" />
        </button>

        <select
          aria-label="select"
          className={css.select}
          name="region"
          // onChange={changeSearchRegion}
          required
          defaultValue="default"
        >
          <option disabled value="default">
            Select a region
          </option>
          {regions.map(region => (
            <option key={region.id} value={region.value}>
              {region.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}
