import { APIConfigType } from "@handlers/api/Fetch"

export type APIParamsType = {
	GetContacts: void
}

export const APIConfig: APIConfigType = {
	GetContacts: [
		'GET', 'users/', 'NO_HEADER'
	]
}
