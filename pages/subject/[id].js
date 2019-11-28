import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import fetch from 'isomorphic-unfetch';

const Subject = props => {
  const router = useRouter();
  const { data } = props || {};
  const { courseSections } = data || [];

  return (
    <Layout title={`Subject: ${router.query.id || ''}`}>
      <h1>{router.query.id}</h1>
      <ul>
        {courseSections.map(cs => (
          <li key={cs.courseId}>
            {cs.courseTitle}
            <p>{cs.courseDescription}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

Subject.getInitialProps = async function(context) {
  const { id } = context.query || {};
  const res = await fetch(
    `http://ws.miamioh.edu/courseSectionV2/202020.json?campusCode=O&courseSubjectCode=${id}`
  );
  const data = await res.json();

  console.log(data);

  return {
    data
  };
};

export default Subject;
