export const SetStorage = (key: string, val: string) => {
  localStorage.setItem(key, val)
}

export const GetStorage = (key: string) => {
  return localStorage.getItem(key)
}
