// import baseUrl from "@handlers/api/BaseURL"
// import { APIConfig, APIParamsType } from "@handlers/api/endpoints"
// import LocalStorage from "@handlers/LocalStorage"

// export type APIConfigType = { [K in keyof APIParamsType]: ConfigType }

// type AuthorizationType = 'BASIC' | 'BEARER' | 'NO_HEADER'

// type ConfigType = ['GET' | 'POST', string, AuthorizationType]

// type ReturnedResponse = {
// 	json?: any
// 	error?: any
// }

// function GenerateAPIsFromAPIParamsType() {
// 	type APIsType = {
// 		[K in keyof APIParamsType]: (params: APIParamsType[K]) => Promise<ReturnedResponse>
// 	}

// 	const APIs = {} as APIsType

// 	for (const key in APIConfig) {
// 		const selectedKey = key as keyof APIsType

// 		const [method, endpointPath, authorizationType] = APIConfig[selectedKey]

// 		APIs[selectedKey] = (params: APIParamsType[typeof selectedKey]) => Fetch(method, endpointPath, authorizationType, params)
// 	}

// 	return APIs
// }

// export const Fetcher = GenerateAPIsFromAPIParamsType()

// const Fetch = async (
// 	method: string,
// 	endpoint: string,
// 	authorizationType: AuthorizationType,
// 	params?: any
// ): Promise<any> => {
// 	const response: ReturnedResponse = {}

// 	let additionalURL = ''
// 	let body: FormData | undefined

// 	if (params) {
// 		switch (method) {
// 			case 'GET': {
// 				for (const key in params) {
// 					additionalURL += additionalURL == '' ? '?' : '&'
// 					additionalURL += `${key}=${params[key]}`
// 				}
// 				break
// 			}
// 			case 'POST': {
// 				body = new FormData()

// 				for (const key in params) {
// 					body.append(key, params[key])
// 				}
// 				break
// 			}
// 		}
// 	}

// 	function getBasicAuth() {
// 		return ''	// TODO: Set your own Basic Authentication if needed
// 	}

// 	const token = LocalStorage.getItem('BACKEND_TOKEN_KEY')
// 	const regId = LocalStorage.getItem('MESSAGING_TOKEN_KEY')

// 	const headers: any = {
// 		Accept: 'application/json',
// 		'Content-type': method == 'GET' ? 'application/json' : 'multipart/form-data',
// 	}

// 	if (authorizationType != 'NO_HEADER') {
// 		const authorization = authorizationType == 'BASIC' ? `Basic ${getBasicAuth()}` : `Bearer ${token}`
// 		headers.Authorization = authorization
// 	}

// 	await fetch(
// 		`${baseUrl}${endpoint}${additionalURL}`,
// 		{ method, headers, body }
// 	)
// 		.then(res => {
// 			if (res.ok) return res.json()
// 			return Promise.reject(`Response is not OK. Promise rejected: ${res}`)
// 		})
// 		.then(json => response.json = json)
// 		.catch(error => {
// 			response.error = error
// 			console.warn('Error caught:', error)
// 		})

// 	return response
// }

// export default Fetcher

import { ResponseType } from '@app-types/enums/response-type'
import baseUrl from "@handlers/api/BaseURL"
import { APIConfig, APIParamsType } from "@handlers/api/endpoints"
import LocalStorage from '@handlers/LocalStorage'
import moment from 'moment'
import { Platform } from 'react-native'
import { ResponseProcessor } from './response-processor'

export type APIConfigType = { [K in keyof APIParamsType]: ConfigType }

type AuthorizationType = 'BASIC' | 'BEARER' | 'NO_HEADER'

type ConfigType = ['GET' | 'POST', string, AuthorizationType]

export type ReturnedResponse = {
	json?: any
	networkError?: any
}

function GenerateAPIsFromAPIParamsType() {
	type APIsType = {
		[K in keyof APIParamsType]: (params: APIParamsType[K]) => Promise<ReturnedResponse>
	}

	const APIs = {} as APIsType

	for (const key in APIConfig) {
		const selectedKey = key as keyof APIsType

		const [method, endpointPath, authorizationType] = APIConfig[selectedKey]

		APIs[selectedKey] = (params: APIParamsType[typeof selectedKey]) => Fetch(method, endpointPath, authorizationType, params)
	}

	return APIs
}

export const Fetcher = GenerateAPIsFromAPIParamsType()

const Fetch = async (
	method: string,
	endpoint: string,
	authorizationType: AuthorizationType,
	params?: any
): Promise<any> => {
	const response: ReturnedResponse = {}

	let additionalURL = ''
	let body: FormData | undefined

	if (params) {
		switch (method) {
			case 'GET': {
				for (const key in params) {
					additionalURL += additionalURL == '' ? '?' : '&'
					additionalURL += `${key}=${params[key]}`
				}
				break
			}
			case 'POST': {
				body = new FormData()

				for (const key in params) {
					body.append(key, params[key])
				}
				break
			}
		}
	}

	function getBasicAuthPassword() {
	}

	function getBasicAuth() {

	}

	const regId = LocalStorage.getItem('MESSAGING_TOKEN_KEY')
	const token = LocalStorage.getItem('BACKEND_TOKEN_KEY')
		const headers: any = {
			Accept: 'application/json',
			'Content-type': method == 'GET' ? 'application/json' : 'multipart/form-data',
		}
	if (authorizationType != 'NO_HEADER') {
		const authorization = authorizationType == 'BASIC' ? `Basic ${getBasicAuth()}` : `Bearer ${token}`
		headers.Authorization = authorization
	}
	// const headers: any = {
	// 	Accept: 'application/json',
	// 	'Content-type': method == 'GET' ? 'application/json' : 'multipart/form-data',
	// 	Authorization: authorization,
	// 	regid: regId,
	// 	platform: Platform.OS as ('android' | 'ios')
	// }
	await fetch(
		`${baseUrl}${endpoint}${additionalURL}`,
		{ method, headers, body }
	)
		.then(res => {
			return res.json()
		})
		.then(json => {
			response.json = json
		})
		.catch(error => {
			response.networkError = error
		})

	return response
}

export default Fetcher
