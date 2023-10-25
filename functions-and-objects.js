//
function getName(object) {
    return object.name
}
function getNames(obj) {
    return obj.firstname + ' ' + obj.lastname
}
function concatNames(obj ,  lastname) {
    return obj.firstname + ' ' + lastname
}
function correctName (obj) {
    if (obj.fathername === undefined) {
        return obj.firstname
    }
        return obj.firstname + ' ' + obj.lastname + ' ' + obj.fathername
}