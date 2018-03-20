var _ = {};

_.uniq = function (arr, isSort, iterate) {
    var temp = [];
    var seq = [];
    for(var i = 0, len = arr.length; i< len; i++){
        if(isSort){
            console.log(i);
            console.log(!i || arr[i] !== temp[i-1]);
            if(!i || arr[i] !== temp[temp.length-1]){
                temp.push(arr[i]);
            }
            continue;
        }
        if(!_.contain(temp, arr[i])){
            temp.push(arr[i]);
        }
    }
    return temp;
}

_.contain = function (obj, item) {
    console.log(obj, item);
    return obj.indexOf(item) > -1 ? true : false;
}


var a = _.uniq([1,3,3,3,4,4], true);
console.log(a);