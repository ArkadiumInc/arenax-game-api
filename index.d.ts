interface IAction {
    type: string
    payload: any
}

interface IData {
    type: string
}

interface IObservable {
    next: (action: IAction) => null
    subscribe: (subscriber: (data: IData) => null) => null
}

interface ArenaXApiInstance {
    dispatch: (action: IAction) => null
    addAction: (type: string, action: IAction) => null
    removeAction: (type: string, action: IAction) => null
}

class ArenaXApi {
    static init: (observable, options) => ArenaXApiInstance
    static getInstance: () => ArenaXApiInstance
}

export default ArenaXApi