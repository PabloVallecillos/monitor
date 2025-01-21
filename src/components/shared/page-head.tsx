import { Helmet } from 'react-helmet';

export default function PageHead({ title = 'Isbue' }) {
  return (
    <Helmet>
      <title> {title} </title>
    </Helmet>
  );
}
