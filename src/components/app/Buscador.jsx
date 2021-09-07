import React from 'react'


import { useForm } from '../../hooks/useForm';
import { listaSearch } from '../../actions/cardAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { MovieSearch } from './MoviesSearch';
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const Buscador = () => {

  //const [searchMovie, setSearchMovie] = useState([])
  const dispatch = useDispatch();

  const { search } = useSelector(store => store.card);
  console.log(search);

  const [formValues, handleInputChange,reset] = useForm({
      searchText: ''
  });
  const { searchText } = formValues;

  const handleSearch = (e) => {
      e.preventDefault();
      dispatch(listaSearch(searchText));
      
  }


    return (
  <div>
        <form className="d-flex buscador" onSubmit={handleSearch} >
          <input
            className="form-control me-2"
            type="text"
            placeholder="Busca tu pelicula favorita"
           
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}

          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
          
        </form>
        <div>
           {search.map((card) => {
          return (
          <MovieSearch key={card.title} {...card} />)
      }
        
      )}<Card.Body>
      <Link to="/movie"><Button variant="secondary" className
        ="boton" style={{textAlign:"center"}} onclick={()=>reset()}>Regresar</Button></Link></Card.Body>
          </div>
        </div>
    )
}

export default Buscador
