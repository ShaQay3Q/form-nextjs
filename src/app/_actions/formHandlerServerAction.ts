"use server";

import { dealSchema } from "../_schemas/dealServerAction";
import { DealFormState, StringMap } from "../_types/dealServerAction";
import { convertZodErrors } from "../_utils/errorsServerAction";

// type FormData = z.infer<typeof dealSchema>

export async function formHandlerAction(
	formData: FormData
): Promise<DealFormState<StringMap>> {
	// runs on server side => needs to brong back a Promis
	// of the defined type
	const unvalidatedDeal = {
		name: formData.get("name") as string,
		link: formData.get("link") as string,
		couponcode: formData.get("couponcode") as string,
		discount: formData.get("discount") as string,
	};

	// const data: StringMap = unvalidatedDeal

	const validatedDeal = dealSchema.safeParse(unvalidatedDeal);

	if (!validatedDeal.success) {
		console.log(validatedDeal.error);

		const errors = convertZodErrors(validatedDeal.error);
		return { errors, data: unvalidatedDeal };
	} else {
		console.log(validatedDeal);

		return { successMessage: "Deal added successfully", errors: {}, data: {} };
	}
}

// export const handleAction = async (formData: FormData): Promise<void> => {
// 	await formHandlerAction(formData);
// };
