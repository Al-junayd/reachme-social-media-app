import React, { useEffect } from "react";
import Container from "./Container";

const Page = (props) => {
  useEffect(() => {
    document.title = `${props.title} | ReachME App`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Container wide={props.wide}>{props.children}</Container>
    </div>
  );
};

export default Page;
