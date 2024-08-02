import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
function Course({image,title,description}) {
    return ( 
        <div>
              <img src={image}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
     );
}

export default Course;
