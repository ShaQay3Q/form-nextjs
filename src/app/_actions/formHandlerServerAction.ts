"use server";

import { dealSchema } from "../_schemas/dealServerAction";
import { DealFormState } from "../_types/dealServerAction";
import { convertZodErrors } from "../_utils/errorsServerAction";

// type FormData = z.infer<typeof dealSchema>

export async function formHandlerAction(
	formData: FormData
): Promise<DealFormState<undefined>> {
	// runs on server side => needs to brong back a Promis
	// of the defined type
	const unvalidatedDeal = {
		name: formData.get("name"),
		link: formData.get("link"),
		couponcode: formData.get("couponcode"),
		discount: formData.get("discount"),
	};

	// type unvalidatedDeal = z.infer<typeof dealSchema>;

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

// export const handleAction = async (formData: FormData): Promise<void> => {
// 	await formHandlerAction(formData);
// };
