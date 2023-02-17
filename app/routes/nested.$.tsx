import { useParams } from "@remix-run/react";

export default function () {
  let params = useParams();
  return (
    <div>
      <h1>ahoy</h1>
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </div>
  );
}
