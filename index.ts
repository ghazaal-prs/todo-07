type UserType = {
    id : string;
    fullName? : string;
    age? : number;
    gender? : 'female' | 'male';
    phoneNumber? : number | string;
    maritalStatus? : boolean;
    job? : string;
    length? : number;
    weight? : number;
};

const userList : UserType[] = [
    {
        id : "dvfdfv4fv4f" ,
        fullName : "mammad rahai" ,
        age : 25 ,
        gender : 'male' ,
        phoneNumber : '09175556565' ,
        maritalStatus : false ,
        job : 'developer' ,
        length : 1.5 ,
        weight : 83 ,
    } ,  
    {
        id : '6f4g68z4fv',
        fullName : 'sara simai',
        age : 22 ,
        gender: "female" ,
        phoneNumber : '09179999797',
        maritalStatus : false ,
        job : 'designer',
        length : 1.68 ,
        weight : 65 ,
    } , 
]

// CRUD -> Creat , Read , Update , Delete

// Create
const creatUser = (user:UserType) : void => {
    userList.push(user)
} ;

// Update

const updateUser = (user : UserType) => {
    let userIndex : number = userList.findIndex((item) => item.id === user.id);
    userList[userIndex] = {...userList[userIndex] , ...user};
};
updateUser({id:"dvfdfv4fv4f" , age:30});
console.log(userList) 