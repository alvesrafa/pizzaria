import Layout from '../components/Layout';
import { useAuth } from '../context';
import Login from './login';
import Main from './main';

export default function Page() {
  const { isLogged } = useAuth();

  if (isLogged)
    return (
      <Layout>
        <Main />
      </Layout>
    );

  return (
    <Layout background="#e2e7f4">
      <Login />
    </Layout>
  );
}

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(ctx) {
  console.log('Context', ctx);
  return {
    props: {
      // session: await getSession(context),
    },
  };
}
