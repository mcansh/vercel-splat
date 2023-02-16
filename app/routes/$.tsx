import { useParams } from "@remix-run/react";

export default function () {
  let params = useParams();

  return <pre>{JSON.stringify(params, null, 2)}</pre>;
}
