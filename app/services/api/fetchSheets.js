import {days,error,Loading} from '../../modules/actions/days';
import {GET_TIMESHEET} from '../../services/api/api'

export function fetchSheets(data) {
    let formdata = new FormData();
    formdata.append('from',data.from)
    formdata.append('to',data.to)
    formdata.append('day',data.day)
    
    return (dispatch) =>  {
      dispatch(Loading());
      fetch('http://172.25.122.36/api/values/', {
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