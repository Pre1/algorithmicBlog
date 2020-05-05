import matter from "gray-matter";

import Layout from "../components/Layout";

import PostList from "../components/PostList";

const Index = ({ title, description, posts, ...props }) => {
  return (
    <Layout pageTitle={title}>
      <h1>🚧 Under Construction 🚧 🚀</h1>
      <hr />
      <br />

      <main>
        <PostList posts={posts} />
      </main>
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value = values[index];
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context("../posts", true, /\.md$/));

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
      posts,
    },
  };
}
