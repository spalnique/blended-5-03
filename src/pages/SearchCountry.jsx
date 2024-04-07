import {
  Container,
  CountryList,
  Heading,
  Loader,
  SearchForm,
  Section,
} from 'components';
import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/countryApi';

export const SearchCountry = () => {
  const [query, setQuery] = useState(null);
  const [countries, setCountries] = useState(null);
  const [isLoader, setIsLoader] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (query) => {
    setQuery(query);
  };
  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      setIsLoader(true);
      try {
        const countriesData = await fetchByRegion(query);
        setCountries(countriesData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoader(false);
      }
    };
    fetchData();
  }, [query]);

  return (
    <Section>
      <Container>
        {error && <Heading title={error} bottom />}
        <SearchForm handleSubmit={handleSubmit} />
        {isLoader && <Loader />}
        {Array.isArray(countries) && <CountryList countryData={countries} />}
      </Container>
    </Section>
  );
};
