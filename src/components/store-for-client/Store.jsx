import { Box, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    id: 1,
    name: 'Платье красное',
    price: '3000 KGS',
    description: 'Красивое красное платье для любого случая.',
    images: [
      'https://ae01.alicdn.com/kf/S0aa98187aaf84e9194df2f1d8ca8adfbq.jpg',
      'https://main-cdn.sbermegamarket.ru/big1/hlr-system/-17/083/738/741/212/193/0/100046244793b0.jpg',
      'https://i.pinimg.com/564x/8d/06/42/8d0642f3358d0b6301e69e57a83d0e96.jpg',
    ],
  },
  {
    id: 2,
    name: 'Белая футболка',
    price: '1500 KGS',
    description: 'Удобная белая футболка из качественного хлопка.',
    images: [
      'https://ae04.alicdn.com/kf/S9f4beb0edfdf49f7a960804d244f2f405.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlvTxvnen_bC_8lK2UVqGHQskSqkynZFRjgQ&s',
    ],
  },
  {
    id: 3,
    name: 'Джинсы',
    price: '2500 KGS',
    description: 'Классические синие джинсы, которые идеально сидят.',
    images: [
      'https://ae01.alicdn.com/kf/A7e6768090fe94cb3b40f5529991ee62fQ.png',
      'https://ae04.alicdn.com/kf/A42c680ef7e0742c3822a535c33fce1ebQ.png',
    ],
  },
  {
    id: 1,
    name: 'Платье красное',
    price: '3000 KGS',
    description: 'Красивое красное платье для любого случая.',
    images: [
      'https://ae01.alicdn.com/kf/S0aa98187aaf84e9194df2f1d8ca8adfbq.jpg',
      'https://main-cdn.sbermegamarket.ru/big1/hlr-system/-17/083/738/741/212/193/0/100046244793b0.jpg',
      'https://i.pinimg.com/564x/8d/06/42/8d0642f3358d0b6301e69e57a83d0e96.jpg',
    ],
  },
  {
    id: 2,
    name: 'Белая футболка',
    price: '1500 KGS',
    description: 'Удобная белая футболка из качественного хлопка.',
    images: [
      'https://ae04.alicdn.com/kf/S9f4beb0edfdf49f7a960804d244f2f405.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlvTxvnen_bC_8lK2UVqGHQskSqkynZFRjgQ&s',
    ],
  },
  {
    id: 3,
    name: 'Джинсы',
    price: '2500 KGS',
    description: 'Классические синие джинсы, которые идеально сидят.',
    images: [
      'https://ae01.alicdn.com/kf/A7e6768090fe94cb3b40f5529991ee62fQ.png',
      'https://ae04.alicdn.com/kf/A42c680ef7e0742c3822a535c33fce1ebQ.png',
    ],
  },
  {
    id: 1,
    name: 'Платье красное',
    price: '3000 KGS',
    description: 'Красивое красное платье для любого случая.',
    images: [
      'https://ae01.alicdn.com/kf/S0aa98187aaf84e9194df2f1d8ca8adfbq.jpg',
      'https://main-cdn.sbermegamarket.ru/big1/hlr-system/-17/083/738/741/212/193/0/100046244793b0.jpg',
      'https://i.pinimg.com/564x/8d/06/42/8d0642f3358d0b6301e69e57a83d0e96.jpg',
    ],
  },
  {
    id: 2,
    name: 'Белая футболка',
    price: '1500 KGS',
    description: 'Удобная белая футболка из качественного хлопка.',
    images: [
      'https://ae04.alicdn.com/kf/S9f4beb0edfdf49f7a960804d244f2f405.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlvTxvnen_bC_8lK2UVqGHQskSqkynZFRjgQ&s',
    ],
  },
  {
    id: 3,
    name: 'Джинсы',
    price: '2500 KGS',
    description: 'Классические синие джинсы, которые идеально сидят.',
    images: [
      'https://ae01.alicdn.com/kf/A7e6768090fe94cb3b40f5529991ee62fQ.png',
      'https://ae04.alicdn.com/kf/A42c680ef7e0742c3822a535c33fce1ebQ.png',
    ],
  },
  {
    id: 1,
    name: 'Платье красное',
    price: '3000 KGS',
    description: 'Красивое красное платье для любого случая.',
    images: [
      'https://ae01.alicdn.com/kf/S0aa98187aaf84e9194df2f1d8ca8adfbq.jpg',
      'https://main-cdn.sbermegamarket.ru/big1/hlr-system/-17/083/738/741/212/193/0/100046244793b0.jpg',
      'https://i.pinimg.com/564x/8d/06/42/8d0642f3358d0b6301e69e57a83d0e96.jpg',
    ],
  },
  {
    id: 2,
    name: 'Белая футболка',
    price: '1500 KGS',
    description: 'Удобная белая футболка из качественного хлопка.',
    images: [
      'https://ae04.alicdn.com/kf/S9f4beb0edfdf49f7a960804d244f2f405.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlvTxvnen_bC_8lK2UVqGHQskSqkynZFRjgQ&s',
    ],
  },
  {
    id: 3,
    name: 'Джинсы',
    price: '2500 KGS',
    description: 'Классические синие джинсы, которые идеально сидят.',
    images: [
      'https://ae01.alicdn.com/kf/A7e6768090fe94cb3b40f5529991ee62fQ.png',
      'https://ae04.alicdn.com/kf/A42c680ef7e0742c3822a535c33fce1ebQ.png',
    ],
  },
  {
    id: 1,
    name: 'Платье красное',
    price: '3000 KGS',
    description: 'Красивое красное платье для любого случая.',
    images: [
      'https://ae01.alicdn.com/kf/S0aa98187aaf84e9194df2f1d8ca8adfbq.jpg',
      'https://main-cdn.sbermegamarket.ru/big1/hlr-system/-17/083/738/741/212/193/0/100046244793b0.jpg',
      'https://i.pinimg.com/564x/8d/06/42/8d0642f3358d0b6301e69e57a83d0e96.jpg',
    ],
  },
  {
    id: 2,
    name: 'Белая футболка',
    price: '1500 KGS',
    description: 'Удобная белая футболка из качественного хлопка.',
    images: [
      'https://ae04.alicdn.com/kf/S9f4beb0edfdf49f7a960804d244f2f405.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlvTxvnen_bC_8lK2UVqGHQskSqkynZFRjgQ&s',
    ],
  },
  {
    id: 3,
    name: 'Джинсы',
    price: '2500 KGS',
    description: 'Классические синие джинсы, которые идеально сидят.',
    images: [
      'https://ae01.alicdn.com/kf/A7e6768090fe94cb3b40f5529991ee62fQ.png',
      'https://ae04.alicdn.com/kf/A42c680ef7e0742c3822a535c33fce1ebQ.png',
    ],
  },
  {
    id: 1,
    name: 'Платье красное',
    price: '3000 KGS',
    description: 'Красивое красное платье для любого случая.',
    images: [
      'https://ae01.alicdn.com/kf/S0aa98187aaf84e9194df2f1d8ca8adfbq.jpg',
      'https://main-cdn.sbermegamarket.ru/big1/hlr-system/-17/083/738/741/212/193/0/100046244793b0.jpg',
      'https://i.pinimg.com/564x/8d/06/42/8d0642f3358d0b6301e69e57a83d0e96.jpg',
    ],
  },
  {
    id: 2,
    name: 'Белая футболка',
    price: '1500 KGS',
    description: 'Удобная белая футболка из качественного хлопка.',
    images: [
      'https://ae04.alicdn.com/kf/S9f4beb0edfdf49f7a960804d244f2f405.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlvTxvnen_bC_8lK2UVqGHQskSqkynZFRjgQ&s',
    ],
  },
  {
    id: 3,
    name: 'Джинсы',
    price: '2500 KGS',
    description: 'Классические синие джинсы, которые идеально сидят.',
    images: [
      'https://ae01.alicdn.com/kf/A7e6768090fe94cb3b40f5529991ee62fQ.png',
      'https://ae04.alicdn.com/kf/A42c680ef7e0742c3822a535c33fce1ebQ.png',
    ],
  },
  {
    id: 1,
    name: 'Платье красное',
    price: '3000 KGS',
    description: 'Красивое красное платье для любого случая.',
    images: [
      'https://ae01.alicdn.com/kf/S0aa98187aaf84e9194df2f1d8ca8adfbq.jpg',
      'https://main-cdn.sbermegamarket.ru/big1/hlr-system/-17/083/738/741/212/193/0/100046244793b0.jpg',
      'https://i.pinimg.com/564x/8d/06/42/8d0642f3358d0b6301e69e57a83d0e96.jpg',
    ],
  },
  {
    id: 2,
    name: 'Белая футболка',
    price: '1500 KGS',
    description: 'Удобная белая футболка из качественного хлопка.',
    images: [
      'https://ae04.alicdn.com/kf/S9f4beb0edfdf49f7a960804d244f2f405.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlvTxvnen_bC_8lK2UVqGHQskSqkynZFRjgQ&s',
    ],
  },
  {
    id: 3,
    name: 'Джинсы',
    price: '2500 KGS',
    description: 'Классические синие джинсы, которые идеально сидят.',
    images: [
      'https://ae01.alicdn.com/kf/A7e6768090fe94cb3b40f5529991ee62fQ.png',
      'https://ae04.alicdn.com/kf/A42c680ef7e0742c3822a535c33fce1ebQ.png',
    ],
  },
  {
    id: 1,
    name: 'Платье красное',
    price: '3000 KGS',
    description: 'Красивое красное платье для любого случая.',
    images: [
      'https://ae01.alicdn.com/kf/S0aa98187aaf84e9194df2f1d8ca8adfbq.jpg',
      'https://main-cdn.sbermegamarket.ru/big1/hlr-system/-17/083/738/741/212/193/0/100046244793b0.jpg',
      'https://i.pinimg.com/564x/8d/06/42/8d0642f3358d0b6301e69e57a83d0e96.jpg',
    ],
  },
  {
    id: 2,
    name: 'Белая футболка',
    price: '1500 KGS',
    description: 'Удобная белая футболка из качественного хлопка.',
    images: [
      'https://ae04.alicdn.com/kf/S9f4beb0edfdf49f7a960804d244f2f405.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlvTxvnen_bC_8lK2UVqGHQskSqkynZFRjgQ&s',
    ],
  },
  {
    id: 3,
    name: 'Джинсы',
    price: '2500 KGS',
    description: 'Классические синие джинсы, которые идеально сидят.',
    images: [
      'https://ae01.alicdn.com/kf/A7e6768090fe94cb3b40f5529991ee62fQ.png',
      'https://ae04.alicdn.com/kf/A42c680ef7e0742c3822a535c33fce1ebQ.png',
    ],
  },
];

const Store = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const handleBuyClick = (productName) => {
    const phoneNumber = '996998083828'; 
    const message = `Здравствуйте! Я хочу купить товар: ${productName}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Женская одежда
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <Slider {...sliderSettings}>
                {product.images.map((image, index) => (
                  <img key={index} src={image} alt={`${product.name} ${index + 1}`} height="240" />
                ))}
              </Slider>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {product.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.price}
                </Typography>
                <Button
                  variant="contained"
                  sx={{ mt: 2, backgroundColor: '#1976d2', color: '#fff' }}
                  onClick={() => handleBuyClick(product.name)}
                >
                  Купить
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Store;
