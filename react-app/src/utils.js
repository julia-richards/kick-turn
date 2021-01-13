export const capitalize = (string) =>
	string.charAt(0).toUpperCase() + string.slice(1);

export const titleize = (string) => {
	string = string.replace(/_id/, ""); // remove _id
	string = string.replace(/_/g, " "); // change out underscore for space
	string = string.replace(/([a-z])([A-Z])/g, "$1 $2"); // add space for camelCase
	return string
		.split(" ")
		.map((word) => capitalize(word))
		.join(" ");
};
