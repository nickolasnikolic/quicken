

blindApp
    .filter('trust', ['$sce',function($sce) {
        return function(value, type) {
            return $sce.trustAs(type || 'html', value);
        }
    }]);

blindApp
    .filter('trustUrl', ['$sce',function($sce) {
        return function(url) {
            return $sce.trustAsResourceUrl(url);
        };
    }]);

blindApp
    .filter('decodeUrl', [function() {
        return function(url) {
            return decodeURIComponent(url);
        };
    }]);

blindApp
    .filter('momentTimeAgo', function($sce) {
        return function(value, type) {
            return moment(value).fromNow();
        }
    });