const items = [];

const index = (req, res) => {
    res.render('index', {
        titulo: 'Bienvenido'
    });
}


const login = (req, res) => {
    res.render('login', {
        titulo: 'Login'
    });
}

const productos = (req, res, next) => {
    res.render('products', {
        titulo: 'Lista de productos',
        items: items
    })
}

const nuevoproducto = (req, res, next) => {
    const newItem = req.body.newItem;
    items.push({
        id: items.length + 1,
        name: newItem,
        mail: req.body.email
    });
    res.redirect('/products');
    console.log(items);
    next();
}

const game = (req, res) => {
    res.render('/snake', {
        titulo: 'Game'
    })};

module.exports = {
    index: index,
    login: login,
    productos: productos,
    nuevoproducto: nuevoproducto,
    game: game
};
