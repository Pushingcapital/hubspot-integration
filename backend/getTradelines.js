export default async function getTradelines() {
  const url =
    "https://api.hubapi.com/crm/v3/objects/p123456_credit_tradeline?associations=financial_profiles,credit_reports";

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error(`HubSpot error ${res.status}`);
  const data = await res.json();
  return data.results; // array of tradeline records
}
