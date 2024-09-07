import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: '#1976d2', // Фоновый цвет футера
        color: '#fff', // Белый цвет текста
        textAlign: 'center',
      }}
    >
      <Typography variant="body1">
        © {new Date().getFullYear()} Ваша компания. Все права защищены.
      </Typography>
      <Box sx={{ mt: 1 }}>
        <Link href="/" underline="hover" sx={{ mx: 2, color: '#fff' }}>
          Главная
        </Link>
        <Link href="/about" underline="hover" sx={{ mx: 2, color: '#fff' }}>
          О нас
        </Link>
        <Link href="/contact" underline="hover" sx={{ mx: 2, color: '#fff' }}>
          Контакты
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
