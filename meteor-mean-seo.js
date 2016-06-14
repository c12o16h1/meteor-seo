import MeanSeo from 'meteor-mean-seo';

const MEANSEOWrapper = MeanSeo({
    cacheClient: 'disk', // Can be 'disk' or 'redis'
    redisURL: 'redis://:password@hostname:port', // If using redis, optionally specify server credentials
    cacheDuration: 2 * 60 * 60 * 24 * 1000, // In milliseconds for disk cache
});

//WebApp.connectHandlers.use('*', function(req, res, next){
//    MEANSEOWrapper(req, res, next);
//});
WebApp.connectHandlers.use(MEANSEOWrapper);

export const name = 'MeteorSEO';
