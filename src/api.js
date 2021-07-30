export const getUsers = (currentPage) => {
  return fetch(`https://randomuser.me/api/?page=${currentPage}&results=54&seed=abc`)
    .then(response => response.json())
}
