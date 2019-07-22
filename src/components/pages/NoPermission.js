import React from "react";
import { Link } from "react-router-dom";

export default function NoPermission() {
  return (
    <div>
      <h1 className="text-danger">Ops..</h1>
      <h4>
        Sorry, you are not allowed to visit this page. <br />
        Please redirect to <Link to="/">Homepage</Link>.
      </h4>
    </div>
  );
}
