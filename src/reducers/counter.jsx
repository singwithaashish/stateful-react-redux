const counter = (state = 0, action) => {
    switch (action.type) {
        case "add":
            return state + 1;
            

        case "sub":
            return state - action.byWhat;
    
        default:
            return state;
            
    }
}


export default counter