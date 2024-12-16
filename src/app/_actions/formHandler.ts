"use server";

import { dealSchema } from "../_schemas/deal";
import { DealFormState } from "../_types/deal";

//
export async function formHandlerAction(
	formData: FormData
): Promise<DealFormState<undefined>> {
	// runs on server sdide => needs to brong back a Promis of the defined type
	const unvalidatedDeal = {
		name: formData.get("name"),
		link: formData.get("link"),
		couponcode: formData.get("couponcode"),
		discount: formData.get("discount"),
	};

	const validatedDeal = dealSchema.safeParse(unvalidatedDeal);

	if (!validatedDeal.success) {
		console.log(validatedDeal.error);

		return {};
	} else {
		return { successMessage: "Deal added successfully" };
	}
}

export const handleAction = async (formData: FormData): Promise<void> => {
	await formHandlerAction(formData);
};
