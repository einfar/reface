var store = Redux.createStore(function (state, action) {
    state = state || {};

    if (action.type === 'QQ') {
        state.QQ = 'WW';
    }

    if (action.type === 'WW') {
        state.WW = 'WW';
        delete state.WW;
    }

    return state;///reducer
}, save || {}, Redux.applyMiddleware(function(getState, dispatch) {
    return function (next) {
        return function (action) {
            var state = getState();

            //if (action.type !== 'WW') {
            //next(action);
            //return;
            //}

            console.log('send state.a');
            $.ajax('POST', {data: state.a});
            action.bb = 'BBBBBB';
            action.type = 'TT';
            var _new_action = {
                type: 'Uhoo1'
            };
            dispatch({type: 'qweqwe'});
            next(_new_action);
        };
    };
}) );