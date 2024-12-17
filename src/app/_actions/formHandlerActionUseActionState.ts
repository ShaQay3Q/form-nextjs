"use server";

import { dealSchema } from "../_schemas/dealServerAction";
import { DealFormState, StringMap } from "../_types/dealServerAction";
import { convertZodErrors } from "../_utils/errorsServerAction";

export async function formHandlerAction(
	prevState: DealFormState<StringMap>,
	formData: FormData
): Promise<DealFormState<StringMap>> {
	// runs on server side => needs to brong back a Promis
	// of the defined type
	const unvalidatedDeal = {
		name: formData.get("name"),
		link: formData.get("link"),
		couponcode: formData.get("couponcode"),
		discount: formData.get("discount"),
	};

	const validatedDeal = dealSchema.safeParse(unvalidatedDeal);

	if (!validatedDeal.success) {
		console.log(validatedDeal.error);

		const errors = convertZodErrors(validatedDeal.error);
		return { errors };
	} else {
		console.log(validatedDeal);

		return { successMessage: "Deal added successfully", errors: {} };
	}
}
