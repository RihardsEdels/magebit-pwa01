module.exports = targets => {
    targets.of('@magento/venia-ui').routes.tap(routes => {
        routes.push({
            name: 'Welcome',
            pattern: '/Welcome/:who?',
            path: require.resolve('../components/Welcome/Welcome.js')
        });
        return routes;
    });
};
