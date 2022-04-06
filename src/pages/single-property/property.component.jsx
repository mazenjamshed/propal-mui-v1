import { Box, Typography, Container, Paper } from '@mui/material';
import PropertyCollage from '../../components/collage/property-collage.component';

const Property = () => {
  return (
    <Paper sx={{ bgcolor: '#a8dadc' }}>
      <Container sx={{ padding: ' 4rem 7rem', color: '#010101' }}>
        <Box
          sx={{
            display: 'flex',
            gap: '.2rem',
            // margin: '4rem 0 2rem 0',
            flexDirection: 'column',
          }}
        >
          <Typography
            variant='h3'
            component='h1'
            sx={{ letterSpacing: '.3rem', fontWeight: 300, fontSize: '2.6rem' }}
          >
            [Property Name will be here bruh]
            <br />
          </Typography>

          <Typography
            variant='h3'
            component='h1'
            sx={{ color: '#1d3557', fontWeight: 500, fontSize: '2.1rem' }}
          >
            [ 2.5 Crore]
          </Typography>
          <Typography sx={{ marginTop: '1.5rem' }}>
            Location: [Lahore]
          </Typography>
        </Box>
        <Box sx={{ width: '100' }}>
          <PropertyCollage />
        </Box>

        <Typography>Posted by: [USER]</Typography>
        <Typography variant='h3' component='h1'>
          About this Property:
        </Typography>
        <Typography variant='p' component='p'>
          [ Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
          inventore expedita optio a quisquam minima ratione porro obcaecati,
          accusantium error magni facere in sunt quis ipsum voluptatem,
          recusandae nostrum. Dolorum? Earum maxime quasi quos asperiores magnam
          repellendus impedit sit eos libero perferendis iusto, explicabo
          dolores dolore pariatur doloremque laborum omnis alias id natus illo
          consequuntur officia exercitationem dolorum! Hic, consequuntur.
          Officiis delectus quisquam aut corporis minus quas ducimus, quis error
          veniam non architecto labore mollitia optio quod illo ab cum excepturi
          voluptate consequatur repudiandae? Perferendis animi inventore velit
          quidem praesentium. Consectetur possimus nisi iste! Ut, voluptatum
          quibusdam fugiat vitae quasi doloremque omnis nobis dolorem
          laudantium, atque tenetur aperiam! Nulla commodi incidunt ipsum
          pariatur dolorum, fuga dolore distinctio minus delectus officia?
          Cumque mollitia dolorum consequuntur consectetur voluptatum placeat
          maiores eligendi! Fuga tempora, ut debitis reiciendis natus delectus
          est voluptate molestiae sapiente quasi modi suscipit pariatur
          accusamus alias ullam porro. Dolorum, sint!]
        </Typography>
      </Container>
    </Paper>
  );
};

export default Property;
