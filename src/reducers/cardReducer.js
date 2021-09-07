import {types} from "../types/types";

const initialState = {
    card:[],
    active: {
        title:'',
        categoria:'',
        description:'',
      
        url:''
    },
    search:[]
}

export const cardReducer = (state= initialState, action) =>{
    
    switch (action.type) {
        case types.cardAddNew:
            return{
                ...state, 
                //llama al estado inicial
                card: [action.payload, ...state.card]
                //recibe informacion y la guarda en el estado de la tarjeta
            }
            case types.cardLoad:
                return{
                    ...state,
                    card: [...action.payload]
                }
            case types.cardActive:
                return{
                    ...state,
                    active:{
                        ...action.payload
                    }
                }
                case types.cardListar:
                    return {
                        state,
                        card: [...action.payload]
                    }
                case types.cardListarBusqueda:
                    return {
                        ...state,
                        search: [...action.payload]
                    }
            case types.cardLogoutClean:
                return{
                    ...state,
                    active:{
                        title:"",
                        categoria:"",
                        description:"",
                        
                    }
                }
        default:
            return state;
    }
}