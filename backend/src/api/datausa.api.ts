const DATAUSA_URL =
  process.env.DATAUSA_URL ||
  'https://api.datausa.io/tesseract/data.jsonrecords?cube=acs_yg_total_population_5&drilldowns=State,Year&measures=Population&include=Year:2023&limit=100,0';

type DatausaCondoRecord = {
  'State ID': string;
  State: string;
  Population: number;
};

type DatausaResponse = {
  data?: DatausaCondoRecord[];
};

export async function fetchDatausaCondoRecords() {
  const response = await fetch(DATAUSA_URL);

  if (!response.ok) {
    throw new Error(
      `External API request failed with status ${response.status}`,
    );
  }

  const payload = (await response.json()) as DatausaResponse;

  if (!Array.isArray(payload.data)) {
    throw new Error('External API returned an invalid payload');
  }

  return payload.data;
}
