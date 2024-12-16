//! Helper interfaces

export type DealFormState<T> = {
	errors?: StringMap;
	successMessage?: string;
	data?: T; // works like "any" => brings back a data from
	//type T (generic type) which one of the inputs would be
	// having manual client side validation
	blur?: StringToBoleanMap;
	// Represents which form inputs have been interacted with
	// (blurred) and validated manually on the client side.
	// e.g:
	// blur: {
	//   username: true,
	//   email: false
	// }
};
// Generic type T allows this property to hold any kind of
// data that you decide when you define the DealFormState.
// e.g:
// type UserData = { username: string; email: string };
// const formState: DealFormState<UserData> = {
//   data: { username: "John", email: "john@example.com" }
// };

export interface StringMap {
	[key: string]: string;
}
// Could be used for associating field names (like form inputs) with error messages.
// e.g:
// errors: {
// 	username: "Username is required",
// 	email: "Invalid email address"
//   }

export interface StringToBoleanMap {
	[key: string]: boolean;
}
