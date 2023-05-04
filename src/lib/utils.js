/**
 * This function converts date-string into format such like 'July 7, 2021'
 * @param {string} d yyyy-mm-dd
 * @returns {string}
 */
export function getFormattedDate(d) {
	return new Date(d).toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});
}
