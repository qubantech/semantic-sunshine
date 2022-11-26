import { createStyles, Card, Text, Title, Button, List } from '@mantine/core';

const useStyles = createStyles(theme => ({
  card: {
    height: 370,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontWeight: 800,
    lineHeight: 1.2,
    fontSize: 28,
    marginTop: theme.spacing.xs,
  },

  category: {
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
        backgroundPosition: '93% 82%',
        boxShadow: '5px 5px 5px rgba(92, 124, 250, 0.5)',
      }}
      className={classes.card}
    >
      <div>
        <Text c={'dimmed'} className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
        <List mt={20}>
          {pros.map(pro => {
            return <List.Item sx={{ maxWidth: '230px' }}>{pro}</List.Item>;
          })}
        </List>
      </div>
      <Button size={'md'} variant={'filled'} sx={{ minWidth: '150px' }}>
        {buttonLabel}
      </Button>
    </Card>
  );
}
