const validator = (function() {
    const isEmpty = (obj, rules) => {
        Object.keys(rules).map(key => {
            if(obj.hasOwnProperty(key)) {

            }
        })
    }
})();


const obj = {
    name: 'shiva',
    username: 'shivapandey',
    password: 'pass'
}

const rules = {
    name: {
        required: true,
    }
}