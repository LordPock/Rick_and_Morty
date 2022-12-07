const initialState = {
    myFavorites: []
}

export default function favorites(state = initialState, action) {
    switch (action.type) {
        case 'ADD_FAVORITE':
            return {...state, myFavorites: [...state.myFavorites, action.payload]}
        case 'DELETE_FAVORITE':
            return {...state, myFavorites: state.myFavorites.filter(idx => idx.id !== action.payload)}
        default:
            return {...state}
    }
}