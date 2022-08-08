const baseURLs = {
	DEV: 'https://sima.smkwikrama1jepara.sch.id/api/v1/student',
}

export const selectedBaseURL = <keyof typeof baseURLs>('DEV')

export default baseURLs[selectedBaseURL]
