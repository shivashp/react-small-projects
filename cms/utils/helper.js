
const transformError = (obj) => {
    let errors = [];
    if(typeof(obj) === 'object'){
        for (key in obj.errors) {
            let message =  obj.errors[key]['message'];
            errors.push(message);
        }
        return {errors};
    } else {
        return obj;
    }
}

module.exports = {
    transformError
}