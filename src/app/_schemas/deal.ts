import { z } from "zod";

export const dealSchema = z.object({
	name: z
		.string({ message: "Name is required" })
		.min(3, "Name should have at least 3 letters"),
	link: z
		.string({ message: "Link is required" })
		.url("Link must be a valid URL"),
	coupanCode: z.string().min(5, "Coupon should have at least 5 letters"),
	discount: z.coerce
		.number()
		.min(1, "Discount precentage must be at greater than 1")
		.max(100, "Discount percent can be maximum 100"),
});
