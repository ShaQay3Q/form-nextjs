import { StringMap } from "../_types/dealServerAction";
import { ZodError } from "zod";

export const convertZodErrors = (error: ZodError): StringMap => {
	return error.issues.reduce(
		(accumulator: { [key: string]: string }, issue) => {
			// for the key at that path = issue.path[0] adds the value of issue.message
			accumulator[issue.path[0]] = issue.message;
			return accumulator;
		},
		// Strats with an emoty object and sets
		// it reitterate through issues
		{}
	);
};
