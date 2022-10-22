import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import './home.css';

class Home extends React.Component {
    state = {
        isLoading: true,
        movies: [],
      };
    
      getMovies = async () => { // 비동기함수라고 지정함
        const { // 구조 분해 할당 movies.data.data.movies로 객체에 접근하는건 별로 좋지 않다
          data: {
            data:{movies},
           },
           } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating'); // API 호출해서 movies에 저장함
        // 데이터를 읽어오는데 시간이 걸리므로 async, await를 사용한다
        this.setState({movies, isLoading: false}) // movies: movies 앞에는 state, 뒤에는 구조 분해 할당으로 받은 영화 데이터가 있는 변수, 키와 대입할 변수의 이름이 같아서 축약할 수 있다
      }
    
      componentDidMount() {
        this.getMovies();
      }
    
      render() {
        const {isLoading, movies} =this.state;
        return (
          <section className='container'>
            {isLoading? (
              <div className='loader'>
                <span className="loader_text">'Loading'</span>
              </div>
            )
            : (
              <div className='movies'> {
                movies.map (movie => ( // movies는 배열로 받고, 배열을 map()함수로 원소 하나씩 movie로 전달함
                  <Movie // Movie component에 props 전달받아서 return
                  key={movie.id} // key props와 관련된 경고 메세지를 없애기 위해서?
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                  />
                ))}
              </div>
              )
            }
          </section>
        );
      }
        
    }

export default Home;