export const Apicall = () =>{
    return fetch(`https://cors-anywhere.herokuapp.com/https://breaking-bad-quotes.herokuapp.com/v1/quotes`,{
        method:"GET",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
        }
    }).then(response =>{
        return response.json();
    }).catch( error => console.log("error catched"))}
