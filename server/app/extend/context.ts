module.exports = {
    json(data) {
        this.body = {
            code: 200,
            data,
        };
    },
    error(code = 500, message) {
        this.body = {
            code,
            message,
        };
    },
};
