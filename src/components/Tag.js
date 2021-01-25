import React from "react";
import Link from "./Link";

import "../styles/components/Tag.scss";

const Tag = ({data}) => {
  return (
    <li className="tag">
      <Link to={`/tag/${data}`}>
        {data}
      </Link>
    </li>
  );
}

export default Tag;