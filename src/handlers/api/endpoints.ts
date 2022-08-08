import { APIConfigType } from "@handlers/api/Fetch"

export type APIParamsType = {
	Login: {
		email : string
		password : string
	}
}

export const APIConfig: APIConfigType = {
	Login: [
		'POST', '/login' , 'NO_HEADER'
	]
}
