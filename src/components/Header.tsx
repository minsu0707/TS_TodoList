import { useEffect, useState } from "react";
import styled from "styled-components";

export const Header = () => {
  const [time, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const intervalSecond = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(intervalSecond); // 컴포넌트가 언마운트될 때
  }, []);

  return (
    <HeaderWrap>
      <div className="Time">{time}</div>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
	
`;
