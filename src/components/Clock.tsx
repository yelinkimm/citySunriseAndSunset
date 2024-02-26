import moment from "moment";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div``;

function Clock() {
  const [date, setDate] = useState<number>(Date.now());

  useEffect(() => {
    setInterval(() => setDate(Date.now()), 1000)
  }, []);

  return (
    <Container>
      <div>{moment(date).format("YYYY-MM-DD")}</div>
      <div>{moment(date).format("hh:mm:ss")}</div>
    </Container>
  )
}

export default Clock;