import { Container, Box, Typography, Button, Grid, Divider, Card, CardContent, CardMedia } from '@mui/material';
import introImg from '../../assets/images-removebg-preview.png'; // Путь к изображению для введения
import goalsImg from '../../assets/images-removebg-preview.png'; // Путь к изображению для целей и задач
import programImg from '../../assets/images-removebg-preview.png'; // Путь к изображению для программы курса
import benefitsImg from '../../assets/images-removebg-preview.png'; // Путь к изображению для преимуществ
import reviewsImg from '../../assets/images-removebg-preview.png'; // Путь к изображению для отзывов и контактов
import { keyframes } from '@emotion/react';

const cardHover = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
  }
  100% {
    transform: scale(1.03);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const Iakademy = () => {
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      {/* Введение в курс */}
      <Card
        sx={{
          mb: 6,
          borderRadius: 2,
          boxShadow: 6,
          overflow: 'hidden',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            animation: `${cardHover} 0.5s forwards`,
          },
        }}
      >
        <CardMedia
          component="img"
          height="300"
          image={introImg}
          alt="Введение в курс"
          sx={{ objectFit: 'cover' }}
        />
        <CardContent sx={{ backgroundColor: '#f9f9f9' }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
            Курс жөнүндө кириш
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: '#555' }}>
            Кытай менен бизнес жүргүзүүнүн негиздерин үйрөнүңүз! Бул курс сизге кытай рынокторунда ийгиликтүү бизнес жүргүзүүгө жардам берет. Биз кытай менен бизнес жүргүзүүнүн негизги аспектилерин, маданий айырмачылыктарды, бизнес практикаларын жана кытайлык өнөктөштөр жана кардарлар менен эффективдүү иштөө үчүн стратегияларды талкуулайбыз.
          </Typography>
        </CardContent>
      </Card>

      {/* Цели и задачи курса */}
      <Card sx={{ mb: 6, borderRadius: 2, boxShadow: 6, overflow: 'hidden' }}>
        <CardMedia
          component="img"
          height="300"
          image={goalsImg}
          alt="Цели и задачи курса"
          sx={{ objectFit: 'cover' }}
        />
        <CardContent sx={{ backgroundColor: '#f9f9f9' }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
            Курстун максаттары жана милдеттери
          </Typography>
          <Divider sx={{ mb: 2, borderColor: '#ddd' }} />
          <Typography variant="body1" paragraph sx={{ color: '#555' }}>
            Бул курс төмөнкү максаттарды көздөйт:
          </Typography>
          <Box sx={{ pl: 2, color: '#555' }}>
            <ul>
              <li><Typography variant="body1">Кытайда бизнес жүргүзүүнүн негизги аспектилерин үйрөнүңүз.</Typography></li>
              <li><Typography variant="body1">Маданий айырмачылыктарды түшүнүү жана алар бизнес процесстерине кантип таасир этээрин түшүнүү.</Typography></li>
              <li><Typography variant="body1">Кытайлык компаниялар менен сүйлөшүүлөр жана өнөктөштүктөрдү өнүктүрүү жөндөмдөрүн жакшыртуу.</Typography></li>
              <li><Typography variant="body1">Кытай рынокко ийгиликтүү кирүү үчүн стратегияларды үйрөнүү.</Typography></li>
            </ul>
          </Box>
        </CardContent>
      </Card>

      {/* Программа курса */}
      <Card sx={{ mb: 6, borderRadius: 2, boxShadow: 6, overflow: 'hidden' }}>
        <CardMedia
          component="img"
          height="300"
          image={programImg}
          alt="Программа курса"
          sx={{ objectFit: 'cover' }}
        />
        <CardContent sx={{ backgroundColor: '#f9f9f9' }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
            Курстун программасы
          </Typography>
          <Divider sx={{ mb: 2, borderColor: '#ddd' }} />
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                Модуль 1: Кытайда бизнес жүргүзүүнүн негиздери
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: '#555' }}>
                Бул модулда биз кытайда бизнес жүргүзүүнүн жалпы принциптерин, анын ичинде мыйзамдык жана экономикалык өзгөчөлүктөрдү карайбыз.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                Модуль 2: Маданий айырмачылыктар жана алардын таасири
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: '#555' }}>
                Кытайлык өнөктөштөр менен бизнес мамилелерине жана сүйлөшүүлөргө таасир этүүчү маданий айырмачылыктарды изилдеңиз.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                Модуль 3: Кытайда ийгиликтүү бизнес үчүн стратегиялар
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: '#555' }}>
                Кытай рынокто ийгиликтүү бизнес жүргүзүү үчүн стратегиялар жана мыкты практикаларды үйрөнүңүз.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                Модуль 4: Сүйлөшүүлөр жана өнөктөштүктөр
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: '#555' }}>
                Кытайда сүйлөшүүлөрдү жана өнөктөштүктөрдү түзүү боюнча эффективдүү техникаларды үйрөнүңүз.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Преимущества курса */}
      <Card sx={{ mb: 6, borderRadius: 2, boxShadow: 6, overflow: 'hidden' }}>
        <CardMedia
          component="img"
          height="300"
          image={benefitsImg}
          alt="Преимущества курса"
          sx={{ objectFit: 'cover' }}
        />
        <CardContent sx={{ backgroundColor: '#f9f9f9' }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
            Курстун артыкчылыктары
          </Typography>
          <Divider sx={{ mb: 2, borderColor: '#ddd' }} />
          <Typography variant="body1" paragraph sx={{ color: '#555' }}>
            Биздин курсунун катышуучулары төмөнкү артыкчылыктарды алышат:
          </Typography>
          <Box sx={{ pl: 2, color: '#555' }}>
            <ul>
              <li><Typography variant="body1">Кытайда бизнес жүргүзүү үчүн практикалык билим жана көндүмдөр.</Typography></li>
              <li><Typography variant="body1">Маданий өзгөчөлүктөрдү түшүнүү жана алардын бизнеске таасири.</Typography></li>
              <li><Typography variant="body1">Кытайлык компаниялар менен байланыштарды жана өнөктөштүктөрдү түзүү жөндөмү.</Typography></li>
              <li><Typography variant="body1">Кытай рынокто ийгиликтүү иштөө үчүн стратегиялар жана тактика.</Typography></li>
            </ul>
          </Box>
        </CardContent>
      </Card>

      {/* Отзывы и контакты */}
      <Card sx={{ mb: 6, borderRadius: 2, boxShadow: 6, overflow: 'hidden' }}>
        <CardMedia
          component="img"
          height="300"
          image={reviewsImg}
          alt="Отзывы и контакты"
          sx={{ objectFit: 'cover' }}
        />
        <CardContent sx={{ backgroundColor: '#f9f9f9' }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
            Отзывы и контакты
          </Typography>
          <Divider sx={{ mb: 2, borderColor: '#ddd' }} />
          <Typography variant="body1" paragraph sx={{ color: '#555' }}>
            В этом разделе вы можете ознакомиться с отзывами наших студентов и найти информацию о том, как с нами связаться для получения дополнительной информации или поддержки.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            href="https://wa.me/1234567890?text=Здравствуйте!%20Хотел%20бы%20получить%20дополнительную%20информацию%20о%20курсе."
            target="_blank"
            rel="noopener noreferrer"
          >
            Связаться с нами
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Iakademy;
