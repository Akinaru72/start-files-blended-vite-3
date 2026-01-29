import { fetchByRegion } from '../service/countryApi';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import Loader from '../components/Loader/Loader';
import SearchForm from '../components/SearchForm/SearchForm';
import CountryList from '../components/CountryList/CountryList';

export default function SearchCountry() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const region = searchParams.get('region') ?? '';
  const [countries, setCountries] = useState([]);

  const handleSubmit = region => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set('region', region);
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (region.length === 0) return;

    async function getEuropeCountry() {
      try {
        setIsLoading(true);
        const data = await fetchByRegion(region);
        console.log(data);
        setCountries(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getEuropeCountry();
  }, [region]);

  return (
    <Section>
      <Container>
        <Heading title="SearchCountry" bottom />
        {isLoading && <Loader />}
        <SearchForm onSubmit={handleSubmit} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
}
