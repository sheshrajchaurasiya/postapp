import React , {useState,useEffect} from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

const DetailsPage = () => {
  const { post } = useSelector((state) => state.detailsCard);
  const [result,setResult] = useState("");
  const navigate=useNavigate();
  

  const [isClicked, setIsClicked] = useState(false);
  const [isClicked1, setIsClicked1] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };
  const handleClick1 = () => {
    setIsClicked1(true);
  };

  useEffect(()=>{
    setResult(post.body)
    handleClick();
  },[]);
  if (!post) return <h1>Loading...</h1>

  return (
    <div className='details-section'>
      <div className='details-icon-pack'>
        <ArrowBackRoundedIcon onClick={()=>{navigate('/')}} className='arrow-icon' />
        <h3>Post number {post.id}</h3>

      </div>

      <div className="details-items" >
        <div className='image-container'>
                <img  id='imgs'  src={`https://picsum.photos/200?random=${post.id}`} alt={post.title} />
                
        </div>
        <div className='result-section'>
        <div className='details-column'>
              <div 
              onClick={() => {
                setResult(post.body)
                handleClick();
                setIsClicked1(false);
                }} className={`details-btn ${isClicked ? 'clicked' : ''}`} >Details</div>
              <div 
               onClick={() => {
               setIsClicked(false);
                handleClick1();
                 setResult("Post was posted by "+post.userId)}} className={`user-info-btn ${isClicked1 ? 'clicked' : ''}`}>User Info</div>
        </div>
        <div className='result'>{result}</div>
        </div>
      </div>
    </div>

  )
}

export default DetailsPage