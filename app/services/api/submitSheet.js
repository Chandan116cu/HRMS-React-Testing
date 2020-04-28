import {Loading,success,error} from '../../modules/actions/submitSheets';

export  function SubmitSheets(data) {
  

 
    // let formdata = new FormData();
    // formdata.append('from',data.customer)
    // formdata.append('to',data.project)
    // formdata.append('day',data.hours)
    // formdata.append('day',data.task)
    // formdata.append('day',data.company)
    return  (dispatch) =>  {

      dispatch(Loading()) 
    
      // setTimeout(()=>{
        dispatch(success(data));
      // },5000)
        

 
      // console.log("error")
      // dispatch(success(data));
  //     fetch('http://172.25.122.36/api/values/', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //   'Content-Type': 'application/json',
  //       'cache': "no-cache",
  //       type: 'application/json',
  //       // 'mode': "cors",
  //       // 'body': formdata
  //     },
  //     body: {
  //       data : formdata
  //     }
  //   })
  //   .then((response)=>{
    
     
  //     if(response.status>=200&& response.status<300){
  //       return response.json();
  //     }else{
  //       dispatch(error());
  //     return {'error':'400'};
  //     }
      
  //   }).then(async function(response){
  //     // console.log(response)



  //     dispatch(success(response));
  //   //   if (response.status >= 200 && response.status < 300) {
         
  //   //     let res = (response);
  //   //     console.log(res);
      
      
  //   // } else {
    
  //   //   console.log("error in response not 200")
  //   // }
  // })
  //   .catch(error => { console.log('request failed', error); });
    }
}



export default SubmitSheets;