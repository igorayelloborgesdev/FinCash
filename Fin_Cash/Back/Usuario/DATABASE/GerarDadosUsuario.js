let matriz = [
    {
      "id": 1,
      "name": "Romário",
      "user": "romario",
      "pass": "rrrrr"
    },
    {
      "id": 2,
      "name": "Bebeto",
      "user": "bebeto",
      "pass": "bbbbb"
    },
    {
      "id": 3,
      "name": "Dunga",
      "user": "dunga",
      "pass": "ddddd"
    }
  ];

  var md5 = require('md5');


    const sqlite3 = require('sqlite3').verbose();

    let db = new sqlite3.Database('./Usuario.db', (err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log('Connected to the Usuario database.');
        }
    });
    
    db.run('CREATE TABLE usuario (id INTEGER PRIMARY KEY UNIQUE, name TEXT NOT NULL, user TEXT NOT NULL, pass TEXT NOT NULL, token TEXT)',function(err) {
        if (err) {
          return console.log(err.message);
        }
        else
        {
            for(var i = 0; i < matriz.length; i++)
            {
                var query = 'INSERT INTO usuario (id, name, user, pass, token) VALUES(' + matriz[i].id + ',"' + matriz[i].name + '","' + matriz[i].user + '","' + md5(matriz[i].pass) + '",null)';
                db.run(query,function(err) {
                    if (err) {
                    return console.log(err.message);
                    }        
                    console.log(`A row has been inserted with rowid ${this.lastID}`);
                });
                let sql = `SELECT * FROM usuario`;
                db.all(sql, [], (err, rows) => {
                    if (err) {
                    throw err;
                    }
                    rows.forEach((row) => {
                    console.log(row);
                    });
                });
            }
        }        
        console.log(`A row has been inserted with rowid ${this.lastID}`);
    });      
    
    db.run('CREATE TABLE usuarioPerfil (id_usuario INTEGER PRIMARY KEY UNIQUE, id_idioma INTEGER NOT NULL, id_perfil INTEGER NOT NULL)',function(err) {
        if (err) {
          return console.log(err.message);
        }
        else
        {
            for(var i = 0; i < matriz.length; i++)
            {
                var query = 'INSERT INTO usuarioPerfil (id_usuario, id_idioma, id_perfil ) VALUES(' + matriz[i].id + ',1, 1)';
                db.run(query,function(err) {
                    if (err) {
                    return console.log(err.message);
                    }        
                    console.log(`A row has been inserted with rowid ${this.lastID}`);
                });
                let sql = `SELECT * FROM usuarioPerfil`;
                db.all(sql, [], (err, rows) => {
                    if (err) {
                    throw err;
                    }
                    rows.forEach((row) => {
                    console.log(row);
                    });
                });
            }
        }        
        console.log(`A row has been inserted with rowid ${this.lastID}`);
    });

    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Close the database connection.');
    });
