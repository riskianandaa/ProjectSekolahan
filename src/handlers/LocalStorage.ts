import { MMKV, useMMKVString } from "react-native-mmkv";
import { IStorageKey } from "@app-types/IStorageKey";

const Storage = new MMKV()

function setItem<Key extends keyof IStorageKey>(key: Key, value: IStorageKey[Key]) {
    Storage.set(key, typeof value == 'string' ? value : JSON.stringify(value))
}

function getItem<Key extends keyof IStorageKey>(key: Key, isObject: boolean = false): IStorageKey[Key] | undefined {
    const value = Storage.getString(key)

    if (value == undefined) {
        return undefined
    }
    if (isObject) {
        return JSON.parse(value) as IStorageKey[Key]
    }

    // @ts-ignore
    return value
}

function removeItem<Key extends keyof IStorageKey>(key: Key) {
    Storage.delete(key)
}

function removeItems<Keys extends readonly (keyof IStorageKey)[]>(keys: Keys) {
    for (const key of keys) {
        Storage.delete(key)
    }
}

export function useLocalStorage<Key extends keyof IStorageKey>(key: Key, isObject: boolean = false)
    : [IStorageKey[Key] | undefined, (newValue: IStorageKey[Key] | undefined) => void] {
    const [value, setValue] = useMMKVString(key)
    if (value != undefined && isObject) {
        // @ts-ignore
        return [JSON.parse(value), setValue]
    }
    // @ts-ignore
    return [value, setValue]
}

const LocalStorage = {
    setItem,
    getItem,
    removeItem,
    removeItems
}

export default LocalStorage
