import getHypertune from "~/lib/getHypertune";

export default async function ServerComponent() {
  const hypertune = await getHypertune();

  const exampleFlag = hypertune.exampleFlag({ fallback: false });

  return <div>Example Flag: {String(exampleFlag)}</div>;
}