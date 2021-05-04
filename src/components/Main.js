import React from "react";
import Card from 'react-bootstrap/Card'

const MainHead = () => {
    return (
<Card className="text-center">
  {/* <blockquote className="blockquote mb-0"> */}
      <p className="main-para">
        {' '}
        “You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about.<br></br> 
        It’s about believing in the future and thinking that the future will be better than the past.<br></br>
        And I can’t think of anything more exciting than going out there and being among the stars.”
        {' '}
      </p>
      {/* <footer className="blockquote-footer">
      <cite title="Source Title">Elon Musk</cite>
      </footer> */}
    {/* </blockquote> */}
</Card>
    );
  };
  
  export default MainHead;