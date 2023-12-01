// import React, { useContext } from "react";
// import { Newcontext } from "../App";
// import "../styles/Details.css";
// import { useParams } from "react-router-dom";
// import { imageUrl } from "./Api";

// function LatestDetails() {
//   const { latest, setLatest } = useContext(Newcontext);
//   const { id } = useParams();
//   const userId = parseInt(id);

//   let currentData1 = latest.find((item) => item.id === userId);
//   return (
//     <div>
//       <div className="detail-body">
//         <div className="bg-img">
//           <img src={`${imageUrl}${currentData1.backdrop_path}`} alt="" />
//         </div>

//         <div className="movie-details-body">
//           <div className="img-section">
//             <img src={`${imageUrl}${currentData1.poster_path}`} alt="" />
//           </div>
//           <div className="content-section">
//             <h1>{currentData1.original_name}</h1>
//             <p className="small-desc">
//               Language: {currentData1.original_language}
//             </p>
//             <p className="rating">
//               {currentData1.vote_average} || {currentData1.vote_count} Votes
//             </p>
//             <p>popularity: {currentData1.popularity}</p>
//             <p>Release date: {currentData1.release_date} </p>
//             <h2>Overview</h2>
//             <p>{currentData1.overview}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LatestDetails;
