import { Store } from "integrations-captain-react";

export default function DemoReact() {
  const STORE_URL = "http://demo.localhost:3002";
  return <Store url={STORE_URL} />;
}
