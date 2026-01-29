import { Link, useLocation } from 'react-router-dom';

import GridItem from '../GridItem/GridItem';
import Grid from '../Grid/Grid';

export default function CountryList({ countries }) {
  const location = useLocation();

  return (
    <div>
      <Grid>
        {countries.map(({ flag, id }) => (
          <GridItem key={id}>
            <Link to={`/country/${id}`} state={location}>
              <img src={flag} alt="id" />
            </Link>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
}
