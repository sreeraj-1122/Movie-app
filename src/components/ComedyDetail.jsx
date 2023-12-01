// import React, { useContext } from "react";
// import { Newcontext } from "../App";
// import "../styles/Details.css";
// import { useParams } from "react-router-dom";
// import { imageUrl } from "./Api";

// function ComedyDetail() {
//   const { popular, setPopular, latest, setLatest, comedy, setComedy } =
//     useContext(Newcontext);
//   const { id } = useParams();
//   const userId = parseInt(id);

//   let currentData1 = comedy.find((item) => item.id === userId);
//   console.log(currentData1);

//   return (
//     <div className="detail-body">
//       <div className="bg-img">
//         <img src={`${imageUrl}${currentData1.backdrop_path}`} alt="" />
//       </div>

//       <div className="movie-details-body">
//         <div className="img-section">
//           <img src={`${imageUrl}${currentData1.poster_path}`} alt="" />
//         </div>
//         <div className="content-section">
//           <h1>{currentData1.original_name}</h1>
//           <p className="small-desc">
//             Language: {currentData1.original_language}
//           </p>
//           <p className="rating">
//             {currentData1.vote_average} || {currentData1.vote_count} Votes
//           </p>
//           <p>popularity: {currentData1.popularity}</p>
//           <p>Release date: {currentData1.first_air_date} NA</p>
//           <h2>Overview</h2>
//           <p>{currentData1.overview}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ComedyDetail;
