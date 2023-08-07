const React = require('react');
const { Link } = require('react-router-dom');

const client = require('../client');
const {useState} = require('react');

function PageEditarMusico() {

    const [nombre, setNombre] = useState("");

    // getting id param from route
    const id = props.match.params.id;
    

    client({ method: 'GET', path: '/api/musicos/'+id }).done(response => {
        setNombre(response.nombre);
        alert(nombre);
    });


    const handleSubmit = (event) => {
        // event.preventDefault();
        // client({
        //     method: 'POST',
        //     path: '/api/musicos',
        //     entity: { nombre: nombre },
        //     headers: { 'Content-Type': 'application/json' }
        // }).done( () => window.location = "/");
    };

    return (
        <>
            <h1>Editar Músico</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
                <input type="submit" value="Nuevo Músico" />
            </form>
            <hr />
            <Link to="/">Volver</Link>
        </>
    );
}

module.exports = PageEditarMusico;