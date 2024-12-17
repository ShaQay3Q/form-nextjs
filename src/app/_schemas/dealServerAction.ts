import { z } from "zod";

export const dealSchema = z.object({
	name: z
		.string({ message: "Name is required" })
		.min(3, "Name should have at least 3 letters"),
	link: z
		.string({ message: "Link is required" })
		.url("Link must be a valid URL"),
	couponcode: z
		.string({ message: "Coupon Code is required" })
		.min(5, "Coupon should have at least 5 letters"),
	discount: z.coerce
		.number({ message: "Discount is required" })
		.min(1, "Discount precentage must be at greater than 1")
		.max(100, "Discount percent can be maximum 100"),
});
