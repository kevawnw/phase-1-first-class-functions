function receivesAFunction(spy) {
    return spy();
}
spy(function() {return "I think I got it"})

function returnsANamedFunction() {
    return function whatever() {
        return "A string"
    }
}

function returnsAnAnonymousFunction() {
    return () => {
        return "whatever"
    }
}


