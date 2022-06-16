const baseURLs = {
	DEV: 'https://jsonplaceholder.typicode.com/',
}

export const selectedBaseURL = <keyof typeof baseURLs>('DEV')

export default baseURLs[selectedBaseURL]
