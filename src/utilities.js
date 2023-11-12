const baseUrl = `/api`;
export let jwtToken = "";


export const getCars = () => {
  const url = `${baseUrl}/carItems`;
  return fetch(url)
    .then((res) => {
      if (res.ok) return res.json();
      else throw new Error(`Can't fetch carItems: ${res.status} ${res.statusText}`)
    })
}
