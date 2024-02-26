import moment from "moment";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 560px;
  /* padding: 0px 20px; */
  margin: 0 auto;
  text-align: center;
`;
const DateContainer = styled.div`
  font-size: 12px;
`;
const TimeContainer = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

function Clock() {
  const [date, setDate] = useState<number>(Date.now());

  useEffect(() => {
    setInterval(() => setDate(Date.now()), 1000)
  }, []);

  return (
    <Container>
      <DateContainer>{moment(date).format("YYYY-MM-DD")}</DateContainer>
      <TimeContainer>{moment(date).format("hh:mm:ss")}</TimeContainer>
    </Container>
  )
}

export default Clock;