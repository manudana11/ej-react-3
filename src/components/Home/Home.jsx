import React from 'react'
import './Home.css';

function Home() {
    const dishes = [
        { id: 1, name: 'Pato a la Rojo Azul', description: 'Un plato clásico con una ejecución innovadora, combinando sabores picantes y dulces.', price: 10 },
        { id: 2, name: 'Soufflé de Transformación', description: 'Un soufflé que cambia de color y sabor al interactuar con la salsa que lo acompaña.', price: 20 },
        { id: 3, name: 'Pulpo a la Galaxia', description: 'Tentáculos de pulpo asados con una salsa secreta inspirada en las estrellas.', price: 15 },
        { id: 4, name: 'Dorado del Desierto', description: 'Un plato exótico que captura la esencia de las dunas y los oasis del desierto.', price: 18 },
        { id: 5, name: 'Curry del Despertar', description: 'Un curry aromático que despierta los sentidos con sus especias y sabores intensos.', price: 22 },
        { id: 6, name: 'Salmón al Asalto', description: 'Filete de salmón marinado con una salsa explosiva que desafía los paladares más atrevidos.', price: 12 },
        { id: 7, name: 'Arroz de la Revolución', description: 'Un plato humilde pero revolucionario que celebra la tradición y la innovación culinaria.', price: 25 },
        { id: 8, name: 'Ramen del Destino', description: 'Un bol de ramen que te lleva en un viaje gastronómico por los rincones más recónditos de Japón.', price: 17 },
        { id: 9, name: 'Pizza de la Victoria', description: 'Una pizza que conquista todos los corazones con sus ingredientes frescos y su masa crujiente.', price: 19 },
        { id: 10, name: 'Tarta de la Amistad', description: 'Una tarta dulce que celebra la amistad y los lazos que se forman en la cocina.', price: 21 },
        { id: 11, name: 'Estofado del Desafío', description: 'Un estofado que desafía los límites de lo posible con su combinación única de ingredientes.', price: 14 },
        { id: 12, name: 'Sushi del Torneo', description: 'Sushi fresco y elegante que compite en el torneo de sabor y textura.', price: 16 },
        { id: 13, name: 'Postre de la Victoria', description: 'Un postre elaborado con ingredientes de alta calidad que celebra la victoria en la cocina.', price: 23 },
        { id: 14, name: 'Bocadillo del Concurso', description: 'Un bocadillo que compite en el concurso de sabor y originalidad con sus sabores audaces.', price: 24 },
        { id: 15, name: 'Crepes de la Pasión', description: 'Crepes delicados rellenos de una compota de frutas exóticas y una pizca de pasión.', price: 13 },
        { id: 16, name: 'Pastel del Aprendizaje', description: 'Un pastel suave y esponjoso que enseña lecciones valiosas sobre la importancia del equilibrio en la cocina.', price: 27 },
        { id: 17, name: 'Batido de la Creatividad', description: 'Un batido refrescante que despierta la creatividad con sus combinaciones inesperadas de ingredientes.', price: 11 },
        { id: 18, name: 'Cordero del Desafío', description: 'Una preparación de cordero que desafía los límites de la imaginación con su innovación culinaria.', price: 29 },
        { id: 19, name: 'Helado de la Inspiración', description: 'Un helado cremoso que inspira sueños y despierta la creatividad con cada bocado.', price: 30 },
        { id: 20, name: 'Pasta de la Pasión', description: 'Una pasta italiana que enciende la pasión con su salsa picante y sus sabores intensos.', price: 28 },
      ];
    const carta = dishes.map(platillo => {
        return <div className='carta'>
        <p>{platillo.name}</p>
        <p>{platillo.description}</p>
        <p>{platillo.price}</p>
    </div>
    })
  return (
    <div>
        {carta}
    </div>
  )
}

export default Home