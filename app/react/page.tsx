import { Store } from "@integrationscaptain/react";

export default function DemoReact() {
  const NEXT_PUBLIC_STORE_URL = "http://demo.localhost:3002";
  return <Store url={NEXT_PUBLIC_STORE_URL} />;
}
