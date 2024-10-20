import * as React from "react";
import PageContent from "./pageContent";
import ScreenSizeClass from "./screenSizeClass";

export default function MainLayout(props) {
  return (
    <React.Fragment>
      <ScreenSizeClass>
        <PageContent>{props.children}</PageContent>
      </ScreenSizeClass>
    </React.Fragment>
  );
}
