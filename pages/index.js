import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout';

const subjects = [
  'AAA',
  'ACC',
  'AES',
  'ACE',
  'AMS',
  'ATH',
  'APC',
  'ASO',
  'ARB',
  'ARC',
  'ART',
  'BIO',
  'BWS',
  'BUS',
  'BLS',
  'CPB',
  'CHM',
  'CHI',
  'CRD',
  'CLS',
  'CEC',
  'CAS',
  'CCA',
  'CMR',
  'CMA',
  'CIT',
  'CSE',
  'CMS',
  'CJS',
  'DST',
  'ECO',
  'EHS',
  'EDL',
  'EDP',
  'ECE',
  'EGM',
  'ENT',
  'ENG',
  'EGS',
  'ESP',
  'IES',
  'FSW',
  'FAS',
  'FST',
  'FIN',
  'FRE',
  'GEO',
  'GLG',
  'GER',
  'GTY',
  'GIC',
  'GHS',
  'GSC',
  'GRK',
  'HBW',
  'HST',
  'HON',
  'ISA',
  'BIS',
  'IMS',
  'IDS',
  'ITS',
  'ITL',
  'JPN',
  'JRN',
  'KNH',
  'KOR',
  'LAS',
  'LAT',
  'LST',
  'LUX',
  'MGT',
  'MKT',
  'MTH',
  'MME',
  'MAC',
  'MBI',
  'MSC',
  'MUS',
  'NSC',
  'NSG',
  'PHL',
  'PHY',
  'POL',
  'POR',
  'PLW',
  'PMD',
  'PSS',
  'PSY',
  'REL',
  'RUS',
  'SJS',
  'SOC',
  'SPN',
  'SPA',
  'STA',
  'STC',
  'EDT',
  'THE',
  'UNV',
  'WST',
  'WGS'
];

const SubjectLink = props => (
  <li>
    <a href={`/subject/${[props.id]}`}>{props.id}</a>
    {/* <Link href="/subject/[id]" as={`/subject/${props.id}`}>
      <a>{props.id}</a>
    </Link> */}
  </li>
);

const Home = () => (
  <Layout title="Home">
    <h1 className="title">Miami Course Explorer!</h1>

    <ul>
      {subjects.map(subject => (
        <SubjectLink key={subject} id={subject} />
      ))}
    </ul>

    <style jsx>{`
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
    `}</style>
  </Layout>
);

export default Home;
