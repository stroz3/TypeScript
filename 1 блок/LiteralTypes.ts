function fetchWithAuth(url: string, method: 'post' | 'get') {

}

let Letmethod = 'post'
const Constmethod = 'post'

// fetchWithAuth('r', Letmethod) - ошибка
fetchWithAuth('r', Constmethod)
fetchWithAuth('r', Letmethod as 'post') // Нужно быть аккратнее с такой привязкой типов, так как есои передать что-то другое, то проверка пройдет


fetchWithAuth('r', 'get')
// fetchWithAuth('r', 'ge') - ошибка


function fetchWithAuth1(url: string, method: 1 | 2): 1 | -1 {
    return 1
    // return 0 - ошибка
}

fetchWithAuth1('r', 1)
// fetchWithAuth('r', 'get') - ошибка


