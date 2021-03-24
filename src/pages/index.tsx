import { GetServerSideProps } from 'next';

interface HomeProps {
  level: number;
  currentExp: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return <div>Teste</div>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // CTX é o contexto da minha apluicação

  return {
    props: {
      // level: Number(level),
      // currentExp: Number(currentExp),
      // challengesCompleted: Number(challengesCompleted),
    },
  };
};
