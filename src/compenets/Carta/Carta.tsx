import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface ICarta {
    img: string,
    txt: string,
    title: string,
}

export const Carta: React.FC<ICarta> = ({img,txt,title}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {`../public/${img}.png`}
          alt={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {txt}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}