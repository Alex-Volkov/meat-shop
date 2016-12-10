/**
 * Created by Aleksandr Volkov on 09/12/2016.
 */
const defaults =
	{
		es: {
			header: {
				menuItems: [
					{name: 'inicio', url: '#'},
					{name: 'servicios', url: '#'},
					{name: 'productos', url: '#'},
					{name: 'tiendas', url: '#'},
				],
				languages: [
					{name: 'es', active: true}, {name: 'en', active: false}
				]
			},
			footer: {
				text: 'Calle Bomba 16, 50010 Saratoga, Tfno 666 999 666, Fax 666 999 666, Email email (at) hola.com'
			},
			body: {
				primary: {
					header: 'Presentacion',
					text: 'En Cernicerias ACME ponemos a su disposicion las mejores carnes, embutidos y platos preparados, ' +
					'entre otras delicias gourmet. Si tienen un evento y quieren deleitar a sus invitados con unos productos sanos, frescos y sabrosos, contacten con nosotros'
				},
				secondary: [
					{
						header: 'Reparto a domicilio',
						text: 'Realicen su pedido hoy mismo y mañana lo tendrán listo en su domicilio'
					},
					{
						header: 'Corte tradicional',
						text: 'No tenemos bandejas preparadas. Nuestro norte es artesano y profesional'
					}

				],
				images: [
					{
						header: 'Calidad',
						text: 'Carne de calidad de los valles pirenaicos. Con las mejores garantias de sanidad y sabor',
					},
					{
						header: 'Servicio 24h',
						text: 'En nuestro transporte refigerado garantizamos que cumpliremos en 24h con nuestros compromisos',
					},
					{
						header: 'Restauracion',
						text: 'Servimos a los mejores restaurantes de Zaragoza. Si regentas un local de restauracion llamanos',
					},
					{
						header: 'Charcuteria',
						text: 'Los mejores ejemplares de jamon iberico y embutidos tradicionales. Especialistras en charcuteria',
					},
				],
				icons: [
					{icon: 'fa-facebook', link: '#'},
					{icon: 'fa-google-plus', link: '#'},
					{icon: 'fa-map-marker', link: '#'},
				]

			}
		},
		en: {
			header: {
				menuItems: [
					{name: 'start', url: '#'},
					{name: 'services', url: '#'},
					{name: 'products', url: '#'},
					{name: 'shops', url: '#'},
				],
				languages: [
					{name: 'es', active: false}, {name: 'en', active: true}
				]
			},
			body: {
				primary: {
					header: 'Presentation',
					text: 'In Cernicerias ACME we offer at your disposal the best meats, sausages and prepared dishes, among other gourmet delicacies. If you have an event and want to delight your guests with healthy, fresh and tasty products, contact us'
				},
				secondary: [
					{
						header: 'Delivery',
						text: 'Place your order today and tomorrow they will have it ready at your home'
					},
					{
						header: 'Traditional cut',
						text: 'We do not have prepared trays. Our north is a craftsman and professional'
					}

				],
			}
		}
	};
export {defaults};