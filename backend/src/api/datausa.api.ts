const DATAUSA_URL =
  process.env.DATAUSA_URL ||
  'https://api.datausa.io/tesseract/data.jsonrecords?cube=acs_yg_total_population_5&drilldowns=State,Year&measures=Population&include=Year:2023&limit=100,0';
const DEFAULT_DATAUSA_TIMEOUT_MS = 10000;

type DatausaCondoRecord = {
  'State ID': string;
  State: string;
  Population: number;
};

type DatausaResponse = {
  data?: unknown;
};

function getDatausaTimeoutMs() {
  const timeout = Number(
    process.env.DATAUSA_TIMEOUT_MS ?? DEFAULT_DATAUSA_TIMEOUT_MS,
  );

  return Number.isFinite(timeout) && timeout > 0
    ? timeout
    : DEFAULT_DATAUSA_TIMEOUT_MS;
}

function isDatausaCondoRecord(record: unknown): record is DatausaCondoRecord {
  if (typeof record !== 'object' || record === null) {
    return false;
  }

  const candidate = record as Record<string, unknown>;

  return (
    typeof candidate['State ID'] === 'string' &&
    typeof candidate.State === 'string' &&
    typeof candidate.Population === 'number' &&
    Number.isFinite(candidate.Population)
  );
}

export async function fetchDatausaCondoRecords() {
  const timeoutMs = getDatausaTimeoutMs();
  const controller = new AbortController();
  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeoutMs);

  let response: Response;

  try {
    response = await fetch(DATAUSA_URL, { signal: controller.signal });
  } catch (error) {
    if (controller.signal.aborted) {
      throw new Error(`External API request timed out after ${timeoutMs}ms`);
    }

    throw error;
  } finally {
    clearTimeout(timeoutId);
  }

  if (!response.ok) {
    throw new Error(
      `External API request failed with status ${response.status}`,
    );
  }

  const payload = (await response.json()) as DatausaResponse;

  if (!Array.isArray(payload.data)) {
    throw new Error('External API returned an invalid payload');
  }

  if (!payload.data.every(isDatausaCondoRecord)) {
    throw new Error('External API returned invalid condominium records');
  }

  return payload.data;
}
