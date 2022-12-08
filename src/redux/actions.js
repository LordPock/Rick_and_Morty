
export function addFavorite(id) {
    return {
        type: 'ADD_FAVORITE',
        payload: id
    }
}

export function deleteFavorite(id) {
    return {
        type: 'DELETE_FAVORITE',
        payload: id
    }
}

export function filterCards(status) {
    return {
        type: 'FILTER',
        payload: status
    }
}

export function orderCards(id) {
    return {
        type: 'ORDER',
        payload: id
    }
}