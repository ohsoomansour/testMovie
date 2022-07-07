
// <a href="/movie"> {title} <a> 는 링크로 이동하지만, 새로고침이 발생함 
// ★<Link to="/">  </Link> "새로고침 없이 링크로 이동 "
// <Link to={`/movie/${id}`}>{title}</Link> "링크로 들어가면 Detail컴포넌트로 넘어감"
import {Link} from "react-router-dom";
function Movie({id, title, coverImg, summary, genres  }) {
  return (
    <div>
      <h2>
        <Link to={`movie/${id}`}>{title}</Link>  
      </h2>    
      <img src={coverImg} alt={title}/>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li>{g}</li>
        ))}
      </ul>  
    </div>
);
}
export default Movie;