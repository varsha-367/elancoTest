const BASE_URL =  'https://engineering-task.elancoapps.com/api';

export const getData = ((url) => {
    return fetch(BASE_URL+url)
    .then(response => response.json())
    .then(data => data )
});