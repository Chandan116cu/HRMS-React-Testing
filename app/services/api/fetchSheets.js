import {days,error,Loading} from '../../modules/actions/days';
import {GET_TIMESHEET} from '../../services/api/api'
import {BASE_URL_IDENTITY} from '../../config'
import {GET_SHEET_ROUTE} from '../../constants'

export function fetchSheets(data) {
    let formdata = new FormData();
    formdata.append('from',data.from)
    formdata.append('to',data.to)
    formdata.append('day',data.day)
    
    return (dispatch) =>  {
      dispatch(Loading());
      fetch(BASE_URL_IDENTITY+GET_SHEET_ROUTE, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
    'Content-Type': 'application/json',
        'cache': "no-cache",
        type: 'application/json',
        'body': formdata
      },
    })
    .then((response)=>{
      if(response.status>=200&& response.status<300){
        return response.json();
      }else{
      return {'error':'400'};
      }
    }).then(async function(response){
      dispatch(days(response));
  })
    .catch(error => { console.log('request failed', error); });
    }
    
     
    
}



export default fetchSheets;