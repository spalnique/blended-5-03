import { Link } from 'react-router-dom';
import { Grid, GridItem } from '..';

export const CountryList = ({ countryData }) => {
  return (
    <Grid>
      {countryData.map(({ id, flag, country }) => {
        return (
          <GridItem key={id}>
            <Link to={`/country/${id}`}>
              <img src={flag} alt={country} />
            </Link>
          </GridItem>
        );
      })}
    </Grid>
  );
};
