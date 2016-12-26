export function getUser() {
	return JSON.parse(localStorage.getItem('userData'));
}