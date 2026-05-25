import { fetchDatausaCondoRecords } from "../api/datausa.api.js";
import type { Condo, CondoSize } from "../types/condo.types.js";

function getCondoSize(residents: number): CondoSize {
	if (residents <= 2000000) {
		return "small";
	}

	if (residents <= 5000000) {
		return "medium";
	}

	return "large";
}

export async function listCondos(): Promise<Condo[]> {
	const records = await fetchDatausaCondoRecords();

	return records.map((record) => ({
		id: record["State ID"],
		name: record.State,
		residents: record.Population,
		size: getCondoSize(record.Population),
	}));
}


