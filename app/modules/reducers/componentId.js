import { COMPONENT_ID } from '../../constants';



inistialState = {
    id: null,
    fixId: null
    }

const reducer = (state = inistialState, action) => {
      switch(action.type){
          case COMPONENT_ID : 
                   
                    return {
                        ...state,
                        id: action.id,
                        fixId: action.fixId
                    };
    
          default : return state
      }
}

export default reducer;