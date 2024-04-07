import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/countryApi';

export const Home = () => {
  const [countries, setCountries] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEUCountries = async () => {
      setLoading(true);
      try {
        const response = await getCountries();
        setCountries(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEUCountries();
  }, []);

  return (
    <Section>
      <Container>
        {error && <Heading title={error} bottom />}
        {countries && <CountryList countryData={countries} />}
        {loading && <Loader />}
      </Container>
    </Section>
  );
};
