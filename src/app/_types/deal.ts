//! Helper interfaces

export type DealFormState<T> = {
	errors?: StringMap;
	successMessage?: string;
	data?: T; // works like "any" => brings back a data from type T (generic type)
	//which one of the inputs would be having manual client side validation
	blur?: StringToBoleanMap;
};

export interface StringMap {
	[key: string]: string;
}

export interface StringToBoleanMap {
	[key: string]: boolean;
}
