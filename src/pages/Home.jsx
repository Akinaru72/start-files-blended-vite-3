import { useEffect, useState } from 'react';
import { getCountries } from '../service/countryApi';

import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import CountryList from '../components/CountryList/CountryList';
import Loader from '../components/Loader/Loader';

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getEuropeCountries() {
      try {
        setIsLoading(true);
        const data = await getCountries();

        setCountries(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getEuropeCountries();
  }, []);

  return (
    <Section>
      <Container>
        <Heading title="Home" bottom />
        {isLoading && <Loader />}
        {countries.length > 0 && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
}
