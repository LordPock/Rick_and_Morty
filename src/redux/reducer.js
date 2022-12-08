const initialState = {
    myFavorites: [],
    allCharacters: []
}

export default function reducerfav(state = initialState, action) {
    switch (action.type) {
        case 'ADD_FAVORITE':
            const all = [...state.allCharacters, action.payload]
            console.log(all)
            return {...state, allCharacters: [...all].sort((a,b) => a.id - b.id), myFavorites: [...all].sort((a,b) => a.id - b.id)}
        case 'DELETE_FAVORITE':
            const borrar = state.allCharacters.filter(idx => idx.id !== action.payload)
            return {...state, allCharacters: borrar, myFavorites: borrar}
        case 'FILTER':
            if(action.payload !== 'All') {
                return {...state, myFavorites: state.allCharacters.filter(idx => idx.gender === action.payload)}
            } else {
                return {...state, myFavorites: state.allCharacters}
            }
        case 'ORDER':
            if (action.payload === 'Ascendente') {
                const ordenado = [...state.myFavorites].sort((a,b) => a.id - b.id)
                return {...state, myFavorites: ordenado }
            } else {
                const ordenado = [...state.myFavorites].sort((a,b) => b.id - a.id)
                return {...state, myFavorites: ordenado } 
            }
        default:
            return state
    }
}