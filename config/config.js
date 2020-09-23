var config = {
    server_port: 3000,
    session_param: {
        secret: 'ssduce key',
        resave: false,
        saveUninitialized: false
    },
    db_url: 'mongodb://localhost:27017/ssduce',
    db_schemas: [
        {file:'./schemas/member', collection:'members', schemaName:'MemberSchema', modelName:'MemberModel'}
    ],
    route_list: [
        {file:'./index_route', path:'/', method:'home', type: 'get'},

        {file:'./board_route', path:'/board', method:'list', type: 'get'},

        {file:'./worldcup_route', path:'/ideal_worldcup', method:'worldcup', type: 'get'}
    ]
}

module.exports = config;