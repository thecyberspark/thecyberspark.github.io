import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Basic Courses',
    Svg: require('@site/static/img/Documentation.svg').default,
    description: (
      <>
        These courses will provide you with the foundation you need to get involved. With Advanced CSS/SCSS to Angular and Spring Boot.
      </>
    ),
  },
  {
    title: 'Connectivity Suite Web Training',
    Svg: require('@site/static/img/Training.svg').default,
    description: (
      <>
        This section is for those who have complete the preious courses and now are ready to contribute in the Connectivity Suite Web Application.
      </>
    ),
  },
  {
    title: 'CS - UI - APPS',
    Svg: require('@site/static/img/CS-UI-APPS.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col row--3')} style={{width: '300px', height:'400px', border: "1.5px solid #D4D4D4", borderRadius:'5px', padding: "1px", margin: '30px '}}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container" >
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
