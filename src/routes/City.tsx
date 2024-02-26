import { useQuery } from "react-query";
import { Location, useLocation } from "react-router-dom";
import { getCityDetail } from "../api";
import styled from "styled-components";
import SunriseSunsetChart from "../components/SunriseSunsetChart";
import _ from "lodash";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 560px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const SubTitle = styled.h3`
  font-size: 30px;
  /* color: ${(props) => props.theme.accentColor}; */
`;

const Overview = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  margin-bottom: 40px;
  border-radius: 10px;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

interface RouteState {
  name: string;
  region: string;
  country: string;
  latitude: string;
  longitude: string;
}

interface CityDetail {
  date: string;
  sunrise: string;
  sunset: string;
  first_light: string;
  last_light: string;
  dawn: string;
  dusk: string;
  solar_noon: string;
  golden_hour: string;
  day_length: string;
  timezone: string;
  utc_offset: number
}

export interface CityInfo {
  results: CityDetail[];
  status: string;
}

function City() {
  const { state } = useLocation() as Location<RouteState>;
  console.log('aaa state: ', state)
  const { isLoading, data: cityInfo } = useQuery<CityInfo>("cityDetail", () => getCityDetail(state.latitude, state.longitude));

  return (
    <Container>
      <Header>
        <Title>{ state.name }</Title>
        <SubTitle>{ `${state.region}, ${state.country}` }</SubTitle>
      </Header>
      <Overview>
        <OverviewItem>
          sunrise: {_.last(cityInfo?.results)?.sunrise}
        </OverviewItem>
        <OverviewItem>
          sunset: {_.last(cityInfo?.results)?.sunset}
        </OverviewItem>
      </Overview>

      <SunriseSunsetChart cityInfo={cityInfo}/>
    </Container>
  )
}

export default City;
