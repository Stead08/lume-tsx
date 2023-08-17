import ExamplePage from "./pages/example.tsx";
import { ExamplePageProps } from "./pages/example.tsx";
export const IndexPage = () => {
  const examplePageProps: ExamplePageProps = {
    title: "Hello World",
    description: "This is a description",
    isImportant: true,
  }
  return (
      <>
      <head>
        <title>Index Page</title>
        <link rel="stylesheet" href="./pages/css/styles.css"/>
      </head>
      <body>
      <div>
        <h1>Index Page</h1>
        <ExamplePage {...examplePageProps} />
      </div>
      </body>
        </>
  );
};

export default IndexPage;
