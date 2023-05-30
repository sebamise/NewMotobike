import { useParams } from 'react-router-dom';
import { articles } from '../Components/Article';

export function Articulo() {
  const { id } = useParams();
  const article = articles.find((article) => article.id === id.toString());

  if (!article) {
    return <div>El artículo no existe.</div>;
  }

  const { title, date, content,img } = article;

  return (
    <div className="container mb-5">
      <h1>{title}</h1>
      <p>Fecha de publicación: {date}</p>
      <div className="row">
        <div className="col-md-4">
          <img
            src={img}
            alt="Imagen del artículo"
            className="img-fluid"
          />
        </div>
        <div className="col-md-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
            dapibus lacus, sit amet venenatis justo. Nunc cursus tempor dapibus.
            Duis pharetra ante sit amet erat fermentum, sed blandit velit
            finibus.
          </p>
          <p>
            Mauris vel lobortis urna. Sed consequat aliquam nunc sed ultrices.
            Integer aliquam semper justo a lacinia. Vivamus in aliquam lectus.
            Sed auctor orci ligula, nec lacinia neque vestibulum nec. Mauris
            eleifend scelerisque diam at fermentum.
          </p>
        </div>
      </div>
    </div>
  );
}
