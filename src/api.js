export const getUsers = (currentPage) => {
  return fetch(`https://randomuser.me/api/?page=${currentPage}&results=56&seed=abc`)
    .then(response => response.json())
}
