export const SetStorage = (key: string, val: any) => {
  localStorage.setItem(key, JSON.stringify(val))
}

export const GetStorage = (key: string) => {
  if (!key) {
    return
  }
  const val = localStorage.getItem(key)
  if (val) {
    return JSON.parse(val)
  }
  return {}
}
