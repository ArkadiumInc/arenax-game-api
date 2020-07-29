var ArenaXApi = (function () {

    /**
     *
     * @param {object} observable
     * @param {object} options
     * @param {string} options.assetOriginUrl
     * @param {string} options.locale
     * @param {Array}  options.eventList
     * @param {string} options.configUrl
     * @constructor
     */
    function ArenaXApi(observable, options) {
        var _this = this;

        _this.observable = observable;
        _this.actions = [];

        _this.assetOriginUrl = options.assetOriginUrl;
        _this.locale = options.locale;
        _this.events = options.eventList;
        _this.configUrl = options.configUrl;
        _this.options = options;

        _this.observable.subscribe(function (data) {
            var storedAction = _this.actions.find(function (action) {
                return action.type === data.type;
            });
            if (typeof storedAction !== 'undefined' && typeof storedAction.action === 'function') {
                storedAction.action();
            }
        });
    }

    ArenaXApi.prototype.dispatch = function (action) {
        this.observable.next(action);
    };

    ArenaXApi.prototype.addAction = function (type, action) {
        this.actions.push({type: type, action: action});
    };

    ArenaXApi.prototype.removeAction = function (type, action) {
        this.actions = this.actions.filter(function (a) {
            return a.type !== type;
        });
    };

    var instance;

    return {
        init: function (observable, options) {
            if (instance == null) {
                instance = new ArenaXApi(observable, options);
                instance.constructor = null;
            }
            return instance;
        },
        getInstance: function () {
            return instance;
        }
    };
})();

module.exports = ArenaXApi;