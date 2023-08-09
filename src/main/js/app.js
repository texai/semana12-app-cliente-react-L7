const React = require('react');
const ReactDOM = require('react-dom');
const { createBrowserRouter, RouterProvider } = require('react-router-dom');

const PageHome = require('./pages/home');
const PageNuevoMusico = require('./pages/nuevo-musico');
const PageEditarMusico = require('./pages/editar-musico');


const router = createBrowserRouter([
	{ path: '/', element: <PageHome /> },
	{ path: '/nuevo-musico', element: <PageNuevoMusico /> },
	{ path: '/editar-musico/:id', element: <PageEditarMusico /> },
]);


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react')
)