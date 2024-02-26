import { useQuery } from "react-query";
import styled from "styled-components";
import { getAllCities } from "../api";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Clock from "../components/Clock";
import SunriseSunsetChart from "../components/SunriseSunsetChart";

interface ICity {
  id: number
  wikiDataId: string;
  name: string;
  country: string;
  countryCode: string;
  region: string;
  regionCode: string;
  regionWdId: string;
  latitude: number
  longitude: number
  population: number
}

interface ICities {
  data: ICity[];
}

const Container = styled.div`
  padding: 0px 20px;
  max-width: 500px;
  width: 500px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  display: block;
  text-align: center;
`;

const CityList = styled.ul``;

const City = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

function Cities() {
  const { isLoading, data: citiesInfo } = useQuery<ICities>("allCities", getAllCities);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      console.log('aaa position: ', position)
    })
  }, []);
  return (
    <Container>
      <Header>
        <Title>Cities</Title>
      </Header>
      {
        isLoading ? 
        <Loader>Loading...</Loader> : 
       (
        <CityList>
          {citiesInfo?.data?.map((cityInfo) => (
            <City key={cityInfo.id}>
              <Link 
                to={{ pathname: `/${cityInfo.id}`}} 
                state={{
                  name: cityInfo.name,
                  region: cityInfo.region,
                  country: cityInfo.country,
                  latitude: cityInfo.latitude, 
                  longitude: cityInfo.longitude
                }}>
                {cityInfo.name}
              </Link>
            </City>
          ))}
        </CityList>
       )
      }
    </Container>
  )
}

export default Cities;
