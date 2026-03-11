const createFormDataFromObject = (obj: Record<string, string>) => {
	const formData = new FormData();
	Object.keys(obj).forEach((k) => formData.append(k, obj[k]));
	return formData;
};

export const createFormDataRequest = (obj: Record<string, string>) => ({
	formData: () => new Promise((resolve) => resolve(createFormDataFromObject(obj)))
});
