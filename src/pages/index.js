// next
import Head from 'next/head';
import Image from 'next/image'
// @mui
import { Box, Container, Typography, Card, CardMedia, CardContent } from '@mui/material';
// layouts
import MainLayout from '../layouts/main';
// components
import ScrollProgress from '../components/scroll-progress';
// sections
import {
  HomeHero,
  HomeMinimal,
  HomeDarkMode,
  HomeLookingFor,
  HomeForDesigner,
  HomeColorPresets,
  HomePricingPlans,
  HomeAdvertisement,
  HomeCleanInterfaces,
  HomeHugePackElements,
} from '../sections/home';

import { CarouselAnimation } from '../sections/_examples/extra/carousel';
// import { Masonry } from '@mui/lab';

// ----------------------------------------------------------------------

HomePage.getLayout = (page) => <MainLayout> {page} </MainLayout>;

// ----------------------------------------------------------------------

const _carousels = [
  {
    id: 1,
    title: 'Bánh thiết kế',
    image: 'https://images.pexels.com/photos/4553118/pexels-photo-4553118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Là một sản phẩm riêng biệt, mang phong cách cá nhân trong từng chi tiết.',
  },
  {
    id: 2,
    title: 'Gift',
    image: 'https://images.pexels.com/photos/7302792/pexels-photo-7302792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Sự tinh tế trong quà tặng sáng tạo.',
  },
  {
    id: 3,
    title: 'Phụ kiện',
    image: 'https://images.pexels.com/photos/6101965/pexels-photo-6101965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Khi sắc màu và sự sáng tạo gặp gỡ trên đỉnh bánh.',
  },
];

export default function HomePage() {

  return (
    <>
      <Head>
        <title> Peony | Studio</title>
      </Head>

      <ScrollProgress />

      <Box sx={{ my: 10, ml: 3, mr: 3 }}>
        <CarouselAnimation data={_carousels}/>
      </Box>

      <Container
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >

        <Typography variant="h4" sx={{ mb: 5 }}>
          Bánh thiết kế
        </Typography>
        <Box
          gap={3}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
        >
          <Card sx={{ mb: 3 }}>
            <CardMedia
              sx={{ height: 230 }}
              image="https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=800"
              title="bánh kem"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bánh cưới
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Là sự kết hợp giữa sự tinh tế và trang trọng. Làm say đắm thị giác và điểm nhấn lãng mạn trong ngày trọng đại.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ mb: 3 }}>
            <CardMedia
              sx={{ height: 230 }}
              image="https://images.pexels.com/photos/1729808/pexels-photo-1729808.jpeg?auto=compress&cs=tinysrgb&w=800"
              title="bánh kem"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bánh sinh nhật
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Biểu tượng của vui nhộn và hạnh phúc, thiết kế sáng tạo và màu sắc tươi tắn.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ mb: 3 }}>
            <CardMedia
              sx={{ height: 230 }}
              image="https://images.pexels.com/photos/10311446/pexels-photo-10311446.jpeg?auto=compress&cs=tinysrgb&w=800"
              title="bánh kem"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bánh khai trương
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Vẻ ngoài lộng lẫy và trang trí sang trọng, là điểm nhấn tuyệt vời tại buổi lễ khai trương.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Typography variant="h4" sx={{ my: 5 }}>
          Gift
        </Typography>
        <Box
          gap={3}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
        >
          <Card sx={{ mb: 3 }}>
            <CardMedia
              sx={{ height: 230 }}
              image="https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=800"
              title="bánh kem"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bánh cưới
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Là sự kết hợp giữa sự tinh tế và trang trọng. Làm say đắm thị giác và điểm nhấn lãng mạn trong ngày trọng đại.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ mb: 3 }}>
            <CardMedia
              sx={{ height: 230 }}
              image="https://images.pexels.com/photos/1729808/pexels-photo-1729808.jpeg?auto=compress&cs=tinysrgb&w=800"
              title="bánh kem"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bánh sinh nhật
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Biểu tượng của vui nhộn và hạnh phúc, thiết kế sáng tạo và màu sắc tươi tắn.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ mb: 3 }}>
            <CardMedia
              sx={{ height: 230 }}
              image="https://images.pexels.com/photos/10311446/pexels-photo-10311446.jpeg?auto=compress&cs=tinysrgb&w=800"
              title="bánh kem"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bánh khai trương
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Vẻ ngoài lộng lẫy và trang trí sang trọng, là điểm nhấn tuyệt vời tại buổi lễ khai trương.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Typography variant="h4" sx={{ my: 5 }}>
          Phụ kiện
        </Typography>
        <Box
          gap={3}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
        >
          <Card sx={{ mb: 3 }}>
            <CardMedia
              sx={{ height: 230 }}
              image="https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=800"
              title="bánh kem"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bánh cưới
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Là sự kết hợp giữa sự tinh tế và trang trọng. Làm say đắm thị giác và điểm nhấn lãng mạn trong ngày trọng đại.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ mb: 3 }}>
            <CardMedia
              sx={{ height: 230 }}
              image="https://images.pexels.com/photos/1729808/pexels-photo-1729808.jpeg?auto=compress&cs=tinysrgb&w=800"
              title="bánh kem"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bánh sinh nhật
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Biểu tượng của vui nhộn và hạnh phúc, thiết kế sáng tạo và màu sắc tươi tắn.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ mb: 3 }}>
            <CardMedia
              sx={{ height: 230 }}
              image="https://images.pexels.com/photos/10311446/pexels-photo-10311446.jpeg?auto=compress&cs=tinysrgb&w=800"
              title="bánh kem"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bánh khai trương
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Vẻ ngoài lộng lẫy và trang trí sang trọng, là điểm nhấn tuyệt vời tại buổi lễ khai trương.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
}
