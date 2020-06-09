import Layout from "../components/Layout";
import ReactMarkdown from "react-markdown";
import content from "./Ingredients";

const About = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`About | ${title}`} description={description}>
        <p>🚧 Under Construction 🚧 🚀</p>

        <ReactMarkdown source={content} />
      </Layout>
    </>
  );
};

export default About;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.aboutTitle,
      description: configData.default.description,
    },
  };
}
