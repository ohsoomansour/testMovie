import { useEffect } from "react";
import {useParams} from "react-router-dom";

/*#7.6 Parameters 
  [App.js] -> <Route path="/movie/:id" element={<Detail />} /> 에서 ★변수 :id를 객체로 받아옴 
 1.사용법: const {id} = useParams(); > console.log(x) ▶ Object {id: '37384' }
 2. https://yts.mx/api/v2/movie_details.json?movie_id=${id}   ★
   */
function Detail(){
  const { id } = useParams();
  const getMovie = async() => {
    const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
      console.log(json);
  }
  useEffect(() => {
    getMovie();
  }, [])
  
  return (
  <div>
    <h1>Detail</h1>
    <div>{id}</div> 
  </div>  
  )
}

export default Detail; 