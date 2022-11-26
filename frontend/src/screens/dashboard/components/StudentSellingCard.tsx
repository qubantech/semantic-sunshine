import { createStyles, Card, Text, Title, Button, List } from '@mantine/core';

const useStyles = createStyles(theme => ({
  card: {
    height: 400,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    color: '#25262B',
    fontWeight: 900,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: 'gray',
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface ArticleCardImageProps {
  image: string;
  title: string;
  category: string;
  pros: Array<string>;
  buttonLabel: string;
}

export function StudentSellingCard({ image, title, category, pros, buttonLabel }: ArticleCardImageProps) {
  const { classes } = useStyles();

  return (
    <Card
      shadow={'sm'}
      p={'lg'}
      radius={'md'}
      withBorder
      sx={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '40%',
        backgroundPosition: '90% 75%',
        boxShadow: '5px 5px 5px rgba(92, 124, 250, 0.5)',
      }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
        <List mt={20}>
          {pros.map(pro => {
            return <List.Item sx={{ maxWidth: '150px' }}>{pro}</List.Item>;
          })}
        </List>
      </div>
      <Button variant={'filled'} sx={{ minWidth: '100px' }}>
        {buttonLabel}
      </Button>
    </Card>
  );
}
