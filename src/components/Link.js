import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Link = ({children, to}) => (
  <AniLink
    to={to}
    paintDrip
    hex="#000000"
  >
    {children}
  </AniLink>
)

export default Link;