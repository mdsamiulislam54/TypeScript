 // custom type for number
 type User = {
    userName: string,
    userId: number,
 }

 const userObj: User  = {userName: 'MD Samiul Islam', userId: 12};
console.log(userObj)

type RequestType = "GET"| "POST" ;

function makeRequest(requestType: RequestType) {
    console.log(`Making a ${requestType} request`);
}

makeRequest("POST");
 