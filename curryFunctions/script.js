function add(num){
    if(!num){
        return 0;
    }
    let sum=num;
    function addh(num){
        if(!num){
            return sum;
        }
        sum+=num;
        return addh;
    }
    return addh;
}

