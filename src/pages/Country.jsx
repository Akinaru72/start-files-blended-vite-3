import { useParams } from 'react-router-dom';
import { fetchCountry } from '../service/countryApi';
import { useEffect, useState } from 'react';

import Container from '../components/Container/Container';
import Section from '../components/Section/Section';
import Loader from '../components/Loader/Loader';
import CountryInfo from '../components/CountryInfo/CountryInfo';

export default function Country() {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getCountryId() {
      if (!countryId) return;

      try {
        setIsLoading(true);
        const data = await fetchCountry(countryId);

        setCountry(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getCountryId();
  }, [countryId]);

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {country && <CountryInfo country={country} />}
      </Container>
    </Section>
  );
}
